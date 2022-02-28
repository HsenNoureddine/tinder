import React from "react";
import "./Header.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountBoxIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
      />

      <IconButton>
        <ChatIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
