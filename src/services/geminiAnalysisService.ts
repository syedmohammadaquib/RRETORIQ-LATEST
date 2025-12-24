/**
 * Google Gemini AI Analysis Service
 * 
 * Analyzes interview answers using Google's Gemini 1.5 models
 * Much more cost-effective than OpenAI GPT-4 (~99% cheaper)
 * 
 * Pricing (as of 2025):
 * - Gemini 1.5 Flash: ~$0.0001 per analysis (recommended)
 * - Gemini 1.5 Pro: ~$0.001 per analysis (higher quality)
 */

// Proxy configuration - call server-side proxy which holds API keys
const API_PROXY_BASE = import.meta.env.VITE_API_PROXY_BASE || (typeof window !== 'undefined' && window.location && window.location.hostname.includes('rretoriq25.web.app') ? 'https://rretoriq-backend-api.vercel.app/api' : '/api')
const GEMINI_PROXY_URL = `${API_PROXY_BASE}/gemini-proxy`

// Gemini model (still configurable client-side, but key lives on server)
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash-exp'

export interface InterviewQuestion {
  id: string
  question: string
  type: 'behavioral' | 'technical' | 'situational' | 'case-study'
  difficulty: 'easy' | 'medium' | 'hard'
  skills: string[]
  expectedDuration: number // in seconds
  category: string
  framework?: string
}

export interface AnswerAnalysis {
  overallScore: number // 0-100
  transcript: string
  feedback: {
    strengths: string[]
    weaknesses: string[]
    suggestions: string[]
    detailedFeedback: string
  }
  scores: {
    clarity: number // 0-100
    relevance: number // 0-100
    structure: number // 0-100
    completeness: number // 0-100
    confidence: number // 0-100
  }
  keyPoints: {
    covered: string[]
    missed: string[]
  }
  timeManagement: {
    duration: number
    efficiency: 'excellent' | 'good' | 'average' | 'poor'
    pacing: string
  }
  processingTime: number
  framework?: string
}

export interface AnalysisRequest {
  transcript: string
  question: InterviewQuestion
  audioDuration: number // in seconds
  transcriptionConfidence: number
}

class GeminiAnalysisService {
  private model: string

  constructor() {
    // The API key and endpoint live on the server-side proxy.
    this.model = GEMINI_MODEL
  }

  /**
   * Generate detailed analysis prompt for Gemini
   */
  private generateAnalysisPrompt(
    question: InterviewQuestion,
    transcript: string,
    duration: number,
    confidence: number
  ): string {
    return `You are an expert interview coach analyzing a candidate's response. Provide comprehensive feedback.

QUESTION DETAILS:
- Question: "${question.question}"
- Type: ${question.type}
- Difficulty: ${question.difficulty}
- Skills Evaluated: ${question.skills.join(', ')}
- Expected Duration: ${question.expectedDuration} seconds
- Category: ${question.category}

CANDIDATE'S RESPONSE:
- Transcript: "${transcript}"
- Actual Duration: ${duration} seconds
- Transcription Confidence: ${Math.round(confidence * 100)}%

ANALYSIS INSTRUCTIONS:
Provide your analysis in **valid JSON format only**. No markdown, no code blocks, just pure JSON:

{
  "overallScore": <number 0-100>,
  "feedback": {
    "strengths": [<array of 3-5 specific strengths>],
    "weaknesses": [<array of 2-4 areas for improvement>],
    "suggestions": [<array of 3-5 actionable recommendations>],
    "detailedFeedback": "<2-3 sentence comprehensive feedback>"
  },
  "scores": {
    "clarity": <number 0-100>,
    "relevance": <number 0-100>,
    "structure": <number 0-100>,
    "completeness": <number 0-100>,
    "confidence": <number 0-100>
  },
  "keyPoints": {
    "covered": [<key points addressed>],
    "missed": [<important points not mentioned>]
  },
  "timeManagement": {
    "efficiency": "<excellent|good|average|poor>",
    "pacing": "<brief description of timing>"
  }
}

SCORING CRITERIA:
- Clarity: How clear and articulate is the response
- Relevance: How well the answer addresses the question
- Structure: Logical flow and organization
- Completeness: Thoroughness of the response
- Confidence: Perceived conviction and assertiveness

Return ONLY the JSON object, no additional text.`
  }

  /**
   * Generate static analysis based on framework and metrics
   * Used for voice section practice without calling AI APIs
   */
  generateStaticAnalysis(request: AnalysisRequest): AnswerAnalysis {
    const { question, transcript, audioDuration } = request
    const framework = question.framework || 'STAR'
    const wordCount = transcript.split(/\s+/).filter(w => w.length > 0).length
    const wpm = Math.round((wordCount / audioDuration) * 60)

    // Base scores
    let clarity = 85
    let relevance = 90
    let structure = 80
    let completeness = 75
    let confidence = 85

    // Adjust scores based on metrics
    if (audioDuration < 30) completeness -= 30
    if (wpm < 100) clarity -= 10
    if (wpm > 200) clarity -= 15
    if (wordCount < 40) relevance -= 20

    const overallScore = Math.round((clarity + relevance + structure + completeness + confidence) / 5)

    // Framework specific feedback
    const frameworkFeedback: Record<string, any> = {
      'STAR': {
        strengths: [
          'Excellent use of the Situation-Task-Action-Result structure',
          'Quantified results provided a clear sense of impact',
          'The Action phase demonstrated strong individual contribution',
          'Well-defined context that made the response easy to follow',
          'Appropriate level of detail without becoming overly verbose'
        ],
        weaknesses: [
          'The transition from Task to Action could be smoother',
          'Consider providing more detail on the specific "How" of the actions',
          'The result could be linked more directly back to the original problem',
          'Avoid using too much technical jargon in the Situation phase'
        ],
        suggestions: [
          'Spend less time on Context (approx 10%) and more on Action (60%)',
          'Use "I" instead of "We" to clearly claim your contributions',
          'Add a "Lesson Learned" at the end for extra depth',
          'Try to use stronger action verbs to describe your interventions',
          'Ensure the Situation sets a high-stakes tone to make the Result more impressive'
        ],
        detailed: `Your response followed the STAR (Situation, Task, Action, Result) method effectively. You established a clear context and showed exactly how you intervened. To improve, try to spend 60% of your time on the Action and Result phases, as these demonstrate your skills most clearly. Your delivery was confident and well-paced.`
      },
      'CAR': {
        strengths: [
          'Immediate focus on the Context allowed for a punchy opening',
          'Action sequence was logical and easy to visualize',
          'Results were concisely summarized and impact-oriented',
          'Great balance between technical skills and soft skills',
          'Response remained focused on the core objective throughout'
        ],
        weaknesses: [
          'The Context phase felt slightly rushed',
          'More emphasis on the specific obstacles faced would be beneficial',
          'Could elaborate more on the collaboration aspect during the Action phase',
          'The Result stage could benefit from a long-term perspective'
        ],
        suggestions: [
          'Elaborate on the tools or strategies used during the Action phase',
          'Make sure to mention the long-term impact of the Results',
          'Quantify the scope of the Context to set a better stage',
          'Connect the Result back to the initial challenge more explicitly',
          'Use professional vocabulary consistently throughout the narrative'
        ],
        detailed: `Great job using the CAR (Context, Action, Result) framework. Your delivery was structured and focused on outcomes. For your next practice, try to highlight the "why" behind your actions to show deeper strategic thinking and problem-solving maturity.`
      },
      'PAR': {
        strengths: [
          'The Problem statement was compelling and clear',
          'Action steps showed high degree of initiative and ownership',
          'Resolution was positive, professional, and definitive',
          'Demonstrated excellent critical thinking skills',
          'Strong narrative arc from challenge to success'
        ],
        weaknesses: [
          'The complexity of the problem could be further emphasized',
          'Some Action steps were a bit generic',
          'The link between Action and Resolution could be tightened',
          'Consider mentioning any trade-offs made during the process'
        ],
        suggestions: [
          'Dig deeper into the specific steps taken to solve the problem',
          'Highlight any unique innovations you brought to the task',
          'Explicitly state the "Resolution" to ensure it lands with the listener',
          'Provide a short reflection on what this experience taught you',
          'Maintain a consistent pace, especially during the more technical Action phase'
        ],
        detailed: `You successfully utilized the PAR (Problem, Action, Resolution) framework. Your response was solution-oriented and demonstrated strong ownership. Try to mention what you learned from this problem-solving experience to add more depth and show a growth mindset.`
      },
      'PREP': {
        strengths: [
          'Point was stated clearly at the beginning and end',
          'Reasons provided were logical and persuasive',
          'Example was highly relevant and illustrated the point well',
          'Excellent conciseness and punchy delivery',
          'Very easy to follow for a general audience'
        ],
        weaknesses: [
          'The Example could be more detailed to build more credibility',
          'The transition from Reason to Example was a bit fast',
          'The "Summary Point" was slightly different from the "Opening Point"'
        ],
        suggestions: [
          'Ensure the opening Point is a bold statement of your position',
          'Use "For instance" or "Specifically" to introduce your Example',
          'Restate your Point exactly at the end for maximum retention',
          'Link the Reason to a broader benefit or company goal',
          'Keep the narrative focused strictly on the single point you are making'
        ],
        detailed: `Your answer followed the PREP (Point, Reason, Example, Point) framework, making it very persuasive. This is an ideal structure for quick updates or handling Q&A. To improve further, ensure your example is as specific as possible with names or numbers.`
      }
    }

    const currentFeedback = frameworkFeedback[framework] || frameworkFeedback['STAR']

    // Additional generic feedback based on performance
    const extraStrengths = []
    if (wpm >= 130 && wpm <= 160) extraStrengths.push('Excellent pacing and speech rhythm')
    if (wordCount > 100) extraStrengths.push('Comprehensive coverage of the topic')
    if (confidence > 80) extraStrengths.push('Projected strong vocal confidence')
    if (clarity > 85) extraStrengths.push('Very clear pronunciation and articulation')

    return {
      overallScore,
      transcript,
      framework: framework,
      feedback: {
        strengths: [...currentFeedback.strengths, ...extraStrengths].slice(0, 6),
        weaknesses: [...currentFeedback.weaknesses, wordCount < 30 ? 'Response length is significantly below recommendation' : ''].filter(Boolean),
        suggestions: currentFeedback.suggestions,
        detailedFeedback: currentFeedback.detailed
      },
      scores: {
        clarity,
        relevance,
        structure,
        completeness,
        confidence
      },
      keyPoints: {
        covered: question.skills.slice(0, Math.ceil(question.skills.length * (relevance / 100))),
        missed: question.skills.slice(Math.ceil(question.skills.length * (relevance / 100)))
      },
      timeManagement: {
        duration: audioDuration,
        efficiency: audioDuration > 45 ? 'excellent' : 'good',
        pacing: wpm < 120 ? 'Deliberate and clear' : wpm > 170 ? 'Fast-paced' : 'Balanced and natural'
      },
      processingTime: 500
    }
  }

  /**
   * Analyze interview answer using Google Gemini
   */
  async analyzeAnswer(request: AnalysisRequest): Promise<AnswerAnalysis> {
    const startTime = Date.now()

    try {
      const prompt = this.generateAnalysisPrompt(
        request.question,
        request.transcript,
        request.audioDuration,
        request.transcriptionConfidence
      )

      console.log('🤖 Starting Gemini AI analysis via server proxy...', {
        model: this.model,
        questionType: request.question.type,
        transcriptLength: request.transcript.length,
        duration: request.audioDuration
      })

      const response = await fetch(GEMINI_PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: this.model, input: prompt })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: response.statusText } }))
        console.error('❌ Gemini API Error:', errorData)

        // Provide specific error messages
        if (response.status === 400) {
          throw new Error(`Invalid request: ${errorData.error?.message || 'Bad request'}`)
        } else if (response.status === 403) {
          throw new Error('Invalid Gemini API key. Please check your VITE_GEMINI_API_KEY')
        } else if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please wait a moment and try again')
        }

        throw new Error(`Gemini API error: ${errorData.error?.message || response.statusText}`)
      }

      const data = await response.json()
      const processingTime = Date.now() - startTime

      console.log('📊 Gemini API response received:', {
        hasCandidates: !!data.candidates,
        processingTime: `${processingTime}ms`
      })

      if (!data.candidates || data.candidates.length === 0) {
        throw new Error('No analysis results received from Gemini')
      }

      const candidate = data.candidates[0]
      if (!candidate.content || !candidate.content.parts || candidate.content.parts.length === 0) {
        throw new Error('Invalid response format from Gemini')
      }

      const analysisText = candidate.content.parts[0].text
      let analysisResult

      try {
        // Remove markdown code blocks if present
        let cleanedText = analysisText.trim()
        if (cleanedText.startsWith('```json')) {
          cleanedText = cleanedText.replace(/^```json\n/, '').replace(/\n```$/, '')
        } else if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```\n/, '').replace(/\n```$/, '')
        }

        analysisResult = JSON.parse(cleanedText)
      } catch (parseError) {
        console.error('Failed to parse Gemini response:', analysisText)
        throw new Error('Invalid JSON response from Gemini. Please try again.')
      }

      console.log('✅ Gemini analysis completed', {
        overallScore: analysisResult.overallScore,
        processingTime: `${processingTime}ms`,
        model: this.model
      })

      // Return the complete analysis with additional metadata
      return {
        ...analysisResult,
        transcript: request.transcript,
        timeManagement: {
          ...analysisResult.timeManagement,
          duration: request.audioDuration
        },
        processingTime
      }

    } catch (error) {
      const processingTime = Date.now() - startTime
      console.error('❌ Gemini analysis failed FULL DETAILS:', error) // Changed logging

      // Return fallback analysis
      return {
        overallScore: 0,
        transcript: request.transcript,
        feedback: {
          strengths: [],
          weaknesses: ['Analysis service temporarily unavailable'],
          suggestions: ['Please try again later'],
          detailedFeedback: 'We encountered an issue analyzing your response. Please try again later.'
        },
        scores: {
          clarity: 0,
          relevance: 0,
          structure: 0,
          completeness: 0,
          confidence: 0
        },
        keyPoints: {
          covered: [],
          missed: []
        },
        timeManagement: {
          duration: request.audioDuration,
          efficiency: 'poor',
          pacing: 'Unable to analyze due to service error'
        },
        processingTime
      }
    }
  }

  /**
   * Generate quick feedback for immediate display
   */
  generateQuickFeedback(transcript: string, duration: number) {
    const wordCount = transcript.split(/\s+/).filter((w: string) => w.length > 0).length
    const wordsPerMinute = Math.round((wordCount / duration) * 60)

    return {
      wordCount,
      duration,
      wordsPerMinute,
      estimatedScore: Math.min(Math.max(Math.round((wordCount / 100) * 80 + 20), 20), 95),
      quickTips: this.getQuickTips(wordCount, duration, wordsPerMinute)
    }
  }

  /**
   * Generate quick tips based on metrics
   */
  private getQuickTips(wordCount: number, duration: number, wpm: number): string[] {
    const tips: string[] = []

    if (duration < 30) {
      tips.push('Consider providing more detailed examples')
    } else if (duration > 180) {
      tips.push('Try to be more concise and focus on key points')
    }

    if (wpm < 100) {
      tips.push('Speaking a bit faster could help convey confidence')
    } else if (wpm > 200) {
      tips.push('Speaking slower could improve clarity')
    }

    if (wordCount < 50) {
      tips.push('Expanding with specific examples would strengthen your response')
    }

    return tips
  }

  /**
   * Check if service is properly configured
   */
  isConfigured(): boolean {
    // Client-side configuration always considered true because the server proxy
    // holds the required API key. This avoids exposing keys in the browser.
    return true
  }

  /**
   * Get current model being used
   */
  getModel(): string {
    return this.model
  }
}

// Export singleton instance
export const geminiAnalysisService = new GeminiAnalysisService()
export default geminiAnalysisService
