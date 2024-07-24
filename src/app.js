//THE CODE

import React from "react";
import ReactDOM from "react-dom/client";
//Default import
// import Header from "./components/Header";
//Named import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/









// RestaurantList is JSON Data for displaying cards
// Built by using multiple restaurant's data 






// Body Component for body section: It contain all restaurant cards

// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index


// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
