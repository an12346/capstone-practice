import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <u><h1>Farmer's Market</h1></u>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
    </React.Fragment>
  )
}

export default Header;