import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const initialFormValue = {
    username: '',
    password: '',
  };

  const [formValue, setFormValue] = useState(initialFormValue);
  const [formHint, setFormHint] = useState('Sign in to your account');
  const box1Ref = useRef(0);
  const box2Ref = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = formValue.username;
    const password = formValue.password;
    alert(`${username} logged in successfully`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleMouseOver = (e) => {
    if (formValue.username.length < 8 || formValue.password.length < 8) {
      if (e.target.classList.contains('dodge--left')) {
        e.target.classList.remove('dodge--left');
        e.target.classList.add('dodge--right');
      } else {
        e.target.classList.remove('dodge--right');
        e.target.classList.add('dodge--left');
      }

      if (formValue.username.length < 8) {
        box1Ref.current.focus();
      }
      if (formValue.password.length < 8) {
        box2Ref.current.focus();
      }
    }
  };

  useEffect(() => {
    if (formValue.username.length < 8) {
      box1Ref.current.style.outlineColor = 'red';
    } else {
      box1Ref.current.style.outlineColor = 'green';
    }
    if (formValue.password.length < 8) {
      box2Ref.current.style.outlineColor = 'red';
    } else {
      box2Ref.current.style.outlineColor = 'green';
    }
  }, [formValue]);

  return (
    <div className="app container">
      <h2 className="app__title">FunForm</h2>
      <form className="funform" onSubmit={handleSubmit}>
        <h4 className="funform__hint">{formHint}</h4>
        <div className="funform__input">
          <label htmlFor="username">
            <p>username</p>
            <input
              id="username"
              className="input__box "
              name="username"
              type="text"
              value={formValue.username}
              onChange={handleInputChange}
              ref={box1Ref}
            />
          </label>
          <label htmlFor="password">
            <p>password</p>
            <input
              id="password"
              className="input__box"
              name="password"
              type="password"
              value={formValue.password}
              onChange={handleInputChange}
              ref={box2Ref}
            />
          </label>
          <button
            id="btn"
            className="input__btn"
            type="submit"
            onMouseOver={handleMouseOver}
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
}
