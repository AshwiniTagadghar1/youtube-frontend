import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
    const [comment, setComment] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addComment(comment);
        setComment('');
    };


return (
    <div className="comment-section1">
    <form onSubmit={handleSubmit}>
    <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Write a comment...'
        rows="4"
    />
    <button type="submit">Post Comment</button>
    </form>
    </div>
);
};

export default CommentForm;