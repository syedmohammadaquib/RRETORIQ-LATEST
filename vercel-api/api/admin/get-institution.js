// Get institution data with student list
// GET /api/admin/get-institution?adminUserId=xxx
// or GET /api/admin/get-institution?institutionId=xxx

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = getFirestore();

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET requests allowed' });
  }

  try {
    const { adminUserId, institutionId } = req.query;

    if (!adminUserId && !institutionId) {
      return res.status(400).json({ 
        error: 'Either adminUserId or institutionId is required' 
      });
    }

    let institutionDoc;
    let institutionDocId;

    if (institutionId) {
      // Get by institution ID
      const docRef = db.collection('institutions').doc(institutionId);
      institutionDoc = await docRef.get();
      institutionDocId = institutionId;
    } else {
      // Get by admin user ID
      const query = await db
        .collection('institutions')
        .where('adminUserId', '==', adminUserId)
        .limit(1)
        .get();

      if (query.empty) {
        return res.status(404).json({ 
          error: 'No institution found for this admin',
          hasInstitution: false 
        });
      }

      institutionDoc = query.docs[0];
      institutionDocId = institutionDoc.id;
    }

    if (!institutionDoc.exists) {
      return res.status(404).json({ error: 'Institution not found' });
    }

    const institutionData = institutionDoc.data();
    const studentUsernames = institutionData.students || [];

    // Get detailed student information
    const studentsDetails = [];
    
    if (studentUsernames.length > 0) {
      // Fetch student details from users collection
      for (const username of studentUsernames) {
        const userQuery = await db
          .collection('users')
          .where('email', '==', username)
          .limit(1)
          .get();

        if (!userQuery.empty) {
          const userData = userQuery.docs[0].data();
          studentsDetails.push({
            id: userQuery.docs[0].id,
            username: username,
            email: userData.email,
            displayName: userData.displayName || 'N/A',
            createdAt: userData.createdAt,
          });
        } else {
          // Try by displayName
          const userQueryByName = await db
            .collection('users')
            .where('displayName', '==', username)
            .limit(1)
            .get();

          if (!userQueryByName.empty) {
            const userData = userQueryByName.docs[0].data();
            studentsDetails.push({
              id: userQueryByName.docs[0].id,
              username: username,
              email: userData.email,
              displayName: userData.displayName || 'N/A',
              createdAt: userData.createdAt,
            });
          }
        }
      }
    }

    return res.status(200).json({
      success: true,
      institution: {
        id: institutionDocId,
        name: institutionData.institutionName,
        adminUserId: institutionData.adminUserId,
        seatsPurchased: institutionData.seatsPurchased,
        seatsUsed: studentUsernames.length,
        seatsRemaining: institutionData.seatsPurchased - studentUsernames.length,
        students: studentsDetails,
        createdAt: institutionData.createdAt,
        updatedAt: institutionData.updatedAt,
      },
    });

  } catch (error) {
    console.error('❌ Error fetching institution:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to fetch institution data' 
    });
  }
};
