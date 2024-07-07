import GoBack from "../components/GoBack";
import AboutCard from "../components/AboutCard";
import Img1 from "../assets/bg.jpg";
import Img2 from "../assets/topBg (2).png";
import Img3 from "../assets/aboutimg.png";
import MainImg from "../assets/testimonial.png";
import MissionContent from "../components/MissionContent";
import Carousel from "../components/Carousel";

const AboutUs = () => {
  return (
    <>
      {/* About Section*/}
      <section className="relative w-full h-full mt-5 px-0 pb-44 sm:px-52 sm:mt-5">
        <GoBack heading="About Us" />

        <div className="AboutHeading grid grid-cols-1 place-items-center sm:grid-cols-2">
          <div className="heading flex flex-col text-center mt-10 sm:mt-0 sm:text-left ms-0 w-[80vw] sm:ms-44 sm:w-[48vw]">
            <h4 className="text-slate-500 tracking-widest font-semibold mb-10 w-[80vw] sm:w-32 border-b border-orange-500">
              ABOUT US
            </h4>
            <h1 className="text-slate-900 font-medium tracking-wider my-4 capitalize sm:w-[35vw]">
              Embark on a journey of discovery and cultivate your daily habit of
              learning.
            </h1>
            <p className="text-slate-400 w-[80vw] sm:w-[35vw]">
              Unleash your potential and dive into a world where knowledge meets
              adventure. With every quiz, you embark on a quest to challenge
              your intellect, broaden your horizons, and uncover new insights.
              Join us and transform your daily routine into an exciting journey
              of continuous discovery and growth.
            </p>
          </div>

          <div className="aboutCards mx-auto px-4">
            <AboutCard imgUrl={MainImg} />
          </div>
        </div>

        {/* Our Value */}
        <div className="ourMission flex flex-col justify-center items-center my-10 gap-10">
          <h1 className="text-slate-900 text-center font-medium tracking-wider mt-20 uppercase w-[45vw] border-b border-orange-500 sm:w-[20vw]">
            Our Mission & Values
          </h1>

          {/* 01 */}
          <div className="missions grid grid-cols-1 gap-4 place-items-center w-full h-full bg-sky-400 p-4 rounded-2xl text-center sm:grid-cols-2 sm:h-[54vh] sm:text-left">
            <img src={Img1} alt="img1" className="rounded-2xl w-full h-full" />
            <MissionContent
              num={"01"}
              heading="User Interface Design"
              para="At QuizMaker's, our mission is to empower students to achieve their fullest potential through the power of knowledge and continuous learning. We believe that education should be engaging, accessible, and tailored to individual needs."
              btn="Explore More"
            />
          </div>

          {/* 02 */}
          <div className="missions grid grid-cols-1 gap-4 place-items-center w-full h-full bg-orange-400 p-4 rounded-2xl text-center sm:grid-cols-2 sm:h-[54vh] sm:text-left">
            <MissionContent
              num={"02"}
              heading="Engage in Daily Quizzes"
              para="At QuizMaker's, we understand that consistent practice is key to mastering any subject. That's why we offer a diverse range of daily quizzes specifically designed to: Reinforce Learning & Build Confidence."
              btn="Practise"
            />
            <img
              src={Img2}
              alt="img2"
              className="rounded-2xl w-full h-[50vh]"
            />
          </div>

          {/* 03 */}
          <div className="missions grid grid-cols-1 gap-4 place-items-center w-full h-full bg-purple-400 p-4 rounded-2xl text-center sm:grid-cols-2 sm:h-[54vh] sm:text-left">
            <img src={Img3} alt="img3" className="rounded-2xl w-full h-full" />
            <MissionContent
              num={"03"}
              heading="Daily User Growth"
              para="By tracking progress, providing constructive feedback, and celebrating achievements, QuizMaster empowers students to take ownership of their learning journey. We encourage a culture of growth, resilience, and joy in learning, ensuring that every student feels supported and motivated to excel."
              btn="Explore More"
            />
          </div>
        </div>

        {/* Carousel */}
        <Carousel />
      </section>
    </>
  );
};

export default AboutUs;
