import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <span className="title" onClick={()=> window.scroll(0,0)}>☠️ The Pirates Bay ⚓</span>
    </div>
  );
};

export default Header;
