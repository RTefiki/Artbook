import React, { useState } from "react";
import "./myFriends.css";
import friendsData from "../../data/friends";

export default function MyFriends() {
    const [visible, setVisible] = useState(12);
    const [items, setItems] = useState(friendsData);

    const showMoreItems = () => {
        setVisible(prev => prev + 6);
    };

    const removeFriend = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
        console.log("Miku me ID-në " + id + " u fshi.");
    };

    return (
        <div className="friends_container">
            <h2>Friendship</h2>
            <div className="frend">
                {items.slice(0, visible).map(item => (
                    <div key={item.id} className="friends">
                        <img src={item.userImgs} alt="profile" />
                        <div className="friend_contact">
                            <p>{item.names}</p>
                            <div className="same_friends">
                                <img src="/assets/person/boy.jpg" alt="" />
                                <p>4 Mutual Friends</p>
                            </div>
                            <div className="buttons">
                                <button>Bestätigen</button>
                                <button onClick={() => removeFriend(item.id)}>Entfernen</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="add_more_friends">
                    <button onClick={showMoreItems}>Add More Friends</button>
                </div>
            </div>
        </div>
    );
}
