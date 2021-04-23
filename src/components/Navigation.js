import { Navbar, Nav, Container } from "react-bootstrap";
import Profile from "../assets/profile.png";
import React, { useState } from "react";
import style from "../css/Navigation.module.css";
import useOnclickOutside from "react-cool-onclickoutside";

const Navigation = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const profile_menu_close = useOnclickOutside(() => setProfileMenu(false));
  const toggleProfileMenu = (e) => {
    setProfileMenu((profileMenu) => !profileMenu);
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
              <Nav.Link className={style.link} href="/">
                Home
              </Nav.Link>
              <Nav.Link className={style.link} href="/Browse">
                Channels
              </Nav.Link>
              <Nav.Link className={style.link} href="/Categories">
                Programs/Categories
              </Nav.Link>
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
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
