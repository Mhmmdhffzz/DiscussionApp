/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';

function CommentList({ comments, upVote, downVote }) {
  return (
    <div className="m-6">
      <h3 className="text-lg font-semibold mb-2">
        Comments (
        {comments.length}
        )
      </h3>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} upVote={upVote} downVote={downVote} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default CommentList;
