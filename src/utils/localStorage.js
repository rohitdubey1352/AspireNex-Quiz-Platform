export const saveQuizToLocalStorage = (quiz) => {
  localStorage.setItem("quiz", JSON.stringify(quiz));
};

export const getQuizFromLocalStorage = () => {
  const quiz = localStorage.getItem("quiz");
  return quiz ? JSON.parse(quiz) : null;
};
