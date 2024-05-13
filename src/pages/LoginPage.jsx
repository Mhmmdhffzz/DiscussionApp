import React from 'react';
import { GiTalk } from 'react-icons/gi'; // Changed the icon to GiTalk
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/AuthUser/LoginInput';
import { asyncSetAuthUser } from '../states/auth/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="grid grid-cols-2 min-h-screen">
      <header className="flex items-center justify-center text-4xl bg-purple-600 text-white p-4">
        {' '}
        {/* Changed background color to purple */}
        <h1 className=""><GiTalk size={300} /></h1>
        {' '}
        {/* Changed the icon to GiTalk */}
      </header>
      <article className="flex gap-4 justify-center flex-col p-16 bg-gray-100">
        {' '}
        {/* Changed background color to gray */}
        <h2 className="font-light text-5xl text-gray-800">
          {' '}
          {/* Changed text color to gray */}
          Join
          {' '}
          <strong>The Conversation</strong>
          ,
          {' '}
          <br />
          Through Discussion App.
        </h2>
        <LoginInput login={onLogin} />
        <p className="text-gray-700">
          Don&apos;t have an account?
          {' '}
          <Link to="/register" className="text-purple-600 underline">
            {' '}
            {/* Changed text color to purple */}
            Register
          </Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
