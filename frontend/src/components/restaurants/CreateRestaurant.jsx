import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateRestaurant = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    rname: "",
    rowner: "",
    raddress: "",
    rphone: "",
    remail: "",
  });

  const onChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8082/api/restaurants", restaurant)
      .then((res) => {
        setRestaurant({
          rname: "",
          rowner: "",
          raddress: "",
          rphone: "",
          remail: "",
        });

        // Push to /
        navigate("/restaurants");
      })
      .catch((err) => {
        console.log("Error in CreateRestaurant!");
      });
  };

  return (
    <div className="CreateEntry">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/restaurants" className="btn btn-outline-warning float-left">
              Show Restaurant List
            </Link>
          </div>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Add Restaurant</h1>
            <p className="lead text-center">Create new restaurant</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name of the Restaurant"
                  name="rname"
                  className="form-control"
                  value={restaurant.rname}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Owner"
                  name="rowner"
                  className="form-control"
                  value={restaurant.rowner}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Address"
                  name="raddress"
                  className="form-control"
                  value={restaurant.raddress}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="rphone"
                  className="form-control"
                  value={restaurant.rphone}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  name="remail"
                  className="form-control"
                  value={restaurant.remail}
                  onChange={onChange}
                />
              </div>
              <br />

              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRestaurant;
