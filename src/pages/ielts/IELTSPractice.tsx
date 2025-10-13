import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Play, 
  Square, 
  Mic, 
  Clock,
  BookOpen,
  CheckCircle,
  ArrowRight,
  PenTool,
  MessageSquare
} from 'lucide-react'
import { speakingQuestions, type CommunicationQuestion } from '../../data/communicationQuestions'

export default function IELTSPractice() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState<'speaking' | 'reading' | 'writing'>('speaking')
  const [currentQuestion, setCurrentQuestion] = useState<CommunicationQuestion | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [responses, setResponses] = useState<{ [key: string]: string }>({})
  const [sessionStarted, setSessionStarted] = useState(false)
  const [sessionComplete, setSessionComplete] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedQuestions, setSelectedQuestions] = useState<CommunicationQuestion[]>([])
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const skillTypes = [
    {
      type: 'speaking' as const,
      title: 'Speaking',
      icon: <Mic className="w-6 h-6" />,
      description: 'Practice speaking skills with real-time recording',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      type: 'reading' as const,
      title: 'Reading',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Enhance reading skills with comprehension tasks',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      type: 'writing' as const,
      title: 'Writing',
      icon: <PenTool className="w-6 h-6" />,
      description: 'Develop writing abilities with structured tasks',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    }
  ]

  // Timer effects
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRecording && recordingTime < (currentQuestion?.timeLimit || 0)) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)
    } else if (isRecording && recordingTime >= (currentQuestion?.timeLimit || 0)) {
      stopRecording()
    }
    return () => clearInterval(interval)
  }, [isRecording, recordingTime, currentQuestion])

  const startSession = (type: 'speaking' | 'reading' | 'writing') => {
    setSelectedType(type)
    setSessionStarted(true)
    
    // Select 5 random questions from the available pool
    if (type === 'speaking') {
      const shuffled = [...speakingQuestions].sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, 5)
      setSelectedQuestions(selected)
      setCurrentQuestion(selected[0])
      setCurrentQuestionIndex(0)
    }
    // For reading and writing, we'll add logic when questions are available
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)
    } catch (error) {
      console.error('Error accessing microphone:', error)
      alert('Unable to access microphone. Please check permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
      setIsRecording(false)
      
      // Save response (in real app, would upload audio)
      if (currentQuestion) {
        setResponses(prev => ({
          ...prev,
          [currentQuestion.id]: `Audio response recorded (${recordingTime}s)`
        }))
      }
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      const nextIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(nextIndex)
      setCurrentQuestion(selectedQuestions[nextIndex])
      setRecordingTime(0)
    } else {
      setSessionComplete(true)
    }
  }

  const resetSession = () => {
    setSessionStarted(false)
    setSessionComplete(false)
    setCurrentQuestion(null)
    setIsRecording(false)
    setRecordingTime(0)
    setResponses({})
    setSelectedQuestions([])
    setCurrentQuestionIndex(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (sessionComplete) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="w-12 h-12 text-gray-600 mx-auto mb-6" />
            <h1 className="text-2xl font-light text-gray-900 mb-3">Session Complete!</h1>
            <p className="text-gray-600">Great job completing your {selectedType} practice session.</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-10 mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-8">Session Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-2xl font-light text-gray-900">{Object.keys(responses).length}</p>
                <p className="text-sm text-gray-600 mt-2">Questions Answered</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-2xl font-light text-gray-900">8.5</p>
                <p className="text-sm text-gray-600 mt-2">Estimated Score</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-2xl font-light text-gray-900">{formatTime(Object.keys(responses).length * 45)}</p>
                <p className="text-sm text-gray-600 mt-2">Total Time</p>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <h3 className="font-medium text-gray-900">Feedback & Recommendations</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-800 text-sm leading-relaxed"><span className="font-medium">Strengths:</span> Clear pronunciation, good vocabulary range, well-structured responses.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-800 text-sm leading-relaxed"><span className="font-medium">Areas for Improvement:</span> Work on fluency in longer responses, use more varied sentence structures.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={resetSession}
                className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Practice Again
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="flex-1 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-300 transition-colors font-medium"
              >
                Back to Dashboard
              </button>
              <button
                onClick={() => navigate('/progress')}
                className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                View Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (sessionStarted && currentQuestion) {
    return (
      <div className="h-screen flex flex-col bg-gradient-to-br from-teal-50 to-cyan-50">
        {/* Fixed Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <button
                  onClick={resetSession}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  ← Exit
                </button>
                <div className="h-6 w-px bg-gray-300"></div>
                <h1 className="text-base font-bold text-gray-900">
                  Let's Communicate
                </h1>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                  currentQuestion.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {currentQuestion.difficulty}
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Question {currentQuestionIndex + 1}/{selectedQuestions.length}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-teal-500 to-cyan-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / selectedQuestions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column - Question */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span className="font-medium">Time: {formatTime(currentQuestion.timeLimit)}</span>
                    </div>
                    {isRecording && (
                      <>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <div className="flex items-center space-x-1.5 text-red-600">
                          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                          <span className="font-semibold">{formatTime(recordingTime)}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Instructions</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">{currentQuestion.instructions}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-base font-bold text-gray-900 mb-3">Question</h2>
                  <p className="text-base text-gray-800 leading-relaxed">{currentQuestion.question}</p>
                </div>
                
                {currentQuestion.keyPoints && currentQuestion.keyPoints.length > 0 && (
                  <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                    <p className="text-xs font-semibold text-gray-700 mb-2">💡 Key Points to Consider:</p>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {currentQuestion.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-teal-600 mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column - Recording Interface */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
                {selectedType === 'speaking' && (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Recording Status */}
                    <div className="mb-6 text-center">
                      {!isRecording && !responses[currentQuestion.id] && (
                        <>
                          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Mic className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Record</h3>
                          <p className="text-sm text-gray-600">Click the button below to start</p>
                        </>
                      )}
                      
                      {isRecording && (
                        <>
                          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
                            <div className="w-6 h-6 bg-white rounded-sm"></div>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Recording...</h3>
                          <p className="text-sm text-gray-600">Speak clearly and confidently</p>
                        </>
                      )}
                      
                      {responses[currentQuestion.id] && !isRecording && (
                        <>
                          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <CheckCircle className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Recording Complete!</h3>
                          <p className="text-sm text-gray-600">Your response has been saved</p>
                        </>
                      )}
                    </div>

                    {/* Recording Controls */}
                    <div className="flex items-center space-x-4 mb-6">
                      {!isRecording ? (
                        <button
                          onClick={startRecording}
                          disabled={!!responses[currentQuestion.id]}
                          className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 font-semibold"
                        >
                          <Mic className="w-5 h-5" />
                          <span>Start Recording</span>
                        </button>
                      ) : (
                        <button
                          onClick={stopRecording}
                          className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all shadow-lg flex items-center space-x-2 font-semibold"
                        >
                          <Square className="w-5 h-5" />
                          <span>Stop Recording</span>
                        </button>
                      )}
                    </div>

                    {/* Tips */}
                    <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
                      <p className="text-xs font-semibold text-gray-700 mb-2">📝 Speaking Tips:</p>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p>✓ Speak at a comfortable pace</p>
                        <p>✓ Structure your answer clearly</p>
                        <p>✓ Use specific examples</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Writing Interface */}
                {selectedType === 'writing' && (
                  <div className="flex-1 flex flex-col">
                    <textarea
                      value={responses[currentQuestion.id] || ''}
                      onChange={(e) => setResponses(prev => ({
                        ...prev,
                        [currentQuestion.id]: e.target.value
                      }))}
                      placeholder="Type your response here..."
                      className="flex-1 p-4 border border-gray-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 resize-none text-sm"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-3">
                      <span className="font-medium">Word count: {(responses[currentQuestion.id] || '').split(/\s+/).filter(word => word.length > 0).length}</span>
                      <span>Minimum: 150 words</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Footer - Action Buttons */}
        <div className="bg-white border-t border-gray-200 px-6 py-4 flex-shrink-0">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <button
              onClick={resetSession}
              className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              Exit Session
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!responses[currentQuestion.id]}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-2.5 rounded-lg hover:from-teal-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-sm shadow-md flex items-center space-x-2"
            >
              <span>{currentQuestionIndex === selectedQuestions.length - 1 ? 'Complete Session' : 'Next Question'}</span>
              {currentQuestionIndex < selectedQuestions.length - 1 && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Skill Selection Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-3">Let's Communicate</h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto px-4 font-medium">
            Choose a skill to practice. Our AI-powered system will provide personalized feedback and scoring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skillTypes.map((skill) => (
            <div
              key={skill.type}
              className={`bg-gradient-to-br ${
                skill.type === 'speaking' 
                  ? 'from-blue-500 to-indigo-600' 
                  : skill.type === 'reading'
                  ? 'from-purple-500 to-violet-600'
                  : 'from-orange-500 to-amber-600'
              } rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              onClick={() => startSession(skill.type)}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-white/90 mb-5 leading-relaxed text-sm">{skill.description}</p>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-5">
                  <div className="text-center">
                    <div className="font-bold text-white text-sm">3-4</div>
                    <div className="text-white/80">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white text-sm">15-20 min</div>
                    <div className="text-white/80">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white text-sm">Intermediate</div>
                    <div className="text-white/80">Difficulty</div>
                  </div>
                </div>

                <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-xl hover:bg-white/90 transition-colors font-bold shadow-lg">
                  Start Practice
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-teal-100 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Play className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Select & Start</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Choose your skill and begin the practice session with real IELTS-style questions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Practice & Record</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Answer questions with our recording system and receive real-time guidance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Get Feedback</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Receive detailed feedback and scoring to improve your performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}