import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="gmail photo"
        />
      </div>

      <div className="header__middle">
        <Search />
        <input type="text" placeholder="search mail" />
        <ArrowDropDown />
      </div>

      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
