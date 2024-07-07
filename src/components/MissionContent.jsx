import PropTypes from "prop-types";

const MissionContent = ({ num, heading, para, btn }) => {
  return (
    <>
      <div className="missionContent flex flex-col items-center gap-10 text-white sm:items-start px-0 sm:px-4">
        <p className="tracking-widest text-2xl font-semibold">{num}</p>
        <h4 className="font-semibold tracking-wider uppercase border-t border-b py-4">
          {heading}
        </h4>
        <p>{para}</p>
        <button className="rounded-full py-3 px-10 bg-white text-orange-400 font-medium tracking-wider hover:bg-orange-400 hover:text-white">
          {btn}
        </button>
      </div>
    </>
  );
};

MissionContent.propTypes = {
  num: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};

export default MissionContent;
