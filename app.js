import React from "react";
import ReactDOM,{createRoot} from "react-dom/client";
      /*
      Header
        - Logo
        - Nav items (Right side)
        - cart
      Body
        - Search bar
        - RestaurantsList
          - RestaurantCard
            - Image
            - Name
            - Rating
            - Cusines
      Footer
        - Links
        - Copyrights
      */

const Title = () => (
  <a href="/">
  <img className="logo" alt="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
  </a>
);
    
 
const HeaderComponent = () => {
  return (
    <div className="header">
      {
        <Title/>    // Title 
      }
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <h4>Body</h4>

  );
};

const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}

const AppLayout = () => {
  return {
    // <Header/>
    // <Body/>
    // <Footer/>
  }
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
