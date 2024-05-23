import React from "react";
import "./message.css";
import { IoMdClose } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { FiSend } from "react-icons/fi";
import TextareaAutosize from "react-textarea-autosize";
import users from "../../../data/user";

export default function Message() {
  const [message, setMessage] = React.useState(false);
  const [searchName, setSearchName] = React.useState("");
  const [selectedUser, setSelectedUser] = React.useState(false);
  const [filteredUsers, setFilteredUsers] = React.useState(users);
  const messagesEndRef = React.useRef(null);

  const [comments, setComments] = React.useState(() => {
    return JSON.parse(localStorage.getItem("comment")) || [];
  });

  const handleCommentSubmit = (comment, id) => {
    // Create a new comment object with a unique ID and the comment text.
    const newComment = {
      id: Date.now(),
      text: comment,
    };

    // Add the new comment to the existing list and update both the state and localStorage.
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comment", JSON.stringify(updatedComments));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Thirrni këtë funksion pas shtimit të një komenti të ri.
  React.useEffect(() => {
    scrollToBottom();
  }, [comments]);

  const handelMessage = () => {
    // Toggle the visibility of the message component.
    setMessage(!message);
  };

  const handleSearchChange = (event) => {
    // Update the search input state and filter the displayed users based on the input value.
    const value = event.target.value;
    setSearchName(value);

    if (!value) {
      // If the search input is cleared, reset to showing all users.
      setFilteredUsers(users);
      setSelectedUser(selectedUser); // Note: Might need adjustment based on the intended use of setSelectedUser here.
    } else {
      // Filter users whose names contain the search input, ignoring case.
      const filtered = users.filter((u) =>
        u.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  const handleUserSelect = (userName) => {
    // Update the search input to the selected user's name and clear the filtered users list.
    setSearchName(userName);
    setSelectedUser(userName); // Note: This sets a userName string to a state initially boolean.
    setFilteredUsers([]);
  };
  return (
    <>
      {/*  header of Message Container */}
      {!message && (
        <div className="contanierMessage">
          <div className="contain_1">
            <div className="titel_message_close">
              <p>New Messages</p>
              <IoMdClose
                size={25}
                onClick={handelMessage}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="find_person">
              <label htmlFor="user-search">Person:</label>
              <input
                id="user-search"
                type="text"
                value={searchName}
                onChange={handleSearchChange}
                autoComplete="off"
              />

              <input />
            </div>
          </div>

          {/*  filter user to Person */}
          {searchName && (
            <div className="user-list">
              {filteredUsers.map((item) => (
                <div
                  key={item.id}
                  className="user"
                  onClick={() => handleUserSelect(item.name)}
                >
                  <div className="userFilter">
                    <img src={item.userImg} alt="" />
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* 2 Sended message show to   */}
          <div className="contein_2">
            {comments.map((comment) => (
              <div key={comment.id} className="myMessage" ref={messagesEndRef}>
                <p className="text">Me:{comment.text}</p>
              </div>
            ))}
            {/* if a user is Selected show textarea  */}
          </div>

          {/* 3 container */}
          <div className="contain_3">
            {searchName && (
              <WriteMessage onCommentSubmit={handleCommentSubmit} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

//Message write arrea
const WriteMessage = ({ onCommentSubmit }) => {
  const [text, setText] = React.useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onCommentSubmit(text);
    setText("");
  };
  return (
    <div className="msg_contain">
        <CgDetailsMore size={22} />
        <TextareaAutosize
          className="textarea-autosize"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <FiSend
          size={22}
          onClick={handleSubmit}
          style={{ cursor: "pointer" }}
        />
      </div>
  );
};
