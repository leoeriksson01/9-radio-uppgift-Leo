import { Navbar, Nav, Container } from "react-bootstrap";
import Profile from "../assets/profile.png";
import React, { useState } from "react";
import style from "../css/Navigation.module.css";
import useOnclickOutside from "react-cool-onclickoutside";
import { NavLink } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";

const Navigation = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const profile_menu_close = useOnclickOutside(() => setProfileMenu(false));
  const [profileMenuShow, setProfileMenuShow] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuShow((profileMenuShow) => !profileMenuShow);
  };

  return (
    <div className={style.container}>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://images.vexels.com/media/users/3/150845/isolated/preview/333bdf231eba2185ef3e211bb541c09f-audio-headphones-icon-by-vexels.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            className={style.brand}
          />{" "}
        </Navbar.Brand>

        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" className={style.link}>
                Hem
              </NavLink>
              <NavLink exact to="/Channels" className={style.link}>
                Kanaler/Tablå
              </NavLink>
              <NavLink exact to="/Categories" className={style.link}>
                Kategorier
              </NavLink>
              <NavLink exact to="/Programs" className={style.link}>
                Kanaler/Program
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <div className={style.profile_container} ref={profile_menu_close}>
          <img
            onClick={toggleProfileMenu}
            src={Profile}
            alt="profile"
            className={style.profile_icon}
          />
          <div className={`${profileMenuShow ? style.showing : style.hidden}`}>
            <div className={style.profileMenuList}>
              <ProfileMenu></ProfileMenu>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
