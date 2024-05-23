import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./popup.css";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RestoreIcon from "@mui/icons-material/Restore";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import BlockIcon from "@mui/icons-material/Block";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ModeSharpIcon from "@mui/icons-material/ModeSharp";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { BsMessenger } from "react-icons/bs";
import { PiFlagBanner } from "react-icons/pi";
import { MdOutlineGroups, MdOutlineGroup } from "react-icons/md";
//emoji icons


export const PopupShare = () => {
  return (
    <div className="share_popup_container">
      <span>
        <ModeSharpIcon /> In Feed share
      </span>
      <span>
        <AddCircleOutlineOutlinedIcon /> In zour share
      </span>
      <span>
        <BsMessenger size={22} /> Send in Messenger
      </span>
      <span>
        <WhatsAppIcon /> Send in WatsApp
      </span>
      <span>
        <PiFlagBanner size={22} /> In fan page share
      </span>
      <span>
        <MdOutlineGroups size={22} /> In one group share
      </span>
      <span>
        <MdOutlineGroup size={22} /> share to one friends profile
      </span>
    </div>
  );
};

export const PopupNotifications = () => {
  return (
    <div className="notification_popup_container">
      <span>
        <BookmarkAddIcon /> Save Post
      </span>
      <hr />
      <span>
        <CircleNotificationsIcon /> Activate Notification for this Post
      </span>
      <span>
        <CodeOffIcon /> embed
      </span>
      <hr />
      <span>
        <HighlightOffIcon /> Hide post
      </span>
      <span>
        <RestoreIcon /> Switch Day to snooze
      </span>
      <hr />
      <span>
        <NoAccountsIcon /> Don't folow more it
      </span>
      <span>
        <FeedbackIcon /> Report Post
      </span>
      <span>
        <BlockIcon /> Block this Profil
      </span>
    </div>
  );
};

export const Emojis = ({ onEmojiClick }) => {
  const emojis = ["👍","🙂", "😉", "☹️", "😭", "🤮", "😡"];
  const [selectedEmoji, setSelectedEmoji] = React.useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    onEmojiClick(emoji);
    
  };

  return (
    <div className="emoji">
      {emojis.map((emoji, index) => (
        <div key={index} onClick={() => handleEmojiClick(emoji)}>
          {emoji}
        </div>
      ))}
    </div>
  );
};
