import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const videoData = {
  title: 'Sample Video',
  url: 'https://www.youtube.com/embed/dpw9EHDh2bM',
};

function App() {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const addComment = (commentText) => {
    const newComment = {
      text: commentText,
      id: comments.length + 1,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="app">
      <VideoPlayer video={videoData} />
      <button onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && (
        <>
          <CommentList comments={comments} />
          <CommentForm addComment={addComment} />
        </>
      )}
    </div>
  );
}

export default App;
