import React, { useRef, useState } from "react";
import "./Video.css";
import tvideo from "../src/assets/tvideo.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [play, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src={tvideo}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
