
import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaRegPaperPlane } from 'react-icons/fa'; // Import icons from react-icons library

function Comment() {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmitComment = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        id: comments.length + 1,
        text: commentText,
        timestamp: new Date().toLocaleString(),
        votes: 0,
        replies: [],
      };

      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  const handleUpvote = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, votes: comment.votes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleDownvote = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId && comment.votes > 0) {
        return { ...comment, votes: comment.votes - 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleReply = (commentId, replyText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, { text: replyText, timestamp: new Date().toLocaleString() }],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="comment-container">
      <h2>Comments</h2>
      <div>
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          rows={4}
          className="comment-input"
        />
        <button onClick={handleSubmitComment} className="comment-button">Submit Comment</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <div className="vote-buttons">
              <FaThumbsUp onClick={() => handleUpvote(comment.id)} className="upvote-icon" />
              <p>Votes: {comment.votes}</p>
              <FaThumbsDown onClick={() => handleDownvote(comment.id)} className="downvote-icon" />
            </div>
            {comment.replies.map((reply, index) => (
              <div key={index} className="reply">
                <p>Reply: {reply.text}</p>
                <p>{reply.timestamp}</p>
              </div>
            ))}
            <div className="reply-container">
              <textarea
                placeholder="Reply to this comment..."
                onBlur={(event) => handleReply(comment.id, event.target.value)}
                className="reply-input"
              />
              <FaRegPaperPlane onClick={(event) => handleReply(comment.id, event.target.value)} className="send-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
