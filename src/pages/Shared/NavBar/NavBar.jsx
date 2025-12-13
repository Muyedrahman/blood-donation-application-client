import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { NavLink } from 'react-router';

const NavBar = () => {
    const links = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/donors">Donation Requests</NavLink>
        </li>

        <li>
          <NavLink to="/become-donor">Funding</NavLink>
        </li>

        <li>
          <NavLink to="/become-donor">Search</NavLink>
        </li>
        <li>
          <NavLink to="/become-donor"></NavLink>
        </li>
      </>
    );


    return (
      <div className="navbar bg-base-100 shadow-sm">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DonateBlood</a>
          <Logo className="w-12 h-12" />
          {/* <div>
            <Logo />
            <p className="font-bold text-lg mt-2">
              Blood Donation 
            </p>
          </div> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <NavLink
          to="/login"
          className="btn hover:text-red-400 transition cursor-pointer"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="btn hover:text-red-400 transition cursor-pointer"
        >
          Register
        </NavLink>
      </div>
    );
};

export default NavBar;