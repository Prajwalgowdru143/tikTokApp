import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSlidebar from "./VideoSlidebar";

function Video( {url, channel, description, song, likes, shares, messages}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    //if video is playing
    //stop it...
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //otherwise
    //play it
  };
  return (
    <div className="video">
      <video
        width="320"
        height="240"
        controls
        onClick={handleVideoPress}
        className="videoPlayer"
        loop
        ref={videoRef}
      >
        <source
          src={url}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <VideoFooter channel={channel} description={description} song={song}  />
      <VideoSlidebar likes={likes} shares={shares} messages={messages} />

      {/**video footer  */}
      {/**video slidebar */}
    </div>
  );
}

export default Video;
