import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/thread/action';
import ThreadInput from '../components/Content/ThreadInput';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };
  return (
    <section className="mt-2">
      <div className="mb-4">
        <h5 className="font-bold ml-6 mt-2">Buat Thread</h5>
      </div>
      <ThreadInput addThread={onAddThread} />
    </section>
  );
}

export default AddThreadPage;
