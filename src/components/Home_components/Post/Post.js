import React from "react";
import "./post.css";
import { GiWorld } from "react-icons/gi";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { BiLike } from "react-icons/bi";
import { FaRegComment, FaShare } from "react-icons/fa";
import data from "../../data/data";
import Comments from "./Comment/Comments";
import { PopupShare } from "./Popup/Popup";
import { PopupNotifications, Emojis } from "./Popup/Popup";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function Post({ data }) {
  const [postComments, setPostComments] = React.useState({});
  const [postLikes, setPostLikes] = React.useState({});
  const [share, setShare] = React.useState({});
  const [notification, setNotification] = React.useState({});
  const [daten, setDaten] = React.useState(data);
  const [showEmojis, setShowEmojis] = React.useState(false);
  const [selectedEmoji, setSelectedEmoji] = React.useState({});

  const handleClose = (id) => {
    setDaten((prevDaten) => {
      return prevDaten.map((item) => {
        if (item.id === id) {
          return { ...item, isClosed: true };
        }
        return item;
      });
    });
  };

  const handleComments = (postId) => {
    setPostComments((prevComments) => {
      const updatedComments = {
        ...prevComments,
        [postId]: !prevComments[postId],
      };

      localStorage.setItem("postComments", JSON.stringify(updatedComments));
      return updatedComments;
    });
  };

  React.useEffect(() => {
    const savedComments = localStorage.getItem("postComments");
    if (savedComments) {
      setPostComments(JSON.parse(savedComments));
    }
  }, []);

  const incrementLikes = (postId) => {
    if (selectedEmoji[postId]) {
      setSelectedEmoji((prev) => ({
        ...prev,
        [postId]: !prev[postId],
      }));
    } else {
      setPostLikes((prev) => ({
        ...prev,
        [postId]: !prev[postId],
      }));
    }
  };

  const getLikesCount = (postId) => {
    return postLikes[postId] || selectedEmoji[postId] ? 1 : "";
  };

  const handleSelectEmoji = (postId, emoji) => {
    setPostLikes((prev) => ({
      ...prev,
      [postId]: postId,
    }));
    setSelectedEmoji((prev) => ({
      ...prev,
      [postId]: emoji,
    }));
  };

  const handelMouseEnter = (id) => {
    setShowEmojis((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handelMouseLeav = (id) => {
    setShowEmojis((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const handelShare = (id) => {
    setShare((prevShare) => ({
      ...prevShare,
      [id]: !prevShare[id],
    }));
  };

  const handelNotification = (id) => {
    setNotification((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handelDocumentClic = (emojiId) => {
    setShowEmojis((prevEmoji) => ({
      ...prevEmoji,
      [emojiId]: !prevEmoji[emojiId],
    }));
  };

  React.useEffect(() => {
    const handleDocumentClick = () => setShowEmojis({});
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  return (
    <>
      {daten.map((item) => {
        return (
          <div
            key={item.id}
            className={`post_container ${item.isClosed ? "close" : ""}`}
          >
            <div className="post_top_info">
              <div className="post_img_container">
                <img
                  className="post_img_user"
                  src={item.userImg}
                  alt="userImg"
                />
                <div className="post_img_info">
                  <p className="post_title">Gazeta Lajm</p>
                  <div className="day_info">
                    <span>11 std. *</span>
                    <GiWorld />
                  </div>
                </div>
              </div>
              <div className="icons_contain">
                <PiDotsThreeOutlineFill
                  size={25}
                  onClick={() => handelNotification(item.id)}
                  style={{ cursor: "pointer" }}
                />
                <IoMdClose
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClose(item.id)}
                />
                <div onClick={() => handelNotification(item.id)}>
                  {notification[item.id] && <PopupNotifications />}
                </div>
              </div>
            </div>
            <div className="description">
              <p>
                Antonio Banderas dhe Catherine Zeta-Jones në filmin The Mask of
                Zero 1998 legjendar më i mirë{" "}
              </p>
              <p className="translate">Translate</p>
            </div>

            {item.url ? (
              <VideoPlayer videoURL={item.url} />
            ) : (
              <img className="post" src={item.postImg} alt="" />  
            )}


            <div className="liks_coments">
              <div className="likes">
                {postLikes[item.id] && !selectedEmoji[item.id] ? (
                  <SlLike />
                ) : selectedEmoji[item.id] ? (
                  <div>{selectedEmoji[item.id]}</div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
                <p className="liks_number">{getLikesCount(item.id)}</p>
              </div>
              <div className="coments_share">
                <p>5 comments</p>
                <p>10 share</p>
              </div>
            </div>
            <div className="container_like_comments_share">
              <div>
                <div
                  className={`icon_like_comments_share ${
                    postLikes[item.id] ? "color" : ""
                  }`}
                  onClick={() => incrementLikes(item.id)}
                  onMouseEnter={() => handelMouseEnter(item.id)}
                  onMouseLeave={() => handelMouseLeav(item.id)}
                >
                  <BiLike
                    style={{ color: postLikes[item.id] ? "blue" : "black" }}
                  />
                  <span style={{ color: postLikes[item.id] ? "blue" : "" }}>
                    Like
                  </span>
                  {showEmojis[item.id] && (
                    <Emojis
                      onEmojiClick={(emoji) =>
                        handleSelectEmoji(item.id, emoji)
                      }
                    />
                  )}
                </div>
              </div>
              <div
                onClick={() => handleComments(item.id)}
                className="icon_like_comments_share"
              >
                <FaRegComment /> <span>Comments</span>
              </div>
              <div
                className="icon_like_comments_share"
                onClick={() => handelShare(item.id)}
              >
                <FaShare /> <span>Share</span>
                {share[item.id] && <PopupShare />}
              </div>
            </div>
            {postComments[item.id] && <Comments />}
          </div>
        );
      })}
    </>
  );
}
