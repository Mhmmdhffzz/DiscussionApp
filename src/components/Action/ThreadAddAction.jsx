/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';

function ThreadAddAction() {
  return (
    <div className="fixed bottom-8 right-8">
      <Link to="/add">
        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <BsPlus className="text-2xl" />
        </button>
      </Link>
    </div>
  );
}

export default ThreadAddAction;
