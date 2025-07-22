
import React from 'react'
import ReactPlayer from 'react-player'





const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  
  
    <ReactPlayer    style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }} src={videoSrcURL} />

)

export default Video