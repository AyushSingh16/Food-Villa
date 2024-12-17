import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

const Instamart = lazy(()=>import("./components/Instamart"));

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

// AppLayout component to show: Header, Body, Footer
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        errorElement: <Error />,
        element: <About />,
        children: [
          {
            path: "profile",
            errorElement: <Error />,
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        errorElement: <Error />,
        element: <Body />,
      },
      {
        path: "/contact",
        errorElement: <Error />,
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        errorElement: <Error />,
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Shimmer/>} >
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
