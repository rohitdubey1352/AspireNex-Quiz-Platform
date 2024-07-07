import GoBack from "../components/GoBack";
import TakeQuiz from "../components/Take";
import Img from "../assets/topBg (4).jpg";

const Takequiz = () => {
  return (
    <>
      <section className="relative w-full h-full my-5 px-0 sm:px-52">
        <GoBack heading="Take a Quiz" />
        <div className="relative w-full h-full flex flex-col justify-center items-center me-0 px-8 sm:me-6 sm:px-0 sm:mx-auto py-8 sm:h-[100vh] overflow-hidden">
          <TakeQuiz />

          <img
            src={Img}
            className="absolute w-full rounded-3xl top-10 p-4 sm:p-0"
            style={{ zIndex: "-1", height: "94%" }}
            alt="imgBg"
          />
        </div>
      </section>
    </>
  );
};

export default Takequiz;
