import { useState,useContext } from "react";

import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      src="https://fooodvilla.netlify.app/logo.2e81ae67.png"
      alt="Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useOnline();

  const {user} = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items);



  return (
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          
          <Link to="/about">
            <li className="px-2" >About</li>
          </Link>
          
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>

          <Link to="/cart">
            <li className="px-2">Cart - {cartItems.length} items</li>
          </Link>

          <Link to="/instamart"> 
            <li> Instamart </li>
          </Link>
        </ul>
      </div>
      <h1 className="p-10">{isOnline ? "✅" : "❌"}</h1>
      <span className="p-10">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
