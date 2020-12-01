import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <div className="Header">
      <Link to="/">Redux Auth</Link>
      {authenticated ? (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      ) : (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
