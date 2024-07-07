import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GoBack = ({ heading }) => {
  return (
    <>
      <div className="nav flex items-center justify-between mx-6 sm:mx-0">
        <Link to="/" className="text-slate-500">
          &#8592; <span className="font-medium tracking">go back</span>
        </Link>
        <h2 className="font-medium">{heading}</h2>
      </div>
    </>
  );
};

GoBack.propTypes = {
  heading: PropTypes.string.isRequired,
  // for number use, age: PropTypes.number.isRequired,
};

export default GoBack;
