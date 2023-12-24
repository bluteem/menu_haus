import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Bootstrap CSS & JS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components imports
import CreateBook from "./components/books/CreateBook";
import ShowBookList from "./components/books/ShowBookList";
import ShowBookDetails from "./components/books/ShowBookDetails";
import UpdateBookInfo from "./components/books/UpdateBookInfo";
import Deneme from "./components/Deneme";
import CreateRestaurant from "./components/restaurants/CreateRestaurant";
import ShowRestaurantList from "./components/restaurants/ShowRestaurantList";
import ShowRestaurantDetails from "./components/restaurants/ShowRestaurantDetails";
import UpdateRestaurantInfo from "./components/restaurants/UpdateRestaurantInfo";

// Routes
const router = createBrowserRouter([
  { path: "/", element: <ShowBookList /> },
  { path: "/create-book", element: <CreateBook /> },
  { path: "/show-book/:id", element: <ShowBookDetails /> },
  { path: "/edit-book/:id", element: <UpdateBookInfo /> },  
  { path: "/deneme", element: <Deneme /> },
  { path: "/restaurants", element: <ShowRestaurantList /> },
  { path: "/create-restaurant", element: <CreateRestaurant /> },
  { path: "/show-restaurant/:id", element: <ShowRestaurantDetails /> },
  { path: "/edit-restaurant/:id", element: <UpdateRestaurantInfo /> },  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);