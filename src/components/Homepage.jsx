import React from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigation = useNavigate();
  const todopage = () => {
    navigation("./todo");
  };
  const profilepage = () => {
    navigation("./profile");
  };
  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="nav-div">
          <ul className="list">
            <li>HOME</li>
            <li onClick={() => todopage()}>TODOS</li>
            <li onClick={() => profilepage()}>PROFILE</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Homepage;
