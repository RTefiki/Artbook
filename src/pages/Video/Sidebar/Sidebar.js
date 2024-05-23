import React from "react";
import { CgPlayButtonR } from "react-icons/cg";
import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <h2>Video</h2>
      </div>
      <Link >
      <div className="items">
        <div className="icon">
          <CgPlayButtonR style={{ display: "flex", alignItems: "center" }} />
        </div>
        <p>Startseite</p>
      </div>
      </Link>    
      <div className="items">
      <div className="icon">
          <CgPlayButtonR style={{ display: "flex", alignItems: "center" }} />
        </div>
        <p>Live</p>
      </div>
      <div className="items">
      <div className="icon">
          <CgPlayButtonR style={{ display: "flex", alignItems: "center" }} />
        </div>
        <p>Reels</p>
      </div>
      <div className="items">
      <div className="icon">
          <CgPlayButtonR style={{ display: "flex", alignItems: "center" }} />
        </div>
        <p>Shows</p>
      </div>
      <div className="items">
      <div className="icon">
          <CgPlayButtonR style={{ display: "flex", alignItems: "center" }} />
        </div>
        <p>Gespeischert</p>
      </div>
    </div>
  );
}
