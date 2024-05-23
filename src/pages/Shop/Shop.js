import React, { useState } from "react";
import "./shop.css";
import shops from "../../components/data/shoping";


export default function Shop() {
    const [visible, setVisible] = useState(12);
    const [items, setItems] = useState(shops);

    const showMoreItems = () => {
        setVisible(prev => prev + 6);
    };

    return (
        <div className="friends_container">
            <h2>Friendship</h2>
            <div className="frend">
                {items.slice(0, visible).map(item => (
                    <div key={item.id} className="friends">
                        <img src={item.shop} alt="profile" />
                        <div className="friend_contact">
                            <div className="same_friends">                  
                                <p className="price">{item.price}</p>
                                <p className="describe">{item.describe}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {visible < items.length && (
                    <div className="add_more_friends">
                        <button onClick={showMoreItems}>Add More Friends</button>
                    </div>
                )}
            </div>
        </div>
    );
}
