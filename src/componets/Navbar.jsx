import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const heandleLogout = () => {
    logout();
  };

  console.log(user);
  return (
    <div className="navbar max-w-7xl mx-auto container bg-white px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/">Web Dising</Link>
                  </li>
                  <li>
                    <Link to="/">App Deploment</Link>
                  </li>
                  <li>
                    <Link to="/">UI/UX Dising</Link>
                  </li>
                  <li>
                    <Link to="/">Digital Marketng</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl flex items-center font-bold ">
          <img src="../../public/logo.png" alt="" />
          <span className="pl-2 text-[#697077] hidden sm:block"> WebCode</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <details>
              <summary>Category</summary>
              <ul className="p-2 z-50">
                <li>
                  <Link to="/">Web Dising</Link>
                </li>
                <li>
                  <Link to="/">App Deploment</Link>
                </li>
                <li>
                  <Link to="/">UI/UX Dising</Link>
                </li>
                <li>
                  <Link to="/">Digital Marketng</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? (
          <>
            <Link
              to="/dashboard"
              className="btn btn-outline btn-primary px-8 hidden sm:flex"
            >
              Dashboard
            </Link>
            <button
              onClick={heandleLogout}
              to="/pricing"
              className="btn bg-[#0F62FE] text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline btn-primary px-8 hidden sm:flex"
            >
              Log In
            </Link>
            <Link to="/pricing" className="btn bg-[#0F62FE] text-white">
              Start Free Trial
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
