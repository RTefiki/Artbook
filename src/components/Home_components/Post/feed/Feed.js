import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../Post'
import dataSet from '../../../data/data'


export default function Feed() {
  return (
    <div className='feedContainer'>
        <Share />
        <Post data={dataSet} />
  
    </div>
  )
}
