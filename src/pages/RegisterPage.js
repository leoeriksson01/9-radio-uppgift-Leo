import React, { useState, useContext } from "react";
import style from "../css/RegisterPage.module.css";
import { UserContext } from "../contexts/UserContext";
import { useHistory } from "react-router-dom";

function RegisterPage() {
  const history = useHistory();
  const { register } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  let passwordError = "";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    if (password === passwordConfirmation) {
      let result = await register(newUser);
      if (result.success) {
        history.push("/");
        console.log("Logged in successfully");
      }
    } else {
      alert("Lösenorden matchar inte");
    }
  };

  return (
    <>
      <div id={style.SignUpContainer}>
        <form id={style.signUpForm} onSubmit={handleSubmit}>
          <h1>Bli medlem</h1>
          <label htmlFor="name"></label>
          <input
            required
            type="text"
            placeholder="Skriv ditt namn"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="email"></label>
          <input
            required
            type="email"
            value={email}
            placeholder="Skriv din email"
            onChange={handleEmailChange}
          />
          <label htmlFor="password" className={style.formLabel}></label>
          <input
            required
            type="password"
            placeholder="Skriv ditt lösenord"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password" className={style.formLabel}></label>
          <input
            required
            type="password"
            placeholder="Bekräfta ditt lösenord"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
          />

          <button id={style.signUpBtn}>Bli medlem</button>
          <div className={style.error}> {passwordError}</div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
