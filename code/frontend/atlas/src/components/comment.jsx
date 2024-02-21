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

  const handleReply = (commentId, replyText, parentId = null) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        if (parentId !== null) {
          // Find the parent comment and add the reply to its replies array
          const parentComment = comment.replies.find((reply) => reply.id === parentId);
          if (parentComment) {
            parentComment.replies.push({ id: comment.replies.length + 1, text: replyText, timestamp: new Date().toLocaleString() });
          }
        } else {
          // Add a new reply directly to the comment's replies array
          comment.replies.push({ id: comment.replies.length + 1, text: replyText, timestamp: new Date().toLocaleString() });
        }
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <h2>Comments</h2>
      <div>
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          rows={4}
          style={{ width: '100%', marginBottom: '10px', borderRadius: '5px' }}
        />
        <button onClick={handleSubmitComment} style={{ marginRight: '10px' }}>Submit Comment</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} style={{ marginTop: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <p>{comment.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
              <FaThumbsUp onClick={() => handleUpvote(comment.id)} style={{ marginRight: '5px', cursor: 'pointer' }} />
              <span>{comment.votes}</span>
              <FaThumbsDown onClick={() => handleDownvote(comment.id)} style={{ marginLeft: '10px', marginRight: '5px', cursor: 'pointer' }} />
              <FaRegPaperPlane style={{ marginLeft: '10px', cursor: 'pointer' }} />
            </div>
            {comment.replies.map((reply) => (
              <div key={reply.id} style={{ marginLeft: '20px', marginTop: '5px', borderLeft: '2px solid #ccc', paddingLeft: '5px' }}>
                <p>{reply.text}</p>
                <p>{reply.timestamp}</p>
              </div>
            ))}
            <textarea
              placeholder="Reply to this comment..."
              onBlur={(event) => handleReply(comment.id, event.target.value)}
              style={{ width: '100%', marginTop: '10px', borderRadius: '5px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
