import React from 'react';

function VideoDetails({ video }) {
  return (
    <div className="video-details">
      <h1>{video.title}</h1>
      <p>{video.views} views • {video.timestamp}</p>
    </div>
  );
}

export default VideoDetails;
