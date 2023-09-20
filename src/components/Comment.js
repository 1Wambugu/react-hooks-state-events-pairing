import React, { useState } from 'react';

function Comment({ comment }) {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <div className="votes">
        <button onClick={handleUpvote}>Upvote</button>
        <span>{votes}</span>
        <button onClick={handleDownvote}>Downvote</button>
      </div>
    </div>
  );
}

export default Comment;
