import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CommentInput({ addComment }) {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      addComment(content);
      setContent('');
      navigate('/');
    }
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="m-6">
      <h3 className="text-xl font-semibold mb-2">New Comment:</h3>
      <form onSubmit={handleSubmit} className="flex">
        <textarea
          className="w-full max-h-64 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 resize-none"
          value={content}
          onChange={handleChange}
          placeholder="Write a new comment..."
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Post
        </button>
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
