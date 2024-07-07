import { useState, useEffect } from "react";

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", ""], correctOption: "" },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Clear local storage when the component mounts to start fresh
    localStorage.removeItem("quiz");
  }, []);

  useEffect(() => {
    // Save quiz to local storage on every change
    localStorage.setItem(
      "quiz",
      JSON.stringify({ title: quizTitle, questions })
    );
  }, [quizTitle, questions]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", ""], correctOption: "" },
    ]);
    setCurrentQuestionIndex(questions.length); // Move to the new question
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectOptionChange = (qIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctOption = value;
    setQuestions(newQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleAddQuestion();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSaveQuiz = () => {
    // The quiz is already being saved to local storage on every change
    console.log({ quizTitle, questions });
  };

  return (
    <div className="w-full mx-auto py-8 h-full overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Create Quiz</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold tracking-wider">
          Quiz Title
        </label>
        <input
          type="text"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="w-full">
          {questions.map((question, qIndex) => (
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
              <div className="mb-4 p-4 w-full h-[50vh] text-slate-800 flex flex-col justify-between bg-opacity-25 backdrop-filter backdrop-blur-lg border rounded-lg">
                <label className="block text-gray-100 font-semibold tracking-wider">
                  Question {qIndex + 1}
                </label>
                <input
                  type="text"
                  value={question.question}
                  onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                  className="mt-1 p-2 w-full border rounded mb-2"
                />
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center mb-2">
                    <input
                      type="radio"
                      name={`correctOption${qIndex}`}
                      checked={question.correctOption === option}
                      onChange={() => handleCorrectOptionChange(qIndex, option)}
                      className="mr-2"
                    />
                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(qIndex, oIndex, e.target.value)
                      }
                      className="p-2 w-full border rounded"
                    />
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newQuestions = [...questions];
                    newQuestions[qIndex].options.push("");
                    setQuestions(newQuestions);
                  }}
                  className="text-white mt-2 border-2 py-2 px-8 rounded-full hover:bg-white hover:text-orange-400"
                >
                  Add Option
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
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
          onClick={handleSaveQuiz}
          className="text-white border-2 py-2 px-8 rounded-full hover:bg-white hover:text-orange-400"
        >
          Save Quiz
        </button>
      </div>
    </div>
  );
};

export default CreateQuiz;
