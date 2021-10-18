import React, { useState } from 'react';
import './Form.scss';

export const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [validName, setValidName] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [validUserName, setValidUserName] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [validPhone, setValidPhone] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [validPassword, setValidPassword] = useState<boolean>(false);

  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [validRepeatedPassword, setValidRepeatedPassword] = useState<boolean>(false);

  const checkName = () => {
    const regExp = /^(?!\s)[A-Z\s]+$/i;

    const result = regExp.test(name);

    setValidName(false);

    if (result) {
      setValidName(true);
    }
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setName(value.toLowerCase());
  };

  const checkUserName = () => {
    const regExp = /^(?!\s)[A-Z\s]+$/i;

    const result = regExp.test(userName);

    setValidUserName(false);

    if (result) {
      setValidUserName(true);
    }
  };

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setUserName(value.toLowerCase());
  };

  const checkEmail = () => {
    const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    const result = regExp.test(email);

    setValidEmail(false);

    if (result) {
      setValidEmail(true);
    }
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setEmail(value);
  };

  const checkPhone = () => {
    const regExp = /(\+)[0-9]{2}(\()[0-9]{3}(\))[\s][0-9]{3}[\s][0-9]{2}[\s][0-9]{2}/gm;

    const result = regExp.test(phone);

    setValidPhone(false);

    if (result) {
      setValidPhone(true);
    }
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setPhone(value);
  };

  const checkPassword = () => {
    const alphaNumeric = /[a-zA-z0-9!@#$%^&*]/gm;

    const alphaNumericResult = alphaNumeric.test(password);

    setValidPassword(false);

    if (alphaNumericResult) {
      setValidPassword(true);
    }
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setPassword(value);
  };

  const checkRepeatedPAssword = () => {
    const alphaNumeric = /[a-zA-z0-9!@#$%^&*]/gm;

    const alphaNumericResult = alphaNumeric.test(repeatPassword);

    setValidRepeatedPassword(false);

    if ((alphaNumericResult) && (password === repeatPassword)) {
      setValidRepeatedPassword(true);
    }
  };

  const handleChangeRepeatedPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setRepeatPassword(value);
  };

  return (
    <form action="#" method="POST" className="form">

      <label htmlFor="name" className="form__label form__label--mg">
        Name
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          value={name}
          onChange={handleChangeName}
          onBlur={checkName}
          required
        />
        {validName && (
          <div className="success-input">Success!</div>
        )}

        {!validName && (
          <div className="invalid-input">Please, enter correct name</div>
        )}
      </label>

      <label htmlFor="username" className="form__label form__label--mg">
        User name
        <br />
        <input
          type="text"
          name="username"
          placeholder="User name"
          id="username"
          value={userName}
          onChange={handleChangeUserName}
          onBlur={checkUserName}
          required
        />
        {validUserName && (
          <div className="success-input">Success!</div>
        )}

        {!validUserName && (
          <div className="invalid-input">Please, enter correct username</div>
        )}
      </label>

      <label htmlFor="email" className="form__label form__label--mg">
        Email
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleChangeEmail}
          onBlur={checkEmail}
          required
        />
        {validEmail && (
          <div className="success-input">Success!</div>
        )}

        {!validEmail && (
          <div className="invalid-input">Please, enter correct Email</div>
        )}
      </label>

      <label htmlFor="phone" className="form__label form__label--mg">
        Phone
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          id="phone"
          value={phone}
          onChange={handleChangePhone}
          onBlur={checkPhone}
          required
        />
        {!validPhone && (
          <div className="invalid-input">Use format: +19(999) 999 99 99</div>
        )}

        {(phone.length > 0 && validPhone) && (
          <div className="success-input">Success!</div>
        )}
      </label>

      <label htmlFor="password" className="form__label form__label--mg">
        Password
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handleChangePassword}
          onBlur={checkPassword}
          required
        />
        {(password.length < 8 || !validPassword) && (
          <div className="invalid-input">
            Password length should be at least 8 symbols
            <br />
            and contain at least 1 spacial character: !@#$%^*
          </div>
        )}

        {(password.length > 8 && validPassword) && (
          <div className="success-input">Success!</div>
        )}
      </label>

      <label htmlFor="repeat-password" className="form__label form__label--mg">
        Repeat password
        <br />
        <input
          type="password"
          name="repeat-password"
          placeholder="Repeat password"
          id="repeat-password"
          value={repeatPassword}
          onChange={handleChangeRepeatedPassword}
          onBlur={checkRepeatedPAssword}
          required
        />
        {(password.length < 8 || !validRepeatedPassword) && (
          <div className="invalid-input">
            Password length should be at least 8 symbols
            <br />
            and contain at least 1 spacial character: !@#$%^*
          </div>
        )}

        {(password.length > 8 && validRepeatedPassword) && (
          <div className="success-input">Success!</div>
        )}
      </label>

      <button type="submit" className="button-form">Submit</button>
    </form>
  );
};
