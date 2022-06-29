import React, { useState } from "react";
import Video from "./Video";
import "./App.css";
// import {db} from './firebase';

function App() {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   db.collection('videos').onSnapshot(snapshot => (
  //     setVideos(snapshot.docs.map(doc => doc.data())))
  //     );

  // }, []);

  return (
    //BEM
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}

        <Video
          url="https://www.tiktok.com/@5.minute.crafts/video/6912079202539900166"
          channel="5.minute.crafts"
          description="Wow! It Works..."
          likes={300}
          messages={222}
          shares={160}
          song="I'm Over You (Remix)"
        />
        <Video
          url="https://www.tiktok.com/@5.minute.crafts/video/6912079202539900166"
          channel="5.minute.crafts"
          description="Wow! It Works..."
          likes={300}
          messages={222}
          shares={160}
          song="I'm Over You (Remix)"
        />
        <Video
          url="https://www.tiktok.com/@5.minute.crafts/video/6912079202539900166"
          channel="5.minute.crafts"
          description="Wow! It Works..."
          likes={300}
          messages={222}
          shares={160}
          song="I'm Over You (Remix)"
        />
        <Video
          url="https://www.tiktok.com/@5.minute.crafts/video/6912079202539900166"
          channel="5.minute.crafts"
          description="Wow! It Works..."
          likes={300}
          messages={222}
          shares={160}
          song="I'm Over You (Remix)"
        />
        <Video
          url="https://www.tiktok.com/@5.minute.crafts/video/6912079202539900166"
          channel="5.minute.crafts"
          description="Wow! It Works..."
          likes={300}
          messages={222}
          shares={160}
          song="I'm Over You (Remix)"
        />
        <Video
          url="https://www.tiktok.com/@5.minute.crafts/video/6912079202539900166"
          channel="5.minute.crafts"
          description="Wow! It Works..."
          likes={300}
          messages={222}
          shares={160}
          song="I'm Over You (Remix)"
        />
        <Video
          url="https://www.tiktok.com/@5.minute.crafts/video/6912079202539900166"
          channel="5.minute.crafts"
          description="Wow! It Works..."
          likes={300}
          messages={222}
          shares={160}
          song="I'm Over You (Remix)"
        />
      </div>
    </div>
  );
}

export default App;
