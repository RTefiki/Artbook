import React, { useState } from "react";
import "./sidebar.css";
import {
  MdOutlineRssFeed,
  MdMarkUnreadChatAlt,
  MdOutlinePlayCircleOutline,
  MdBookmarks,
  MdOutlineGroup,
} from "react-icons/md";
import {
  BsQuestionSquareFill,
  BsFillBagCheckFill,
  BsCalendar2Event,
} from "react-icons/bs";
import { GiDiploma } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Sidebar() {
  const [friends, setFriends] = useState(false);

  const toggleFriends = () => {
    setFriends(!friends);
  };
  return (
    <div className="sidebarContainer">
      <ul className="unordertList">
        <li className="list">
          <MdOutlineRssFeed className="icons" />
          <span>Feed</span>
        </li>
        <li className="list">
          <MdMarkUnreadChatAlt className="icons" />
          <span>Chats</span>
        </li>
        <li className="list">
          <MdOutlinePlayCircleOutline className="icons" />
          <span>Videos</span>
        </li>
        <li className="list">
          <MdOutlineGroup className="icons" />
          <span>Groups</span>
        </li>
        <li className="list">
          <MdBookmarks className="icons" />
          <span>Bookmarks</span>
        </li>
        <li className="list">
          <BsQuestionSquareFill className="icons" />
          <span>Questions</span>
        </li>
        <li className="list">
          <BsFillBagCheckFill className="icons" />
          <span>Jobs</span>
        </li>
        <li className="list">
          <BsCalendar2Event className="icons" />
          <span>Events</span>
        </li>
        <li className="list">
          <GiDiploma className="icons" />
          <span>Courses</span>
        </li>
      </ul>
      <button className="view_more_btn" onClick={toggleFriends}>
      {friends ? <IoIosArrowUp /> : <IoIosArrowDown />}
        <span> {friends ? "Close" : "View More"}</span>
      </button>
      <hr />
      {friends && (
        <>
          <div className="friend_container">
            <img
              src="/assets/person/beckham.jpg"
              alt="profile"
              className="imgPerson"
            />
            <main className="personName">Art Ilazi</main>
          </div>
          <div className="friend_container">
            <img
              src="/assets/person/beckham.jpg"
              alt="profile"
              className="imgPerson"
            />
            <main className="personName">Art Ilazi</main>
          </div>
          <div className="friend_container">
            <img
              src="/assets/person/beckham.jpg"
              alt="profile"
              className="imgPerson"
            />
            <main className="personName">Art Ilazi</main>
          </div>
          <div className="friend_container">
            <img
              src="/assets/person/beckham.jpg"
              alt="profile"
              className="imgPerson"
            />
            <main className="personName">Art Ilazi</main>
          </div>
        </>
      )}
    </div>
  );
}
