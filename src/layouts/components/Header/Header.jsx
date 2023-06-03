import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../../assets/logo.png";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from "../../../assets/menu.png";
import UserIcon from "../../../assets/user.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../feature/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const headerNav = [
    { name: "Home", to: "/" },
    { name: "Tour Guide", to: "/tourguide" },
    { name: "Travel", to: "/planner" },
  ];

  const headerMenu = [
    { display: "Đăng nhập", to: "/login" },
    { display: "Đăng ký", to: "/register" },
    { display: "Trợ giúp", to: "/help" },
  ];

  const headerMenuLogined = [
    { display: "Trang cá nhân", to: "/profile" },
    { display: "Chuyến đi", to: "/history" },
    { display: "Trợ giúp", to: "/help" },
    { display: "Đăng xuất", to: "/" },
  ];

  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const active = headerNav.findIndex((e) => e.path === pathname);

  const handleLogout = () => {
    localStorage.clear();

    const action = logout();
    dispatch(action);
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div className="header__container">
      <div className="header__nav">
        <img className="header__nav-logo" src={Logo} alt="Logo" />
        <nav className="header__nav-tab">
          <ul className="header__nav-list">
            {headerNav.map((item, i) => (
              <li
                key={i}
                className={`header__nav-item ${i === active ? "active" : ""}`}
              >
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__nav-feature">
          <Search />
          {/* <div className="header__nav-feature-icon">
            <img
              className="header__nav-feature-icon-menu"
              src={MenuIcon}
              alt="Logo"
            />
            <img
              className="header__nav-feature-icon-user"
              src={UserIcon}
              alt="Logo"
            />
          </div> */}
          <Button
            className="header__nav-feature-icon"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              className="header__nav-feature-icon-menu"
              src={MenuIcon}
              alt="Logo"
            />
            <img
              className="header__nav-feature-icon-user"
              src={UserIcon}
              alt="Logo"
            />
          </Button>
          <Menu
            id="basic-menu"
            className="header__menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            TransitionComponent={Fade}
          >
            {user == null
              ? headerMenu.map((item) => (
                  <MenuItem>
                    <Link to={item.to}>{item.display}</Link>{" "}
                  </MenuItem>
                ))
              : headerMenuLogined.map((item) => {
                  return item.display == "Đăng xuất" ? (
                    <MenuItem>
                      <Link onClick={handleLogout}>{item.display}</Link>{" "}
                    </MenuItem>
                  ) : (
                    <MenuItem>
                      <Link to={item.to}>{item.display}</Link>{" "}
                    </MenuItem>
                  );
                })}
          </Menu>
        </div>
      </div>
      <div className="header__content">
        <div className="header__content-half1">
          <h1 className="header__content-half1-title">
            Your main value <br /> proposition
          </h1>
          <p className="header__content-half1-desc">
            Website giúp kết nối bạn với hướng dẫn viên bản địa nơi bạn du lịch{" "}
            <br />
            Hãy tham gia cùng chúng tôi ngay để nhận được trải nghiệm tốt nhất
          </p>
          {user == null ? (
            <div className="header__content-half1-buttons">
              <button
                onClick={() => navigate("/register")}
                className="header__content-half1-buttons-register"
              >
                Đăng ký
              </button>
              <button
                onClick={() => navigate("/login")}
                className="header__content-half1-buttons-login"
              >
                Đăng nhập
              </button>
            </div>
          ) : (
            <div className="header__content-half1-buttons">
              {/* <button
                onClick={() => navigate("/register")}
                className="header__content-half1-buttons-register"
              >
                Đăng xuất
              </button> */}
            </div>
          )}
        </div>
        <div className="header__content-half2"></div>
      </div>
    </div>
  );
};

export default Header;
