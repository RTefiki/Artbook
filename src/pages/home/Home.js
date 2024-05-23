import React from 'react'
import "./home.css"
import Sidebar from './../../components/Home_components/Post/sidebar/Sidebar'
import Feed from '../../components/Home_components/Post/feed/Feed'
import Rightbar from '../../components/Home_components/Post/rightbar/Rightbar'

 const  Home =() =>{
  return (
    
     <div 
     name="home"
     className='container'>
      <Sidebar />
      <Feed />
      <Rightbar />
     </div>
     
  )
}
export default Home;