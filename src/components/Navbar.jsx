import React from "react";
import { AiOutlineMenu} from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-2">
      <div className="flex items-center gap-6">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} className=" w-24 cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-4 py-2 rounded-l-full border">
          <input type="text" placeholder="search" className=" outline-none" />
        </div>
        <button className="px-5 py-2 border rounded-r-full bg-gray-100">
          <CiSearch size={"24px"} />
        </button>
        <div className=" cursor-pointer ml-4 border rounded-full p-2 hover:bg-gray-100 duration-200">
          <FaMicrophone size={"20px"} />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className=" cursor-pointer ml-4">
            <HiOutlineDotsVertical size={"24px"} />
        </div>
        <div className="flex items-center gap-2 px-3 py-2 border rounded-full p-2 hover:bg-blue-100 duration-200 cursor-pointer">
            <CgProfile size={"22px"} className=" text-blue-700 "/>
            <p className=" text-sm text-blue-700 font-medium">Sign in</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
