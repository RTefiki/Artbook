import React from "react";
import "./comments.css";
import { LuSticker } from "react-icons/lu";
import { RiEmojiStickerLine } from "react-icons/ri";
import { PiGifThin } from "react-icons/pi";
import { GiPhotoCamera } from "react-icons/gi";
import RecommendIcon from "@mui/icons-material/Recommend";
import { IoMdReturnRight } from "react-icons/io";

export default function () {
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");

  React.useEffect(() => {
    const loadedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(loadedComments);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment("");
  };

  const handelKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmitComment();
    }
  };

  const handelLikes = (likeId) => {
    setLike((prevLike) => ({
      ...prevLike,
      [likeId]: !prevLike[likeId],
      color: "blue",
    }));
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      {comments.map((comment, index) => (
        <>
          <div key={index} className="show_comments">
            <img
              className="post_img_user"
              src="/assets/person/boy.jpg"
              alt=""
            />
            <div className="title_comment">
              <p>Koha lajme</p>
              <main>{comment}</main>
            </div>
          </div>

          <div className="time_like_answer">
            <span>2 std.</span>
            <main
              onClick={() => handelLikes("likeId")}
              style={{ color: like["likeId"] ? "blue" : "initial" }}
            >
              {" "}
              I like it
            </main>
            <main>Answer</main>
            <main>Answer View translation</main>
            <main>Share</main>
            <p>
              {like["likeId"] && <RecommendIcon style={{ color: "blue" }} />}
            </p>
          </div>
        </>
      ))}
      <div className="write_comments">
        <img className="post_img_user" src="/assets/person/boy.jpg" alt="" />
        <div
          className={`write_comments_contain ${isInputFocused ? "focus" : ""}`}
        >
          <input
            type="text"
            placeholder="Write a comment ..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={newComment}
            onChange={handleNewCommentChange}
            onKeyPress={handelKeyPress}
          />
          <div className="icons_comment">
            <LuSticker />
            <RiEmojiStickerLine />
            <PiGifThin />
            <GiPhotoCamera />
            <div onClick={handleSubmitComment}>
              <IoMdReturnRight
                style={{
                  marginLeft: 20,
                  marginTop: 4,
                  color: newComment.length > 0 ? "blue" : "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
