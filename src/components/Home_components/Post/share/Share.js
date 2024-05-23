import React from "react";
import "./share.css";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { ImPriceTag } from "react-icons/im";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmojiEmotions } from "react-icons/md";




export default function () {
  return (
    <div className="container">
      <div className="share_container">
        <div className="search_container">
          <img
            src="/assets/person/beckham.jpg"
            alt="user"
            className="img_user"
          />
          <input className="search" type="text" placeholder="What's in your mind " />
        </div>
        <hr className="hr"/>
        <div className="tags">
          <div className="icon_name">
            <LiaPhotoVideoSolid size={20} color="red"/>
            <main>Photo or Video</main>
          </div>
          <div className="icon_name">
            <ImPriceTag size={20} color="blue"/>
            <main>Tag</main>
          </div>
          <div className="icon_name">
            <GrLocation size={20} color="green"/>
            <main>Location</main>
          </div>
          <div className="icon_name">
            <MdOutlineEmojiEmotions size={20} color="yellow"/>
            <main>Feeling</main>
          </div>
          <button className="share_button">Share</button>
        </div>
      </div>
    </div>
  );
}
