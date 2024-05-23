import React from 'react'
import Post from '../../../components/Home_components/Post/Post'
import secondDataSet from '../../../components/data/video/video'


export default function Dashboard() {
  return (
    <div> 
        <Post data={secondDataSet} />
    </div>
  )
}
