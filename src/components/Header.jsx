import React from "react";
import { Link } from "react-router-dom";
import About from "./About"

import bookstore from "../Asset/bookstore-logo.avif";
// import Login from "./Login";
// import Logout from "./Logout"

const Header = () => {
  return (
    
    <header className="bg-[#000000]/80 text-white py-3 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex flex-col md:flex-row items-center justify-between navbar-dark">
          {/* <div className="container-fluid flex items-center justify-between gap-20"> */}
            <div className="navbar-brand">
              <Link className=" text-xl font-bold cursor-pointer">
                <img src={bookstore} alt="logo" width="75px" height="10px" />
              </Link>
            </div>
            <br/>

            <div className="flex  items-center gap-6 ml-auto">
              <ul className="flex  items-center gap-6 ">
                <li className="nav-item font-bold">
                  <Link className="nav-link" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item font-bold">
                  <Link className="nav-link" href="#" target="_blank">
                    About
                  </Link>
                </li>
                <li className="nav-item font-bold">
                  <Link className="nav-link" href="#" target="_blank">
                    Contact
                  </Link>
                </li>
                <li className="nav-item font-bold">
                  <Link className="nav-link " href="#" target="_blank">
                    Login
                  </Link>
                </li>
                <li className="nav-item font-bold">
                  <Link className="nav-link " href="#" target="_blank">
                    Signup
                  </Link>
                </li>
              </ul>
              <br />
              <div>
                <form className="hidden md:flex items-center gap-2" role="search">
                  <input
                    className="form-control px-3 py-1 rounded-md border border-gray-300"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="search"
                  />
                  <button
                    className="btn btn-outline-success px-3 py-1 rounded-md bg-green-500 text-white hover:bg-green-600"
   
                    type="submit"
                    id="searchBtn"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          {/* </div> */}
        </nav>
      </div>
    </header> 
  );
};

export default Header;
