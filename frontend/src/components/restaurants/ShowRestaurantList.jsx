import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

function ShowRestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/restaurants")
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowRestaurantList");
      });
  }, []);

  const restaurantList =
  restaurants.length === 0
      ? "there is no restaurant record!"
      : restaurants.map((restaurant, k) => <RestaurantCard restaurant={restaurant} key={k} />);

  return (
    <div className="ShowEntryList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Restaurants List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/create-restaurant"
              className="btn btn-outline-warning float-right"
            >
              + Add New Restaurant
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{restaurantList}</div>
      </div>
    </div>
  );
}

export default ShowRestaurantList;
