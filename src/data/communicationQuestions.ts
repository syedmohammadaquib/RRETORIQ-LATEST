export interface CommunicationQuestion {
  id: string
  type: 'speaking' | 'reading' | 'writing' | 'voice'
  difficulty: 'Easy' | 'Medium' | 'Hard'
  question: string
  timeLimit: number // in seconds
  instructions: string
  expectedAnswerLength?: number
  keyPoints?: string[]
  audioPath?: string // For Situational Audio Practice
  skills?: string[] // Skills evaluated in this scenario
  framework?: string // Ideal framework to use for response (e.g., STAR)
}

// General Communication - Speaking Questions
export const speakingQuestions: CommunicationQuestion[] = [
  // Level 1 (Easy) - 53 questions
  {
    id: "speak-easy-001",
    type: "speaking",
    difficulty: "Easy",
    question: "One childhood memory that still makes you laugh?",
    timeLimit: 60,
    instructions: "Share a funny or memorable moment from your childhood. Speak naturally and describe what happened.",
    expectedAnswerLength: 60,
    keyPoints: ["Describe the situation", "Explain why it's funny", "Show emotion naturally"]
  },
  {
    id: "speak-easy-002",
    type: "speaking",
    difficulty: "Easy",
    question: "Hostel/home: one funniest incident that you can never forget.",
    timeLimit: 60,
    instructions: "Tell us about a funny incident that happened at your hostel or home.",
    expectedAnswerLength: 60,
    keyPoints: ["Set the scene", "Describe the incident", "Explain why it's memorable"]
  },
  {
    id: "speak-easy-003",
    type: "speaking",
    difficulty: "Easy",
    question: "What's one unwritten rule in your friend circle?",
    timeLimit: 45,
    instructions: "Describe an unspoken rule or tradition among your friends.",
    expectedAnswerLength: 45,
    keyPoints: ["Explain the rule", "Give context", "Show understanding of friendship dynamics"]
  },
  {
    id: "speak-easy-004",
    type: "speaking",
    difficulty: "Easy",
    question: "What's the most random fact you know?",
    timeLimit: 30,
    instructions: "Share an interesting or unusual fact you've learned.",
    expectedAnswerLength: 30,
    keyPoints: ["State the fact clearly", "Mention how you learned it", "Show curiosity"]
  },
  {
    id: "speak-easy-005",
    type: "speaking",
    difficulty: "Easy",
    question: "If you could instantly make one campus facility better, what would it be?",
    timeLimit: 45,
    instructions: "Identify a campus facility and explain how you would improve it.",
    expectedAnswerLength: 45,
    keyPoints: ["Name the facility", "Explain the problem", "Suggest practical improvement"]
  },
  {
    id: "speak-easy-006",
    type: "speaking",
    difficulty: "Easy",
    question: "If you had a chance to give a TED Talk tomorrow, what topic would you choose?",
    timeLimit: 60,
    instructions: "Choose a topic you're passionate about and explain why it matters.",
    expectedAnswerLength: 60,
    keyPoints: ["State the topic", "Explain your passion", "Show its relevance"]
  },
  {
    id: "speak-easy-007",
    type: "speaking",
    difficulty: "Easy",
    question: "Which habit of yours you secretly wish others had too?",
    timeLimit: 45,
    instructions: "Describe a positive habit you have and why you think others should adopt it.",
    expectedAnswerLength: 45,
    keyPoints: ["Name the habit", "Explain its benefits", "Show self-awareness"]
  },
  {
    id: "speak-easy-008",
    type: "speaking",
    difficulty: "Easy",
    question: "What's the funniest autocorrect/texting fail you've ever had?",
    timeLimit: 60,
    instructions: "Share a funny texting mistake and what happened as a result.",
    expectedAnswerLength: 60,
    keyPoints: ["Describe the situation", "Explain the autocorrect fail", "Share the outcome"]
  },
  {
    id: "speak-easy-009",
    type: "speaking",
    difficulty: "Easy",
    question: "One thing you wish professors understood about students?",
    timeLimit: 60,
    instructions: "Express a perspective from a student's point of view respectfully.",
    expectedAnswerLength: 60,
    keyPoints: ["State the issue", "Explain student perspective", "Be respectful"]
  },
  {
    id: "speak-easy-010",
    type: "speaking",
    difficulty: "Easy",
    question: "What's something you strongly believe but others often disagree with?",
    timeLimit: 60,
    instructions: "Share an opinion you hold and explain your reasoning.",
    expectedAnswerLength: 60,
    keyPoints: ["State your belief", "Provide reasoning", "Acknowledge different views"]
  },
  {
    id: "speak-easy-011",
    type: "speaking",
    difficulty: "Easy",
    question: "A social media trend you secretly like (or hate)?",
    timeLimit: 45,
    instructions: "Talk about a social media trend and your honest opinion about it.",
    expectedAnswerLength: 45,
    keyPoints: ["Name the trend", "Explain your view", "Be genuine"]
  },
  {
    id: "speak-easy-012",
    type: "speaking",
    difficulty: "Easy",
    question: "If you had to live without social media for a year, what would you miss most?",
    timeLimit: 60,
    instructions: "Reflect on your social media usage and its impact on your life.",
    expectedAnswerLength: 60,
    keyPoints: ["Identify what you'd miss", "Explain why", "Show self-reflection"]
  },
  {
    id: "speak-easy-013",
    type: "speaking",
    difficulty: "Easy",
    question: "If everyone in class had to wear the same T-shirt slogan, what should it say?",
    timeLimit: 45,
    instructions: "Suggest a creative or meaningful slogan for your class.",
    expectedAnswerLength: 45,
    keyPoints: ["Propose a slogan", "Explain its meaning", "Show creativity"]
  },
  {
    id: "speak-easy-014",
    type: "speaking",
    difficulty: "Easy",
    question: "If Wi-Fi stopped working worldwide for 24 hours, how would you spend the day?",
    timeLimit: 60,
    instructions: "Describe alternative activities you would do without internet access.",
    expectedAnswerLength: 60,
    keyPoints: ["List activities", "Show adaptability", "Be realistic"]
  },
  {
    id: "speak-easy-015",
    type: "speaking",
    difficulty: "Easy",
    question: "The most relatable hostel/PG struggle?",
    timeLimit: 45,
    instructions: "Share a common challenge of hostel or PG life.",
    expectedAnswerLength: 45,
    keyPoints: ["Describe the struggle", "Show humor", "Be relatable"]
  },
  {
    id: "speak-easy-016",
    type: "speaking",
    difficulty: "Easy",
    question: "A campus spot that feels underrated and why?",
    timeLimit: 45,
    instructions: "Talk about a campus location that deserves more attention.",
    expectedAnswerLength: 45,
    keyPoints: ["Name the spot", "Explain why it's underrated", "Share your experience"]
  },
  {
    id: "speak-easy-017",
    type: "speaking",
    difficulty: "Easy",
    question: "If you could master one skill overnight, what would it be?",
    timeLimit: 45,
    instructions: "Choose a skill and explain how it would benefit you.",
    expectedAnswerLength: 45,
    keyPoints: ["Name the skill", "Explain its value", "Show ambition"]
  },
  {
    id: "speak-easy-018",
    type: "speaking",
    difficulty: "Easy",
    question: "If laughter is the best medicine, what's your 'go-to' comedy moment?",
    timeLimit: 60,
    instructions: "Share something that always makes you laugh.",
    expectedAnswerLength: 60,
    keyPoints: ["Describe the moment", "Explain why it's funny", "Show personality"]
  },
  {
    id: "speak-easy-019",
    type: "speaking",
    difficulty: "Easy",
    question: "Which invention do you think has changed our lives the most?",
    timeLimit: 60,
    instructions: "Identify an invention and explain its impact on society.",
    expectedAnswerLength: 60,
    keyPoints: ["Name the invention", "Explain its impact", "Provide examples"]
  },
  {
    id: "speak-easy-020",
    type: "speaking",
    difficulty: "Easy",
    question: "If you could ask your future self one question, what would it be?",
    timeLimit: 45,
    instructions: "Think about what you'd want to know about your future.",
    expectedAnswerLength: 45,
    keyPoints: ["Ask a meaningful question", "Explain why", "Show forward thinking"]
  },
  {
    id: "speak-easy-021",
    type: "speaking",
    difficulty: "Easy",
    question: "What's one book/movie that changed the way you see the world?",
    timeLimit: 60,
    instructions: "Discuss a book or movie that had a significant impact on your perspective.",
    expectedAnswerLength: 60,
    keyPoints: ["Name the book/movie", "Explain the change", "Show depth of thought"]
  },
  {
    id: "speak-easy-022",
    type: "speaking",
    difficulty: "Easy",
    question: "If you had to give one piece of advice to your 12-year-old self, what would it be?",
    timeLimit: 60,
    instructions: "Reflect on what you've learned and share wisdom with your younger self.",
    expectedAnswerLength: 60,
    keyPoints: ["Give clear advice", "Explain reasoning", "Show maturity"]
  },
  {
    id: "speak-easy-023",
    type: "speaking",
    difficulty: "Easy",
    question: "What's one thing you've learned recently that surprised you?",
    timeLimit: 45,
    instructions: "Share a recent learning experience and why it was unexpected.",
    expectedAnswerLength: 45,
    keyPoints: ["State what you learned", "Explain the surprise", "Show curiosity"]
  },
  {
    id: "speak-easy-024",
    type: "speaking",
    difficulty: "Easy",
    question: "Would you rather always be 10 minutes late or 20 minutes early? Why?",
    timeLimit: 45,
    instructions: "Make a choice and explain your reasoning.",
    expectedAnswerLength: 45,
    keyPoints: ["Make a clear choice", "Provide reasoning", "Show decision-making"]
  },
  {
    id: "speak-easy-025",
    type: "speaking",
    difficulty: "Easy",
    question: "Is it better to know a little about many things or go deep in one?",
    timeLimit: 60,
    instructions: "Discuss the benefits of being a generalist vs. a specialist.",
    expectedAnswerLength: 60,
    keyPoints: ["Present both sides", "Share your view", "Use examples"]
  },
  {
    id: "speak-easy-026",
    type: "speaking",
    difficulty: "Easy",
    question: "Do you think technology connects us or isolates us more?",
    timeLimit: 60,
    instructions: "Reflect on technology's impact on human connections.",
    expectedAnswerLength: 60,
    keyPoints: ["Present balanced view", "Use personal examples", "Show critical thinking"]
  },
  {
    id: "speak-easy-027",
    type: "speaking",
    difficulty: "Easy",
    question: "If you could learn one skill instantly, how would it change your daily life?",
    timeLimit: 60,
    instructions: "Choose a skill and explain its practical impact on your routine.",
    expectedAnswerLength: 60,
    keyPoints: ["Name the skill", "Describe changes", "Be specific"]
  },
  {
    id: "speak-easy-028",
    type: "speaking",
    difficulty: "Easy",
    question: "What's a simple habit that you believe can change someone's life if practiced daily?",
    timeLimit: 60,
    instructions: "Suggest a habit and explain its transformative potential.",
    expectedAnswerLength: 60,
    keyPoints: ["Name the habit", "Explain benefits", "Show conviction"]
  },
  {
    id: "speak-easy-029",
    type: "speaking",
    difficulty: "Easy",
    question: "Which invention (past or present) do you think has made the biggest difference in how we live—and why?",
    timeLimit: 75,
    instructions: "Analyze an invention's impact on modern life.",
    expectedAnswerLength: 75,
    keyPoints: ["Name the invention", "Explain impact", "Provide examples"]
  },
  {
    id: "speak-easy-030",
    type: "speaking",
    difficulty: "Easy",
    question: "If technology disappeared for a week, what would people discover about themselves?",
    timeLimit: 60,
    instructions: "Reflect on our relationship with technology.",
    expectedAnswerLength: 60,
    keyPoints: ["Discuss self-discovery", "Show insight", "Be thoughtful"]
  },
  {
    id: "speak-easy-031",
    type: "speaking",
    difficulty: "Easy",
    question: "What's one belief or thought you had as a child that you see differently now?",
    timeLimit: 60,
    instructions: "Discuss how your perspective has matured.",
    expectedAnswerLength: 60,
    keyPoints: ["State childhood belief", "Explain change", "Show growth"]
  },
  {
    id: "speak-easy-032",
    type: "speaking",
    difficulty: "Easy",
    question: "What's something you think everyone should experience at least once in life?",
    timeLimit: 60,
    instructions: "Recommend an experience and explain its value.",
    expectedAnswerLength: 60,
    keyPoints: ["Name the experience", "Explain why", "Show passion"]
  },
  {
    id: "speak-easy-033",
    type: "speaking",
    difficulty: "Easy",
    question: "If you could ask your future self for advice, what do you think they would tell you?",
    timeLimit: 60,
    instructions: "Imagine what your future self would say to you now.",
    expectedAnswerLength: 60,
    keyPoints: ["Provide advice", "Show self-awareness", "Be genuine"]
  },
  {
    id: "speak-easy-034",
    type: "speaking",
    difficulty: "Easy",
    question: "Which person, famous or not, do you think has influenced the world the most?",
    timeLimit: 60,
    instructions: "Discuss someone's impact and why they're influential.",
    expectedAnswerLength: 60,
    keyPoints: ["Name the person", "Explain influence", "Show knowledge"]
  },
  {
    id: "speak-easy-035",
    type: "speaking",
    difficulty: "Easy",
    question: "Do you think people learn more from success or from failure? Why?",
    timeLimit: 60,
    instructions: "Share your perspective on learning and growth.",
    expectedAnswerLength: 60,
    keyPoints: ["State your view", "Provide reasoning", "Use examples"]
  },
  {
    id: "speak-easy-036",
    type: "speaking",
    difficulty: "Easy",
    question: "If you could change one small thing in society, what would you choose and why?",
    timeLimit: 60,
    instructions: "Identify a social issue and propose a change.",
    expectedAnswerLength: 60,
    keyPoints: ["Name the change", "Explain impact", "Be realistic"]
  },
  {
    id: "speak-easy-037",
    type: "speaking",
    difficulty: "Easy",
    question: "What's the funniest or most unforgettable memory you've had with your friends in college?",
    timeLimit: 75,
    instructions: "Share a memorable college moment with friends.",
    expectedAnswerLength: 75,
    keyPoints: ["Set the scene", "Tell the story", "Show emotion"]
  },
  {
    id: "speak-easy-038",
    type: "speaking",
    difficulty: "Easy",
    question: "What's one time your friends saved you from an awkward or funny situation?",
    timeLimit: 60,
    instructions: "Describe how your friends helped you in an awkward moment.",
    expectedAnswerLength: 60,
    keyPoints: ["Describe situation", "Explain how they helped", "Show gratitude"]
  },
  {
    id: "speak-easy-039",
    type: "speaking",
    difficulty: "Easy",
    question: "If you had to describe your class/group in three creative metaphors, what would they be?",
    timeLimit: 60,
    instructions: "Use creative comparisons to describe your class or group.",
    expectedAnswerLength: 60,
    keyPoints: ["Use metaphors", "Explain each one", "Show creativity"]
  },
  {
    id: "speak-easy-040",
    type: "speaking",
    difficulty: "Easy",
    question: "What's one memory from school/college that still makes you laugh every time you think of it?",
    timeLimit: 60,
    instructions: "Share a humorous memory from your education.",
    expectedAnswerLength: 60,
    keyPoints: ["Tell the story", "Explain why it's funny", "Show personality"]
  },
  {
    id: "speak-easy-041",
    type: "speaking",
    difficulty: "Easy",
    question: "What's one food that instantly reminds you of home—and why?",
    timeLimit: 45,
    instructions: "Connect a food item to your home and memories.",
    expectedAnswerLength: 45,
    keyPoints: ["Name the food", "Explain connection", "Share emotion"]
  },
  {
    id: "speak-easy-042",
    type: "speaking",
    difficulty: "Easy",
    question: "Which moment on campus made you feel truly connected to others?",
    timeLimit: 60,
    instructions: "Describe a moment of connection or belonging on campus.",
    expectedAnswerLength: 60,
    keyPoints: ["Describe the moment", "Explain feelings", "Show authenticity"]
  },
  {
    id: "speak-easy-043",
    type: "speaking",
    difficulty: "Easy",
    question: "If your college life were turned into a web series, what would the title and first episode be about?",
    timeLimit: 60,
    instructions: "Create a creative concept for a web series about your college life.",
    expectedAnswerLength: 60,
    keyPoints: ["Give title", "Describe episode", "Show creativity"]
  },
  {
    id: "speak-easy-044",
    type: "speaking",
    difficulty: "Easy",
    question: "What kind of work environment helps you perform at your best?",
    timeLimit: 60,
    instructions: "Describe your ideal work conditions and why they work for you.",
    expectedAnswerLength: 60,
    keyPoints: ["Describe environment", "Explain benefits", "Be specific"]
  },
  {
    id: "speak-easy-045",
    type: "speaking",
    difficulty: "Easy",
    question: "What do you consider your most significant weakness, and what steps are you taking to improve it?",
    timeLimit: 75,
    instructions: "Discuss a weakness and your improvement strategy.",
    expectedAnswerLength: 75,
    keyPoints: ["Identify weakness", "Show self-awareness", "Explain action plan"]
  },
  {
    id: "speak-easy-046",
    type: "speaking",
    difficulty: "Easy",
    question: "How do you define 'success' in your career?",
    timeLimit: 60,
    instructions: "Share your personal definition of professional success.",
    expectedAnswerLength: 60,
    keyPoints: ["Define success", "Explain reasoning", "Show values"]
  },
  {
    id: "speak-easy-047",
    type: "speaking",
    difficulty: "Easy",
    question: "What are your main career goals for the next two years?",
    timeLimit: 60,
    instructions: "Outline your short-term career objectives.",
    expectedAnswerLength: 60,
    keyPoints: ["State goals", "Explain why", "Show planning"]
  },
  {
    id: "speak-easy-048",
    type: "speaking",
    difficulty: "Easy",
    question: "How did you use the summer break to prepare for your career goals?",
    timeLimit: 60,
    instructions: "Describe productive activities during your summer break.",
    expectedAnswerLength: 60,
    keyPoints: ["List activities", "Connect to goals", "Show initiative"]
  },
  {
    id: "speak-easy-049",
    type: "speaking",
    difficulty: "Easy",
    question: "In what area have you seen the most personal or professional growth this year?",
    timeLimit: 60,
    instructions: "Reflect on your development over the past year.",
    expectedAnswerLength: 60,
    keyPoints: ["Identify area", "Describe growth", "Show self-reflection"]
  },
  {
    id: "speak-easy-050",
    type: "speaking",
    difficulty: "Easy",
    question: "Do you think people learn more from success or from failure? Why?",
    timeLimit: 60,
    instructions: "Share your perspective on learning experiences.",
    expectedAnswerLength: 60,
    keyPoints: ["State view", "Provide reasoning", "Use examples"]
  },
  {
    id: "speak-easy-051",
    type: "speaking",
    difficulty: "Easy",
    question: "What's something you think everyone should experience at least once in life?",
    timeLimit: 60,
    instructions: "Recommend a universal life experience.",
    expectedAnswerLength: 60,
    keyPoints: ["Name experience", "Explain value", "Show conviction"]
  },

  // Level 2 (Medium) - 47 questions
  {
    id: "speak-medium-001",
    type: "speaking",
    difficulty: "Medium",
    question: "Convince a skeptical customer to buy a product you don't believe is worth the price.",
    timeLimit: 90,
    instructions: "This is a role-play scenario. Practice your persuasion and sales skills.",
    expectedAnswerLength: 90,
    keyPoints: ["Use persuasion techniques", "Address objections", "Build value proposition"]
  },
  {
    id: "speak-medium-002",
    type: "speaking",
    difficulty: "Medium",
    question: "Deal with a colleague who's interfering in your project decisions.",
    timeLimit: 90,
    instructions: "Demonstrate conflict resolution and professional communication skills.",
    expectedAnswerLength: 90,
    keyPoints: ["Stay professional", "Set boundaries", "Find solution"]
  },
  {
    id: "speak-medium-003",
    type: "speaking",
    difficulty: "Medium",
    question: "Calm two employees who are arguing over credit for a successful campaign.",
    timeLimit: 90,
    instructions: "Show your mediation and leadership skills in resolving team conflicts.",
    expectedAnswerLength: 90,
    keyPoints: ["Stay neutral", "Acknowledge both sides", "Find fair solution"]
  },
  {
    id: "speak-medium-004",
    type: "speaking",
    difficulty: "Medium",
    question: "Explain your technical project to a non-technical team, using simple language.",
    timeLimit: 90,
    instructions: "Practice breaking down complex concepts into easy-to-understand terms.",
    expectedAnswerLength: 90,
    keyPoints: ["Simplify concepts", "Use analogies", "Check understanding"]
  },
  {
    id: "speak-medium-005",
    type: "speaking",
    difficulty: "Medium",
    question: "Make a boring product like staplers or office chairs sound exciting in an advertisement.",
    timeLimit: 75,
    instructions: "Use creative marketing language to make ordinary items appealing.",
    expectedAnswerLength: 75,
    keyPoints: ["Find unique angle", "Create excitement", "Use storytelling"]
  },
  {
    id: "speak-medium-006",
    type: "speaking",
    difficulty: "Medium",
    question: "Sell a pen to your manager who already owns several pens.",
    timeLimit: 75,
    instructions: "Classic sales challenge. Focus on value proposition and differentiation.",
    expectedAnswerLength: 75,
    keyPoints: ["Identify needs", "Differentiate product", "Close the sale"]
  },
  {
    id: "speak-medium-007",
    type: "speaking",
    difficulty: "Medium",
    question: "Ask your manager for a one-week leave during a critical project with a strict deadline, without affecting trust.",
    timeLimit: 90,
    instructions: "Balance personal needs with professional responsibilities.",
    expectedAnswerLength: 90,
    keyPoints: ["Timing is key", "Offer solutions", "Show commitment"]
  },
  {
    id: "speak-medium-008",
    type: "speaking",
    difficulty: "Medium",
    question: "Your team is facing a delay in project delivery, and the client is asking for updates. How will you communicate the situation honestly while managing their expectations?",
    timeLimit: 90,
    instructions: "Practice transparent communication while maintaining client confidence.",
    expectedAnswerLength: 90,
    keyPoints: ["Be honest", "Manage expectations", "Provide timeline"]
  },
  {
    id: "speak-medium-009",
    type: "speaking",
    difficulty: "Medium",
    question: "You're asked to work overtime to meet a project deadline, but you have personal plans. How do you handle this request from your manager?",
    timeLimit: 90,
    instructions: "Navigate work-life balance while showing professionalism.",
    expectedAnswerLength: 90,
    keyPoints: ["Assess priority", "Communicate clearly", "Find compromise"]
  },
  {
    id: "speak-medium-010",
    type: "speaking",
    difficulty: "Medium",
    question: "A new hire is struggling to adapt to the company's work culture. How will you mentor and guide them through the transition?",
    timeLimit: 90,
    instructions: "Demonstrate mentorship and empathy skills.",
    expectedAnswerLength: 90,
    keyPoints: ["Show empathy", "Provide guidance", "Build confidence"]
  },
  {
    id: "speak-medium-011",
    type: "speaking",
    difficulty: "Medium",
    question: "One of your team members is not pulling their weight on a project. How do you address this issue while maintaining a positive team dynamic?",
    timeLimit: 90,
    instructions: "Handle underperformance with tact and professionalism.",
    expectedAnswerLength: 90,
    keyPoints: ["Address privately", "Be specific", "Offer support"]
  },
  {
    id: "speak-medium-012",
    type: "speaking",
    difficulty: "Medium",
    question: "You discover a bug in the code that could delay the project. How do you communicate this to your manager and work to fix it without causing panic?",
    timeLimit: 90,
    instructions: "Balance transparency with solution-oriented communication.",
    expectedAnswerLength: 90,
    keyPoints: ["Report immediately", "Propose solution", "Stay calm"]
  },
  {
    id: "speak-medium-013",
    type: "speaking",
    difficulty: "Medium",
    question: "Your product is not performing well in the market. How do you adjust the marketing strategy to improve its sales and customer perception?",
    timeLimit: 105,
    instructions: "Show strategic thinking and problem-solving skills.",
    expectedAnswerLength: 105,
    keyPoints: ["Analyze problem", "Propose changes", "Show creativity"]
  },
  {
    id: "speak-medium-014",
    type: "speaking",
    difficulty: "Medium",
    question: "A colleague consistently asks you for help with technical issues, delaying your own work. How do you handle the situation without damaging your relationship?",
    timeLimit: 90,
    instructions: "Set boundaries while maintaining positive relationships.",
    expectedAnswerLength: 90,
    keyPoints: ["Set boundaries", "Offer alternatives", "Stay professional"]
  },
  {
    id: "speak-medium-015",
    type: "speaking",
    difficulty: "Medium",
    question: "You and your group have a huge project deadline tomorrow, but half of the team hasn't started. How do you motivate everyone to pull together and finish the project on time?",
    timeLimit: 90,
    instructions: "Demonstrate leadership and motivation skills under pressure.",
    expectedAnswerLength: 90,
    keyPoints: ["Take charge", "Divide tasks", "Motivate team"]
  },
  {
    id: "speak-medium-016",
    type: "speaking",
    difficulty: "Medium",
    question: "You're leading a group presentation, and one of your teammates is nervous about speaking in front of the class. How do you help them gain confidence?",
    timeLimit: 75,
    instructions: "Show empathy and coaching abilities.",
    expectedAnswerLength: 75,
    keyPoints: ["Offer support", "Practice together", "Build confidence"]
  },
  {
    id: "speak-medium-017",
    type: "speaking",
    difficulty: "Medium",
    question: "You're in charge of organizing a major college event, but the budget has been slashed at the last minute. How do you keep the event successful without compromising quality?",
    timeLimit: 90,
    instructions: "Demonstrate creativity and resourcefulness under constraints.",
    expectedAnswerLength: 90,
    keyPoints: ["Prioritize essentials", "Find alternatives", "Stay positive"]
  },
  {
    id: "speak-medium-018",
    type: "speaking",
    difficulty: "Medium",
    question: "You've been asked to code a fun, creative app for a college project, but your teammates don't agree on what direction to take. How do you settle the differences and decide on a final concept?",
    timeLimit: 90,
    instructions: "Show consensus-building and decision-making skills.",
    expectedAnswerLength: 90,
    keyPoints: ["Listen to all ideas", "Find common ground", "Make decision"]
  },
  {
    id: "speak-medium-019",
    type: "speaking",
    difficulty: "Medium",
    question: "Your professor is giving a tough exam, and a few classmates approach you with complaints about the difficulty. How do you handle this situation without creating conflict?",
    timeLimit: 75,
    instructions: "Navigate peer pressure while maintaining integrity.",
    expectedAnswerLength: 75,
    keyPoints: ["Stay neutral", "Be supportive", "Suggest constructive approach"]
  },
  {
    id: "speak-medium-020",
    type: "speaking",
    difficulty: "Medium",
    question: "You're applying for an internship, but the company asks you to explain how you've handled challenges in group projects during college. What's your answer?",
    timeLimit: 90,
    instructions: "Prepare a strong response using the STAR method (Situation, Task, Action, Result).",
    expectedAnswerLength: 90,
    keyPoints: ["Use STAR method", "Show problem-solving", "Highlight teamwork"]
  },
  {
    id: "speak-medium-021",
    type: "speaking",
    difficulty: "Medium",
    question: "One group member is always too busy to meet up for project discussions, but they still expect to get the same credit. How do you address this without causing tension?",
    timeLimit: 90,
    instructions: "Handle free-riding diplomatically.",
    expectedAnswerLength: 90,
    keyPoints: ["Address directly", "Be fair", "Find solution"]
  },
  {
    id: "speak-medium-022",
    type: "speaking",
    difficulty: "Medium",
    question: "You're tasked with promoting a new student app for your college, but many students are already using a competitor app. How do you convince them to make the switch?",
    timeLimit: 90,
    instructions: "Use marketing and persuasion techniques.",
    expectedAnswerLength: 90,
    keyPoints: ["Identify pain points", "Highlight benefits", "Create urgency"]
  },
  {
    id: "speak-medium-023",
    type: "speaking",
    difficulty: "Medium",
    question: "You're working on a collaborative assignment, but one member is constantly distracted with their phone and not contributing. How do you handle the situation in a way that doesn't create conflict?",
    timeLimit: 90,
    instructions: "Address poor participation tactfully.",
    expectedAnswerLength: 90,
    keyPoints: ["Private conversation", "Be specific", "Offer help"]
  },
  {
    id: "speak-medium-024",
    type: "speaking",
    difficulty: "Medium",
    question: "Your group is deciding on a topic for the final year project, but your classmates have conflicting ideas. How do you guide the team to choose a topic that works for everyone?",
    timeLimit: 90,
    instructions: "Facilitate group decision-making.",
    expectedAnswerLength: 90,
    keyPoints: ["List all options", "Evaluate criteria", "Reach consensus"]
  },
  {
    id: "speak-medium-025",
    type: "speaking",
    difficulty: "Medium",
    question: "You're leading a volunteer team to clean up the campus for an environmental initiative, but some volunteers are not showing up. How do you encourage them to participate?",
    timeLimit: 90,
    instructions: "Motivate volunteers and build commitment.",
    expectedAnswerLength: 90,
    keyPoints: ["Communicate impact", "Make it fun", "Show appreciation"]
  },
  {
    id: "speak-medium-026",
    type: "speaking",
    difficulty: "Medium",
    question: "As an intern, you're tasked with working on a presentation, but you realize that some parts of it are out of your depth. How do you ask for help without looking inexperienced?",
    timeLimit: 90,
    instructions: "Balance seeking help with showing competence.",
    expectedAnswerLength: 90,
    keyPoints: ["Be specific", "Show effort", "Ask smartly"]
  },
  {
    id: "speak-medium-027",
    type: "speaking",
    difficulty: "Medium",
    question: "You're handling the social media accounts for a big college event, but the event page is getting negative comments. How do you address these comments to save the event's reputation?",
    timeLimit: 90,
    instructions: "Practice crisis communication and reputation management.",
    expectedAnswerLength: 90,
    keyPoints: ["Respond quickly", "Stay professional", "Address concerns"]
  },
  {
    id: "speak-medium-028",
    type: "speaking",
    difficulty: "Medium",
    question: "Your roommate keeps borrowing your stuff without asking, and it's starting to bother you. How do you talk to them without causing drama?",
    timeLimit: 75,
    instructions: "Handle personal boundary issues maturely.",
    expectedAnswerLength: 75,
    keyPoints: ["Be direct", "Stay calm", "Set boundaries"]
  },
  {
    id: "speak-medium-029",
    type: "speaking",
    difficulty: "Medium",
    question: "Your team suggests adding a feature you believe is unnecessary. How do you present your point diplomatically?",
    timeLimit: 75,
    instructions: "Disagree professionally and constructively.",
    expectedAnswerLength: 75,
    keyPoints: ["Acknowledge idea", "Present reasoning", "Suggest alternative"]
  },
  {
    id: "speak-medium-030",
    type: "speaking",
    difficulty: "Medium",
    question: "You have to pitch your final-year project idea in just one minute to your faculty.",
    timeLimit: 60,
    instructions: "Practice concise and compelling elevator pitch.",
    expectedAnswerLength: 60,
    keyPoints: ["Hook attention", "Explain value", "Call to action"]
  },
  {
    id: "speak-medium-031",
    type: "speaking",
    difficulty: "Medium",
    question: "Your prototype failed in testing. How do you present this setback positively in a review meeting?",
    timeLimit: 90,
    instructions: "Turn failure into learning opportunity.",
    expectedAnswerLength: 90,
    keyPoints: ["Acknowledge failure", "Share learnings", "Present next steps"]
  },
  {
    id: "speak-medium-032",
    type: "speaking",
    difficulty: "Medium",
    question: "Two team members are constantly clashing over who gets credit for an idea. How do you resolve it?",
    timeLimit: 90,
    instructions: "Mediate conflict and promote collaboration.",
    expectedAnswerLength: 90,
    keyPoints: ["Hear both sides", "Focus on team success", "Find fair solution"]
  },
  {
    id: "speak-medium-033",
    type: "speaking",
    difficulty: "Medium",
    question: "Half your classmates want online classes, half want offline. How do you present a fair proposal to faculty?",
    timeLimit: 90,
    instructions: "Build consensus and present balanced solution.",
    expectedAnswerLength: 90,
    keyPoints: ["Consider both sides", "Propose hybrid", "Show benefits"]
  },
  {
    id: "speak-medium-034",
    type: "speaking",
    difficulty: "Medium",
    question: "You have 60 seconds to introduce yourself in a mock interview — what's your pitch?",
    timeLimit: 60,
    instructions: "Craft a strong personal introduction for interviews.",
    expectedAnswerLength: 60,
    keyPoints: ["Name and background", "Key strengths", "Career goals"]
  },
  {
    id: "speak-medium-035",
    type: "speaking",
    difficulty: "Medium",
    question: "You are a Club Member and you're asked to announce your club's event in front of the class unexpectedly.",
    timeLimit: 60,
    instructions: "Practice impromptu speaking with confidence.",
    expectedAnswerLength: 60,
    keyPoints: ["Get attention", "Share details", "Create excitement"]
  },
  {
    id: "speak-medium-036",
    type: "speaking",
    difficulty: "Medium",
    question: "You realize your teammate took credit for your contribution in a presentation. How do you respond?",
    timeLimit: 90,
    instructions: "Address credit appropriation professionally.",
    expectedAnswerLength: 90,
    keyPoints: ["Stay calm", "Private conversation", "Clarify facts"]
  },
  {
    id: "speak-medium-037",
    type: "speaking",
    difficulty: "Medium",
    question: "You're working under two seniors giving conflicting instructions. What will you do?",
    timeLimit: 90,
    instructions: "Navigate conflicting directives diplomatically.",
    expectedAnswerLength: 90,
    keyPoints: ["Seek clarification", "Communicate with both", "Find alignment"]
  },
  {
    id: "speak-medium-038",
    type: "speaking",
    difficulty: "Medium",
    question: "Your senior gives you critical feedback in front of everyone. How do you react maturely?",
    timeLimit: 75,
    instructions: "Handle public criticism with grace.",
    expectedAnswerLength: 75,
    keyPoints: ["Stay composed", "Acknowledge feedback", "Thank them"]
  },
  {
    id: "speak-medium-039",
    type: "speaking",
    difficulty: "Medium",
    question: "You're new and feel underutilized. How will you ask for more responsibilities respectfully?",
    timeLimit: 75,
    instructions: "Show initiative while being respectful.",
    expectedAnswerLength: 75,
    keyPoints: ["Express interest", "Show capability", "Ask for opportunity"]
  },
  {
    id: "speak-medium-040",
    type: "speaking",
    difficulty: "Medium",
    question: "The client asks a question you don't know the answer to. How will you handle it on the spot?",
    timeLimit: 75,
    instructions: "Handle knowledge gaps professionally.",
    expectedAnswerLength: 75,
    keyPoints: ["Be honest", "Offer to follow up", "Show competence"]
  },
  {
    id: "speak-medium-041",
    type: "speaking",
    difficulty: "Medium",
    question: "Your senior keeps redoing your work without explaining why. How do you bring it up?",
    timeLimit: 90,
    instructions: "Seek feedback constructively.",
    expectedAnswerLength: 90,
    keyPoints: ["Ask for meeting", "Seek understanding", "Request guidance"]
  },
  {
    id: "speak-medium-042",
    type: "speaking",
    difficulty: "Medium",
    question: "During HR round, you're asked to share your biggest mistake, how do you answer it wisely?",
    timeLimit: 90,
    instructions: "Turn weakness question into strength.",
    expectedAnswerLength: 90,
    keyPoints: ["Choose real mistake", "Show learning", "Demonstrate growth"]
  },
  {
    id: "speak-medium-043",
    type: "speaking",
    difficulty: "Medium",
    question: "You disagree with the company's approach but don't want to sound arrogant. How do you phrase your point?",
    timeLimit: 90,
    instructions: "Disagree diplomatically and professionally.",
    expectedAnswerLength: 90,
    keyPoints: ["Acknowledge approach", "Present alternative", "Be respectful"]
  },
  {
    id: "speak-medium-044",
    type: "speaking",
    difficulty: "Medium",
    question: "You notice an unethical practice in your department. How do you bring it up responsibly?",
    timeLimit: 90,
    instructions: "Address ethical concerns appropriately.",
    expectedAnswerLength: 90,
    keyPoints: ["Gather facts", "Follow channels", "Stay professional"]
  },
  {
    id: "speak-medium-045",
    type: "speaking",
    difficulty: "Medium",
    question: "Your friend suggests copying a project from GitHub. How do you convince them not to?",
    timeLimit: 75,
    instructions: "Stand up for academic integrity.",
    expectedAnswerLength: 75,
    keyPoints: ["Explain consequences", "Suggest alternatives", "Show integrity"]
  },
  {
    id: "speak-medium-046",
    type: "speaking",
    difficulty: "Medium",
    question: "You're given a random object (like a paperclip) and must describe its creative uses.",
    timeLimit: 60,
    instructions: "Show creativity and lateral thinking.",
    expectedAnswerLength: 60,
    keyPoints: ["Multiple uses", "Be creative", "Think differently"]
  },
  {
    id: "speak-medium-047",
    type: "speaking",
    difficulty: "Medium",
    question: "Your parents think coding is just 'sitting on a laptop all day.' How do you explain its value?",
    timeLimit: 90,
    instructions: "Explain technical work to non-technical audience.",
    expectedAnswerLength: 90,
    keyPoints: ["Use analogies", "Show impact", "Be patient"]
  }
]

// Situational Audio Practice Questions
export const voiceQuestions: CommunicationQuestion[] = [
  {
    id: "voice-easy-001",
    type: "voice",
    difficulty: "Easy",
    question: "The \"Borrowed Grade\": It's the night before the Final Year Project submission. Your partner, who has contributed nothing all year due to 'personal issues,' begs you to include their name on the code you wrote entirely by yourself. They say, 'If I don't pass this, I lose my job offer and my degree. Please, I'll pay you or do your chores for a year.' You worked 200 hours on this. They worked zero. The submission portal requires a 'Contribution Percentage' for each member. If you put 100% for yourself, they fail. If you put 50/50, you are lying to the university. Question: How do you handle the 'Free Rider' without being the 'Villain'?",
    timeLimit: 60,
    instructions: "Handle a difficult academic integrity situation involving a personal friend and high stakes.",
    audioPath: "/audio/The Borrowed Grade.mp3",
    keyPoints: [
      "Listen openly",
      "Ask questions",
      "Apply feedback",
      "Improve continuously"
    ],
    skills: ["Coachability", "Emotional Intelligence", "Growth Mindset"],
    framework: "STAR"
  },
  {
    id: "voice-easy-002",
    type: "voice",
    difficulty: "Easy",
    question: "The Fake Internship: You're offered an internship that turns out to be unpaid labor with no learning. How do you handle the exit?",
    timeLimit: 60,
    instructions: "Listen to the employer's pitch and professionally decline or discuss the terms.",
    audioPath: "/audio/The Fake Internship.mp3",
    keyPoints: ["Know your value", "Be professional", "Set boundaries"]
  },
  {
    id: "voice-easy-003",
    type: "voice",
    difficulty: "Easy",
    question: "The Ghosted Client: You've just taken over a client who was ignored for weeks. What's your first move?",
    timeLimit: 60,
    instructions: "Listen to the frustrated client and attempt to de-escalate the situation.",
    audioPath: "/audio/The Ghosted Client.mp3",
    keyPoints: ["Empathize", "Take ownership", "Actionable next steps"]
  },
  {
    id: "voice-medium-001",
    type: "voice",
    difficulty: "Medium",
    question: "The \"Stolen Project\": You've spent six months developing an innovative AI app for the college tech-fest. You shared your documentation with a junior you were mentoring, trusting them to learn from it. On the day of the fest, you walk in to find that the junior has submitted your project under their own name. Because they submitted it two hours before you, the system flags your submission as the duplicate. The junior comes to you crying, saying they were under immense pressure from their parents to win. They beg you not to report them. The judges are about to announce the winner. Question: Do you expose the junior and reclaim your hard work, or do you sacrifice your credit to save a younger student's reputation?",
    timeLimit: 90,
    instructions: "Address a betrayal of trust and intellectual property theft while considering the ethical implications and pressure on others.",
    audioPath: "/audio/The Borrowed Research.mp3",
    keyPoints: [
      "Recognize issue",
      "Refuse shortcut",
      "Suggest ethical option",
      "Escalate if needed"
    ],
    skills: ["Integrity", "Ethical Reasoning", "Responsibility"],
    framework: "PAR"
  },
  {
    id: "voice-medium-002",
    type: "voice",
    difficulty: "Medium",
    question: "The \"Client's False Hope\": You are the lead engineer on a call with a global client. Your Sales Head is desperate to close this million-dollar deal to save the company from a bad quarter. The client asks, 'Can this system handle 10,000 concurrent users without lag?' You know the limit is 5,000. Before you can speak, the Sales Head says, 'Absolutely! It can handle 15,000 easily.' The client picks up the pen to sign. Your Sales Head looks at you and says, 'Right, [Your Name]? Our Lead Engineer can confirm.' Every eye in the room is on you. Question: Do you lie to save the deal and the company's quarter, or do you tell the truth and risk losing the contract?",
    timeLimit: 90,
    instructions: "Manage complex client-facing expectations while maintaining ethics and honesty under pressure from leadership.",
    audioPath: "/audio/The Client's False Hope.mp3",
    keyPoints: [
      "Clarify misunderstanding",
      "Explain limits",
      "Offer alternatives",
      "Maintain trust"
    ],
    skills: ["Client Communication", "Expectation Management", "Ethics", "Problem Solving"],
    framework: "STAR"
  },
  {
    id: "voice-medium-003",
    type: "voice",
    difficulty: "Medium",
    question: "The Club Funds: You found a discrepancy in the student club's accounts. How do you report it?",
    timeLimit: 90,
    instructions: "Listen to the club president's explanation and decide how to proceed.",
    audioPath: "/audio/The Club Funds.mp3",
    keyPoints: ["Focus on facts", "Transparency", "Accountability"]
  },
  {
    id: "voice-medium-004",
    type: "voice",
    difficulty: "Medium",
    question: "The Credit Stealer: You and your colleague, Rahul, worked all weekend on a technical solution for a major client. You did the heavy lifting on the coding and logic, while Rahul handled the PowerPoint presentation. During the meeting with the Manager, Rahul presents the solution using \"I\" instead of \"We,\" making it look like the entire technical breakthrough was his idea. The Manager is highly impressed and hints at a promotion for Rahul. Question: The meeting has just ended. Rahul is walking back to his desk, smiling. Do you confront him immediately in the hallway, wait to talk to him privately, or send an email to the Manager clarifying your contribution with proof? What is the most professional way to handle this without looking 'bitter'?",
    timeLimit: 90,
    instructions: "Address the issue professionally while maintaining the working relationship. Aim to clarify your contribution without sounding bitter.",
    audioPath: "/audio/The Credit Stealer.mp3",
    keyPoints: [
      "Address issue calmly",
      "Clarify contribution",
      "Choose right timing",
      "Maintain relationship"
    ],
    skills: ["Communication", "Assertiveness", "Professionalism", "Conflict Management"],
    framework: "STAR"
  },
  {
    id: "voice-medium-005",
    type: "voice",
    difficulty: "Medium",
    question: "The Diversity Hire: You overhear HR discussing a colleague's background in an unprofessional way. How do you intervene?",
    timeLimit: 90,
    instructions: "Listen to the conversation and decide if/how to address the bias.",
    audioPath: "/audio/The Diversity Hire.mp3",
    keyPoints: ["Address the behavior", "Stay professional", "Uphold values"]
  },
  {
    id: "voice-medium-006",
    type: "voice",
    difficulty: "Medium",
    question: "The Manager's Shadow: Your manager wants to join every single client call you have. How do you ask for autonomy?",
    timeLimit: 90,
    instructions: "Listen to the manager's 'supportive' offer and negotiate your independence.",
    audioPath: "/audio/The Manager's Shadow.mp3",
    keyPoints: ["Show competence", "Explain impact on flow", "Suggest weekly syncs"]
  },
  {
    id: "voice-medium-006",
    type: "voice",
    difficulty: "Medium",
    question: "The Over-Allocated Lead: Your lead is clearly burned out and missed a critical deadline. How do you support them?",
    timeLimit: 90,
    instructions: "Listen to the lead's frustration and offer a constructive path forward.",
    audioPath: "/audio/The Over-Allocated Lead.mp3",
    keyPoints: ["Empathy", "Practical help", "Respectful escalation"]
  },
  {
    id: "voice-hard-001",
    type: "voice",
    difficulty: "Hard",
    question: "The \"Whistleblower's Price\": While auditing the company's server logs, you discover that the VP of Engineering has been selling user data to a third-party marketing firm. This is a massive violation of privacy laws. Before you can report it, the VP calls you into his office. He offers you a massive promotion and a 'discretionary bonus' that would pay off your entire education loan. He says, 'It's a win-win. The users aren't hurt, and you're set for life.' If you take the money, you're complicit in a crime. If you report it, the VP is powerful enough to make sure you never work in the tech industry again. Question: Is your integrity worth more than your financial freedom and career security?",
    timeLimit: 120,
    instructions: "Confront a major legal and ethical violation involving senior leadership and significant personal incentives.",
    audioPath: "/audio/The Bug in the Bank.mp3",
    keyPoints: [
      "Stay calm",
      "Acknowledge concern",
      "Identify issue",
      "Resolve professionally"
    ],
    skills: ["Emotional Control", "Client Handling", "Communication"],
    framework: "STAR"
  },
  {
    id: "voice-hard-002",
    type: "voice",
    difficulty: "Hard",
    question: "The \"Placement Dilemma\": Your best friend, who is struggling financially, desperately needs a job. You both are sitting for a coding round of a dream company. During the online test, you notice that your friend is using a hidden mobile phone to search for answers. The proctor (invigilator) is looking the other way, but the company has a 'zero tolerance' policy. If he gets caught, he’s blacklisted from all future placements. If you don't say anything, he might take a spot from a more deserving, honest candidate. Question: As a friend and a competitor, what do you do? Do you ignore it because of his situation, or do you anonymously report it to maintain the integrity of the process? How do you balance empathy with professional ethics?",
    timeLimit: 120,
    instructions: "Navigate this high-stakes ethical conflict. Show how you balance personal relationships with professional integrity and fairness.",
    audioPath: "/audio/The Compromised Proctor.mp3",
    keyPoints: [
      "Acknowledge conflict",
      "Refuse unethical act",
      "Offer alternative help",
      "Stand by values"
    ],
    skills: ["Ethical Judgment", "Integrity", "Emotional Intelligence", "Decision-Making"],
    framework: "PAR"
  },
  {
    id: "voice-hard-003",
    type: "voice",
    difficulty: "Hard",
    question: "The \"Legacy Code\" Trap: You've been at your dream job for three months. Tomorrow is the launch of the company's biggest product. But while running a final check, you find a critical security flaw in the legacy code—code that was written by your current boss five years ago. You show it to your boss. He frowns and says, 'That's not a bug, it's a feature. If we fix it now, the launch is delayed, and we lose millions. Keep your mouth shut and sign off on the QA report.' If you sign, the product is vulnerable to hackers. If you don't, you are disobeying a direct order from the person who decides your career growth. Question: What do you do? Sign the report, or escalate the issue to the CTO?",
    timeLimit: 120,
    instructions: "Handle a critical technical and ethical dilemma involving hierarchy, security risks, and high-stakes deadlines.",
    audioPath: "/audio/The Legacy Code Trap.mp3",
    keyPoints: [
      "Assess scope",
      "Seek guidance",
      "Break problem",
      "Communicate risks"
    ],
    skills: ["Problem Solving", "Adaptability", "Time Management", "Technical Communication"],
    framework: "STAR"
  },
  {
    id: "voice-hard-004",
    type: "voice",
    difficulty: "Hard",
    question: "The \"Placement Betrayal\": It's Day 1 of placements. You and your best friend have reached the final interview round for a high-paying Tech Giant. There is only one vacancy left for your campus. While waiting in the lobby, your friend leaves their phone on the chair. A notification pops up—it's a text from the HR manager of that company. It says: 'Don't worry about the final round, I've got your back. Just don't tell your friend.' You realize your friend has been 'networking' unethically to steal the spot you both worked for. It's your turn to walk into the interview room right now. Question: Do you perform your best and ignore it, or do you mention to the panel that you're aware of the 'internal' selection process?",
    timeLimit: 120,
    instructions: "Manage intense emotional and ethical pressure in a competitive collegiate environment.",
    audioPath: "/audio/The Diversity Hire.mp3",
    keyPoints: [
      "Manage emotions",
      "Support professionality",
      "Self-reflect",
      "Stay motivated"
    ],
    skills: ["Emotional Intelligence", "Resilience", "Professional Attitude"],
    framework: "CAR"
  },
  {
    id: "voice-hard-005",
    type: "voice",
    difficulty: "Hard",
    question: "The \"Cost-Cutting\" Danger: The company is facing a massive financial crunch. To stay afloat, the Procurement Head decides to swap the high-grade industrial sensors in your project with a cheaper, uncertified alternative from a local vendor. You run the simulations. The cheap sensors work fine under normal conditions, but they have a 15% failure rate in extreme heat. Your supervisor says, 'The odds are low. We'll save 2 million dollars. Just sign the safety clearance.' If the sensors fail in the field, it could cause a fire. If you refuse to sign, the project stops, and the company might go bankrupt, leading to 500 people losing their jobs. Question: Do you prioritize the 'mathematical probability' of safety or the 'economic reality' of the company's survival?",
    timeLimit: 120,
    instructions: "Balance safety standards against business survival during a financial crisis.",
    audioPath: "/audio/The Cost-Cutting Danger.mp3",
    keyPoints: [
      "Be respectful",
      "Present facts",
      "Choose right moment",
      "Accept decision"
    ],
    skills: ["Professional Communication", "Assertiveness", "Respect"],
    framework: "STAR"
  }
]

// Export all questions
export const communicationQuestions: CommunicationQuestion[] = [
  ...speakingQuestions,
  ...voiceQuestions
]
