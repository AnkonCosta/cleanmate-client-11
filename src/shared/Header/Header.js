import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/clean.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <li className="font-semibold  ">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/blog">Blog</Link>
      {user?.uid && (
        <>
          <Link to="/add">Add Service</Link>
          <Link to="/reviews"> My Reviews</Link>
        </>
      )}
    </li>
  );

  return (
    <div className="h-20  w-full md:w-full md:max-w-screen-lg mx-auto py-12 px-5  navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className=" flex mx-5 justify-center items-center normal-case text-xl"
        >
          <img src={logo} alt="" />
          <p className="text-green-600 px-2 font-mono">CleanMate</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>

      <div className="navbar-end">
        {user?.uid ? (
          <>
            <label className="btn mx-5 btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="User Profile" />
              </div>
            </label>
            <Link onClick={logOut}>
              <button className="border font-semibold py-2 px-6 rounded border-green-600 hover:bg-green-600 hover:text-white">
                Log Out
              </button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <button className="border font-semibold py-2 px-6 rounded border-green-600 hover:bg-green-600 hover:text-white">
              Log In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
