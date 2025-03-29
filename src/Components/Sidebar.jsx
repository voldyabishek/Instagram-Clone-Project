import React from "react";
import "../assets/instagram-text.jpg";
import "../CssComponents/Sidebar.css";
// icons imports
import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineNotification } from "react-icons/ai";
import { VscDiffAdded } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import { CiSquareMore } from "react-icons/ci";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        

        {/* sidebar lists */}
        <div className="sidebar-list">
        {/* instagram text logo */}
         <img  src="src\assets\instagram-text.jpg" className="instagram-text"/>
            {/* icons */}
            <div><MdHomeFilled className="sidebar-icons" />Home</div>
            <div><IoIosSearch className="sidebar-icons" />Search</div>
            <div><MdOutlineExplore className="sidebar-icons"/>Explore</div>
            <div><RiMovieLine className="sidebar-icons"/>Reels</div>
            <div><FiMessageCircle className="sidebar-icons"/>Messages</div>
            <div><AiOutlineNotification className="sidebar-icons"/>Notifications</div>
            <div><VscDiffAdded className="sidebar-icons"/>Create</div>
            <div><CgProfile className="sidebar-icons"/>Profile</div>
      </div>
      <div className="other-navigate">
        <div><FaThreads className="sidebar-icons"/>Threads</div>
        <div><CiSquareMore className="sidebar-icons"/>More</div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
