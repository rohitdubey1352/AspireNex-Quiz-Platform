import VideoFile from "../assets/video.mp4";

const ContactCard = () => {
  return (
    <>
      {/* Contact Card */}
      <div className="flex justify-center relative items-center h-screen">
        <div className="content absolute font-medium text-center bg-slate-950 bg-opacity-20 flex justify-center items-center flex-col w-full h-[60vh]  z-10 pointer-events-auto">
          <h1 className="text-4xl font-bold tracking-wider text-white">
            WE ARE {"QuizMaker's"}
          </h1>
          <p className="px-5 text-white font-semibold text-shadow-md">
            Contact us for any query, {"we're"} here for you in 24x7. Feel free
            to contact us for any suggestions.
          </p>
          <button className="mt-4 w-36 h-12 text-white rounded-full cursor-pointer bg-orange-400 hover:bg-white hover:text-orange-400">
            Contact Us
          </button>
        </div>
        <video className="w-full h-[60vh] object-cover" loop autoPlay muted>
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default ContactCard;
