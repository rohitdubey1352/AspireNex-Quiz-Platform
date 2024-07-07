import GoBack from "../components/GoBack";
import Img from "../assets/topBg (2).png";
import CreateQuiz from "../components/Create";

const Createquiz = () => {
  const VideoFile =
    "https://cdn.dribbble.com/userupload/10041081/file/large-58c5dc08678dfdaf9d1ca99ac6d985c8.mp4";

  return (
    <>
      <section className="relative w-full h-full mt-5 px-0 pb-44 sm:px-52 sm:mt-5">
        <GoBack heading="Create a Quiz" />

        <div className="createQuiz h-full grid grid-cols-1 gap-4 items-center border-2 mx-auto rounded-2xl py-4 mx-2 mt-8 sm:grid-cols-1 sm:mx-0 relative overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            autoPlay
            muted
          >
            <source src={VideoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/*  */}
          <div className="content relative z-10 flex flex-col items-center justify-center text-center py-6 sm:flex-row">
            <img src={Img} alt="img" className="w-2/2 sm:w-2/5 me-16" />
            <div className="create_content w-full me-0 px-4 sm:me-6 sm:px-0">
              <CreateQuiz />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Createquiz;
