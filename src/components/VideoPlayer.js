import React from 'react';

function VideoPlayer({ video }) {
  return (
    <div className="video-player">
      <h2>{video.title}</h2>
      <video controls width="400">
        <source src={video.url} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
