import React from "react";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdPerson3, MdNotificationAdd, MdOndemandVideo } from "react-icons/md";
import { IoChatbubblesOutline, IoHome } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { TbFriends } from "react-icons/tb";
import { TiGroup } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navConatainer">
      <div className="navLeft">
        <span className="logo">Artbook</span>
      </div>

      <div className="searchBar">
        <CiSearch />
        <input
          placeholder="Search friends"
          type="text"
          className="searchInput"
        />
      </div>

      <div className="navRight">
        <Link to="Home" smooth={true} duration={500} elay={1000}>
          <IoHome size={30} color="white" />
        </Link>

        <Link to="Friends" smooth={true} duration={500} elay={1000}>
          <TbFriends size={30} color="white" />
        </Link>

        <Link to="Video" smooth={true} duration={500} elay={1000}>
          <MdOndemandVideo size={30} color="white" />
        </Link>
        <Link to="Shop" smooth={true} duration={500} elay={1000}>
          <BsShop size={25} color="white" />
        </Link>
      </div>
      <div className="navbarIcon">
        <div className="navbarIconItem">
          <MdPerson3 />
          <spna className="notification">1</spna>
        </div>
        <div className="navbarIconItem">
          <IoChatbubblesOutline />
          <spna className="notification">1</spna>
        </div>
        <div className="navbarIconItem">
          <MdNotificationAdd />
          <spna className="notification">10</spna>
        </div>
        <Link to="MyProfile" smooth={true} duration={5000} elay={1000} >
        <img
          src="/assets/person/boy.jpg"
          alt="profile"
          className="topbarImage"
        />
        </Link>
      </div>
    </div>
  );
}
