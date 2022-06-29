import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, shares, messages }) {
  const [Liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {Liked ? <FavoriteIcon fontSize="large" onClick= {e => setLiked(false)} /> : <FavoriteBorderIcon fontSize="large" onClick= {e => setLiked(true)} />}
        <p>{Liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <ChatIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
