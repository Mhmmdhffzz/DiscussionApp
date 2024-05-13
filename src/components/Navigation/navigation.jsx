import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMessage, AiOutlineTrophy } from 'react-icons/ai'; // Changed icons to AiOutlineMessage and AiOutlineTrophy
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { name, avatar } = authUser;

  return (
    <div className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center">
      {' '}
      {/* Changed background color to blue */}
      <Link to="/" className="text-xl font-bold" style={{ textDecoration: 'none' }}>
        Discussion App By
        {' '}
        <span className="text-red-500">{name}</span>
        {' '}
        {/* Changed text color to red */}
      </Link>
      <nav>
        <Link to="/" className="nav-link flex items-center mr-4">
          <AiOutlineMessage className="mr-1 text-lg" />
          {/* Changed icon to AiOutlineMessage */}
          Thread
        </Link>
        <Link to="/leaderboard" className="nav-link flex items-center">
          <AiOutlineTrophy className="mr-1 text-lg" />
          {/* Changed icon to AiOutlineTrophy */}
          Leaderboard
        </Link>
      </nav>
      <div className="nav__user-info flex items-center">
        <img src={avatar} alt={name} title={name} className="w-10 h-10 rounded-full mr-2" />
        <button type="button" onClick={signOut} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm">
          {' '}
          {/* Changed background color to red */}
          Logout
        </button>
      </div>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
