import React from 'react';
import PropTypes from 'prop-types';
import { FiMail, FiLock } from 'react-icons/fi'; // Importing Feather Icons
import useInput from '../../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <div className="flex items-center mb-4">
        <FiMail className="text-gray-400 mr-2" />
        {' '}
        {/* Icon for Email input */}
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="flex items-center mb-4">
        <FiLock className="text-gray-400 mr-2" />
        {' '}
        {/* Icon for Password input */}
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <button
        type="button"
        onClick={() => login({ email, password })}
        className="mt-3 w-full px-4 py-2 text-white bg-purple-600 rounded-lg font-semibold cursor-pointer"
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
