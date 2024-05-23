import React from 'react'
import "./rightbar.css"
import { CiSearch } from "react-icons/ci";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import users from '../../../data/user';
import Message from '../share/Message';


export default function Rightbar() {
const [searchFriends, setSearchFriends] = React.useState(false)


const handelSearchFriends = () => {
  setSearchFriends(!searchFriends) 
  
}

  return (
    <div className='rightContainer'>
      <div>
        <div className='rightContainerTop'>
          <h4>Contacts</h4>
          <div className='inconsTop'>
          <CiSearch 
          onClick={handelSearchFriends}
          size={20}/>
          <PiDotsThreeOutlineFill size={20}/>
          </div>   
        </div>
        {users.map((item) => {
            return (
        <div key={item.id} 
        onClick={handelSearchFriends}
        className='userContain'>
          <img
            src={item.userImg}
            alt="profile"
            className="imgContantUser"
            />
            <main className="personName">{item.name}</main>
        </div>
        )})
        }
      </div>
      <div>{searchFriends && <Message /> }</div>
    </div>
  )
}
