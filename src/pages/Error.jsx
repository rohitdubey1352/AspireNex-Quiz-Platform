import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-56 sm:mt-72">
      <h2 className="text-2xl font-medium">Page Not Found!</h2>
      <Link to="/">{"<"} Go Back</Link>
    </div>
  );
};

export default Error;
