import React from 'react';
import './YouTubeComp.css'

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAnq7T2e6fKuHK-Tr4_yA6A-XWjaw" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  )
}

YouTubeComp.defaultProps = {
  time: "00.00",
  title: "Title Here",
  desc: "xx ditonton. xx hari yang lalu"
}

export default YouTubeComp;
