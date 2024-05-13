import { GiTalk } from 'react-icons/gi'; // Changed the icon to GiTalk
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/AuthUser/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ email, name, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));
    navigate('/');
  };

  return (
    <section className="grid grid-cols-2 min-h-screen">
      <header className="flex items-center justify-center text-4xl bg-purple-600 text-white p-4">
        {' '}
        {/* Changed background color to purple */}
        <h1><GiTalk size={300} /></h1>
        {' '}
        {/* Changed the icon to GiTalk */}
      </header>
      <article className="flex gap-4 justify-center flex-col p-16 bg-gray-100">
        {' '}
        {/* Changed background color to gray */}
        <h2 className="font-light text-5xl">Create your account</h2>
        <RegisterInput register={onRegister} />

        <p className="text-gray-700">
          Already have an account?
          {' '}
          <Link className="text-purple-600 underline" to="/">Login</Link>
          {' '}
          {/* Changed text color to purple */}
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
