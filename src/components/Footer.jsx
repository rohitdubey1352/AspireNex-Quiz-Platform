import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content absolute bottom-0 py-10 px-2 h-auto text-white text-center w-full bg-slate-700">
        <p>
          &copy; {new Date().getFullYear()} {"QuizMaker's"}. All rights
          reserved.
        </p>
        <ul className="footer-links flex items-center justify-around mt-4 sm:justify-evenly">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/createquiz">Create Quiz</Link>
          </li>
          <li>
            <Link to="/takequiz">Take a Quiz</Link>
          </li>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
