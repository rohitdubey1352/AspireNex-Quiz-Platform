import HeroImg2 from "../assets/bg.jpg";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import Aboutimg from "../assets/aboutimg.png";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="homepage relative w-full h-full mt-5 mb-10 sm:mb-18  flex items-center justify-around flex-col sm:flex-row">
        <div className="heroImg flex items-center justify-center sm:justify-start">
          <img src={HeroImg2} className="heroImg w-3/3 sm:w-3/3" alt="bg" />
        </div>
        <div className="hero_content text-center flex flex-col gap-8 px-4 pt-4 sm:w-2/3">
          <h1 className="font-semibold text-4xl">Welcome to {"QuizMaker's"}</h1>
          <p className="font-regular text-slate-500 tracking-wider">
            Create, share, and take quizzes to test your knowledge and have fun!
          </p>
          <div className="hero_buttons flex flex-col items-center gap-4 sm:grid sm:place-items-center sm:grid-cols-2">
            <Link
              to="/createquiz"
              className="text-white py-4 px-10 me-4 rounded-full bg-orange-400 hover:bg-white hover:border-2 hover:text-slate-500"
            >
              Create a Quiz
            </Link>
            <Link
              to="/takequiz"
              className="text-slate-500 py-4 px-10 rounded-full border-2 hover:bg-orange-400 hover:text-white"
            >
              Take a Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about_us relative flex flex-col text-center items-center justify-center w-full h-full py-10 px-4 bg-orange-100 sm:py-20 sm:px-44">
        <div className="about_content relative w-full h-full mb-4 px-0 sm:mb-10">
          <h2 className="text-3xl font-medium tracking-wider mb-4">
            How it started?
          </h2>
          <div className="para tracking-wider text-justify">
            <p>
              Welcome to <b>{"QuizMaker's"}</b>, your ultimate destination for
              creating, sharing, and taking quizzes! Our platform is designed to
              make learning fun and interactive. Whether you want to test your
              knowledge, challenge your friends, or create quizzes for others,
              {"QuizMaker's"} has you covered.
            </p>
            <br />
            <p>
              Our <b>mission</b> is to provide a seamless and enjoyable
              experience for quiz enthusiasts of all ages. We believe in the
              power of quizzes to educate, entertain, and engage. Join our
              community and start your quiz journey today!
            </p>
            <p>
              At {"QuizMaker's"}, we are committed to continuous improvement and
              innovation. We value your feedback and strive to make our platform
              better every day. Thank you for choosing {"QuizMaker's"} as your
              go-to quiz platform.
            </p>
          </div>
        </div>
        <div className="about_grid grid grid-cols-1 gap-10 place-items-center sm:gap-10 sm:grid-cols-2">
          <div className="firstBox relative text-white font-medium tracking-wider flex flex-col text-center items-center justify-center rounded-2xl bg-orange-500 py-40 px-4">
            <Link
              to="/"
              className="text-slate-800 py-2 px-10 mb-4 bg-white rounded-full hover:bg-orange-400 hover:text-white z-10 pointer-events-auto"
            >
              Our Mission
            </Link>
            <h3 className="text-xl z-10 pointer-events-auto">
              To provide the best marks by doing daily practise on our platform.
            </h3>
          </div>
          <div className="aboutImg">
            <img src={Aboutimg} className="rounded-2xl mx-auto" alt="img" />
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <ContactCard />
      {/* <section className="homepage h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></section> */}
    </>
  );
};

export default HomePage;
