import { useState } from "react";


const loggedInUser = () => {
  //api call to check authentication
  return false;
};

// Title component for display logo
const Title = () => (
    <a href="/">
      <img 
      className="logo" 
      src="https://fooodvilla.netlify.app/logo.2e81ae67.png" 
      alt="Logo" />
    </a>
  );

// Header component for header section: Logo, Nav Items
const Header = () => {

  const  [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
    </div>
  );
};

export default Header;