import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { MdDashboard, MdLogout } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().catch(console.log);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donation-requests">Donation Requests</NavLink>
            </li>

            {user && (
              <li>
                <NavLink to="/dashboard/funding">Funding</NavLink>
              </li>
            )}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <Logo className="w-10 h-10" />
          <span className="font-bold text-xl">DonateBlood</span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/donation-requests">Donation Requests</NavLink>
          </li>

          {user && (
            <li>
              <NavLink to="/funding">Funding</NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <img
              tabIndex={0}
              className="w-10 h-10 rounded-full border border-red-400 cursor-pointer"
              src={user.photoURL || "https://i.ibb.co/2d0YjQk/avatar.png"}
              alt="user"
            />
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box w-52 shadow"
            >
              <li>
                <Link to="/dashboard" className="flex items-center gap-2">
                  <MdDashboard className="text-lg" />
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="flex items-center gap-2 text-red-500"
                >
                  <MdLogout className="text-lg" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

