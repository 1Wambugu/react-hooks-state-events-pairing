import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(text);
    setText('');
  };

  return (
    <div className="comment-form">
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Write your comment here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
