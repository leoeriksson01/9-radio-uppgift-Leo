import style from "../css/LogInPage.module.css";
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const LogInPage = () => {
  const history = useHistory();
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let existingUser = {
      email,
      password,
    };

    let result = await login(existingUser);
    if (result) {
      history.push("/");
    } else {
      setErrorMsg("Inloggningen misslyckades");
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={style.login_form}>
        <h1>Logga in</h1>
        <p className={style.errorMsg}>{errorMsg}</p>
        <label htmlFor="email"></label>
        <input
          required
          type="email"
          placeholder="Skriv din email"
          value={email}
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

        <button>Login</button>
      </form>
      <div className={style.register}>
        <h2>Inte medlem? </h2>
        <NavLink exact to="/Register" className={style.a}>
          Registera nu
        </NavLink>
      </div>
    </div>
  );
};

export default LogInPage;
