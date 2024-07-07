import PropTypes from "prop-types";

const AboutCard = ({ imgUrl }) => {
  return (
    <>
      <div className="card w-full ">
        <img src={imgUrl} alt="mainImg" className="w-full h-full" />
      </div>
    </>
  );
};

AboutCard.propTypes = {
  imgUrl: PropTypes.object.isRequired,
};

export default AboutCard;
