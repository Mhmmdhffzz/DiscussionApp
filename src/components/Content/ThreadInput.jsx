import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [body, setBody] = useState('');

  const onChangeBody = (event) => {
    setBody(event.target.innerText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addThread({ title, body, category });
    // Clear inputs after submitting
    setTitle('');
    setBody('');
    setCategory('');
  };

  return (
    <form className="m-6" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={setTitle}
        placeholder="Title"
        className="thread-input__title border rounded-md p-2 mb-2 w-full"
      />
      <input
        type="text"
        value={category}
        onChange={setCategory}
        placeholder="Category (optional)"
        className="thread-input__category border rounded-md p-2 mb-2 w-full"
      />
      <div
        className="thread-input__body border rounded-md p-2 mb-2 w-full"
        data-testid="input-body"
        contentEditable
        onInput={onChangeBody}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Thread
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
