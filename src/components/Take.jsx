import { useState, useEffect } from "react";
import { getQuizFromLocalStorage } from "../utils/localStorage";

const TakeQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const storedQuiz = getQuizFromLocalStorage();
    if (storedQuiz) {
      setQuiz(storedQuiz);
      setUserAnswers(new Array(storedQuiz.questions.length).fill(null));
    }
  }, []);

  const handleAnswerChange = (qIndex, answer) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[qIndex] = answer;
    setUserAnswers(newUserAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctOption === userAnswers[index]) {
        score += 1;
      }
    });
    setScore(score);
  };

  const getFeedbackMessage = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) {
      return "Excellent! You got all the answers correct!";
    } else if (percentage >= 80) {
      return "Great job! You did very well!";
    } else if (percentage >= 50) {
      return "Good effort! You got more than half correct!";
    } else {
      return "Keep trying! Practice makes perfect!";
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const handleTryAgain = () => {
    window.location.reload();
  };

  if (score !== null) {
    return (
      <div className="max-w-4xl mx-auto p-8 h-screen overflow-hidden flex flex-col justify-evenly">
        <h1 className="text-2xl font-bold text-white underline text-center">
          {quiz.title}
        </h1>
        <div className="mt-4 py-10 px-4 bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg border rounded-lg">
          <h2 className="text-xl font-semibold text-white text-center">
            Your Score: {score} / {quiz.questions.length}
          </h2>
          <p className="mt-2 text-white text-center">
            {getFeedbackMessage(score, quiz.questions.length)}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleTryAgain}
            className="text-white border-2 py-2 px-8 rounded-full hover:bg-white hover:text-orange-400"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 h-screen flex flex-col justify-around overflow-hidden">
      <h1 className="text-2xl text-white text-center mt-4">
        Quiz Title: <span className="underline font-bold">{quiz.title}</span>
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-full">
          {quiz.questions.map((question, qIndex) => (
            <div
              key={qIndex}
              className={`transition-transform duration-500 ease-in-out ${
                currentQuestionIndex === qIndex
                  ? "translate-x-0"
                  : "translate-x-full"
              }`}
              style={{
                position:
                  currentQuestionIndex === qIndex ? "relative" : "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="mb-4 p-4 w-full h-[50vh] text-white flex flex-col justify-evenly bg-opacity-25 backdrop-filter backdrop-blur-lg border rounded-2xl">
                <label className="block text-gray-100">
                  {question.question}
                </label>
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center mb-2">
                    <input
                      type="radio"
                      name={`question${qIndex}`}
                      checked={userAnswers[qIndex] === option}
                      onChange={() => handleAnswerChange(qIndex, option)}
                      className="mr-2"
                    />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-8 mt-4">
        <button
          onClick={handlePreviousQuestion}
          className="bg-white text-orange-400 font-medium p-2 rounded-full"
        >
          Previous Question
        </button>
        <button
          onClick={handleNextQuestion}
          className="bg-white text-orange-400 font-medium p-2 rounded-full"
        >
          Next Question
        </button>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleSubmitQuiz}
          className="text-white border-2 py-2 px-8 rounded-full hover:bg-white hover:text-orange-400"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default TakeQuiz;
