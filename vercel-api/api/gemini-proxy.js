export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { question, answer, metadata } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ Gemini API key not found");
      return res.status(500).json({ error: "Gemini API key not configured." });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are an AI interview evaluator.
Analyze this candidate's spoken answer and give a short structured communication-skill analysis.

Question: ${question}
Answer: ${answer}
Metadata: ${JSON.stringify(metadata)}

Return JSON with keys:
{
  "clarity": "score out of 10",
  "confidence": "score out of 10",
  "fluency": "score out of 10",
  "summary": "short human-readable feedback"
}`,
            },
          ],
        },
      ],
    };

    const geminiResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const raw = await geminiResponse.text();
    console.log("🔍 Gemini Raw Response:", raw);

    if (!geminiResponse.ok) {
      return res.status(500).json({ error: `Gemini API error: ${raw}` });
    }

    const data = JSON.parse(raw);
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return res.status(200).json({ result: text });
  } catch (error) {
    console.error("❌ Gemini Proxy Crash:", error);
    return res
      .status(500)
      .json({ error: error.message || "Gemini Proxy internal error" });
  }
}
