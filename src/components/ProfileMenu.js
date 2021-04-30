import { NavLink } from "react-router-dom";
import React, { useState, useContext } from "react";
import style from "../css/ProfileMenu.module.css";
import { UserContext } from "../contexts/UserContext";

const ProfileMenu = () => {
  const { whoami, userInDB, logout, user } = useContext(UserContext);

  const handleLogOut = async (e) => {
    e.preventDefault();
    logout();
  };

  const loggedInMenu = (
    <div className={style.logged_in_menu}>
      <div className={style.order_link_wrapper}>
        <NavLink exact to="/profile" className={style.a}>
          My Profile
        </NavLink>
      </div>
      <hr className={style.hr} />
      <div className={style.button_logout_wrapper}>
        <button onClick={handleLogOut} className={style.button_logout}>
          Log out
        </button>
      </div>
    </div>
  );

  // Logged out menu
  const loggedOutMenu = (
    <div className={style.logged_out_menu}>
      <div className={style.button_login_wrapper}>
        <NavLink exact to="/Login" className={style.button_login}>
          Logga in
        </NavLink>
      </div>
      <hr className={style.hr} />
      <div className={style.registration_wrapper}>
        <p className={style.registration_text}>
          <span className={style.register}>Inte medlem?</span>
          <NavLink className={style.a} exact to="/Register">
            Registera nu
          </NavLink>
        </p>
      </div>
    </div>
  );

  return (
    <div className={style.profile_menu_wrapper}>
      <div className={style.profile_menu_content}>
        {user ? (
          <div className={style.profile_menu_content}>{loggedInMenu}</div>
        ) : (
          <div className={style.profile_menu_content}>{loggedOutMenu}</div>
        )}
      </div>
    </div>
  );
};

export default ProfileMenu;
