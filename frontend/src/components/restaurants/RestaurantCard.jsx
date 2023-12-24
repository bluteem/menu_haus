import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Restaurants"
        height={200}
      />
      <div className="desc">
        <h2>
          <Link to={`/show-restaurant/${restaurant._id}`}>{restaurant.rname}</Link>
        </h2>
        <h3>{restaurant.rowner}</h3>
        <p>{restaurant.raddress}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
