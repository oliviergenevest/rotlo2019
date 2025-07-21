
import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'


const StyledReactPlayer =  styled.div`
padding-top: 56.25%;
  position: relative; 
  
`
const VideoWrapper=  styled.div`
  width: 100%; 
  height: auto;
  padding-top: 56.25%;
  position: relative; 
   & > div {
	  position: absolute; 
	  height:auto;}
`


const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  
  
    <ReactPlayer    style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }} src={videoSrcURL} />

)

export default Video