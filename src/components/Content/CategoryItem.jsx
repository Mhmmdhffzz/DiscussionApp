/* eslint-disable react/button-has-type */
// CategoryItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ text, onClick }) {
  return (
    <button
      className="inline-flex items-center justify-center bg-blue-500 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}

CategoryItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryItem;
