import React from "react";
import "./video.css";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";


export default function Video() {
  return (
    <div name="Video" className="video_page">
      <div className="sidebar_to_videos">
        <Sidebar />
      </div>
      <div className="video_area">
        <div className="videos">
         <Dashboard />
         
        </div>    
      </div>
    </div>
  );
}
