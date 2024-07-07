import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../components/LoginPage";
import Logout from "../components/LogoutPage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full py-0 bg-white flex flex-col justify-between sm:flex-row sm:justify-around sm:items-center sm:py-4 shadow-md">
      <div className="flex justify-between items-center p-4 sm:p-0">
        <div className="text-xl font-bold">
          <Link to="/">{"QuizMaker's"}</Link>
        </div>
        <button onClick={toggleMenu} className="text-2xl sm:hidden">
          &#9776;
        </button>
      </div>
      <ul
        className={`flex flex-col items-center text-center text-slate-700 sm:flex-row sm:items-center sm:gap-4 ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <li className="w-auto mb-4 sm:mb-0">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="w-auto mb-4 sm:mb-0">
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li className="w-auto mb-4 sm:mb-0">
          <NavLink to="/createquiz" activeClassName="active">
            Create a Quiz
          </NavLink>
        </li>
        <li className="w-auto mb-4 sm:mb-0">
          <NavLink to="/takequiz" activeClassName="active">
            Take a Quiz
          </NavLink>
        </li>
        <li className="flex justify-center items-center bg-white text-slate-700 rounded mb-4 sm:mb-0">
          {isAuthenticated && (
            <div className="flex items-center gap-2 me-4">
              <img
                src={user.picture}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-sm">{user.email.slice(0, -10)}</h2>
              </div>
            </div>
          )}
          <br />
          {isAuthenticated ? <Logout /> : <Login />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
