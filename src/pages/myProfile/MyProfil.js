import React, { useState } from "react";
import "./myProfile.css";
import { FcCameraIdentification } from "react-icons/fc";
import { GiCctvCamera } from "react-icons/gi";
import { LiaCameraRetroSolid } from "react-icons/lia";
import { TbCameraPause } from "react-icons/tb";
import Post from "../../components/Home_components/Post/Post";
import dataSet from "../../components/data/data";
import photo from "../../components/data/friends";

const image = "/assets/person/arti.jpg";
export default function MyProfil() {
  const [imageSrc, setImageSrc] = useState(image);
  const [postData, setPostData] = useState(dataSet);
  const [visible, setVisible] = useState(6)

  const profilImage = () => {
   setVisible((prev) => prev +  10)
  }

  const handleFileInputClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="profile_container">
        {/* Cover image on Top */}
        <div className="top_cover">
          <img src={imageSrc} alt="profile" />
          <button onClick={handleFileInputClick}>
            <FcCameraIdentification size={18} /> Add a photo
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="profile_content">
          <div className="profile_image">
            <img src="/assets/person/arti.jpg" alt="" />
            <div>
              <h2>Art Tefiki</h2>
              <p className="followers">222.22 Follower • 466 Gefolgt</p>
            </div>
          </div>
        </div>
        <hr />
        {/* Info Links on TOP */}
        <div className="links">
          <button>Beiträge</button>
          <button>Info</button>
          <button>Reels</button>
          <button>Fotos</button>
          <button>Videos</button>
          <button>Grupen</button>
        </div>
      </div>

      <>
        <div className="profile_deteils">
        <div className="first_vertical_boxs">
          {/* Intro Wrapperbox */}
          <div className="profile_info">
            <h2>Intro</h2>
            <button>Add New Info</button>
            <p>Profil · Digital Creator</p>
            <p>Hat hier studiert: USHT Tetove</p>
            <p>Wohnt in Hamburg</p>
            <p>Verheiratet</p>
            <button className="info_button_details">Details bereiten</button>
            <button className="info_button_featured">
              Futured Content hinzufügen
            </button>
          </div>
          <div className="my_posted_image">
          <div className="container_top">
          <h2>Foto</h2>
          <a onClick={profilImage}>see all photos</a>
          </div>
            
            <div className="my_images">
            {photo.slice(0, visible).map((item) => (
              <img src={item.userImgs} alt="" />
            )) }        
            </div>
          </div>
          </div>
          <div className="post_boxs">
            <>
              {/* Live WraperBox */}
              <div className="go_live">
                <img src="/assets/person/arti.jpg" alt="" />
                <input type="text" placeholder="What are you doing now" />
              </div>
              <hr style={{ padding: 1, color: "gray", marginTop: -7 }} />
              <div className="video_streams">
                <p>
                  <GiCctvCamera size={25} /> Live/Video
                </p>
                <p>
                  <LiaCameraRetroSolid size={25} /> Photo/Video
                </p>
                <p>
                  <TbCameraPause size={25} /> Reals
                </p>
              </div>
            </>
            {/* Post Wraperbox */}
            <div className="posts">
              <Post data={dataSet} />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
