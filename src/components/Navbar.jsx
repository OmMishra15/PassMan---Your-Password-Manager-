import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-200">
      <div className="mycontainer flex justify-between h-14 items-center px-5 py-6">
        <div className="logo font-bold text-amber-950 ">
          &lt;\ PassMan /&gt;
        </div>
        <ul className="">
          <li className="flex gap-4">
            {/* <a className="hover:font-bold" href="#">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a> */}
            <a href="https://github.com/OmMishra15/PassMan---Your-Password-Manager-" target="_blank">
            <button 
            className="flex justify-center items-center rounded-full bg-green-300 px-3 py-1 gap-1 hover:font-bold">
              <img src="/icons/github.svg" alt="GitHub logo" />
              <span>GitHub</span>
            </button>
            </a>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
