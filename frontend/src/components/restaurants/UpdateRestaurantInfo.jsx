import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../App.css";

function UpdateRestaurantInfo(props) {
  const [restaurant, setRestaurant] = useState({
    rname: "",
    rowner: "",
    raddress: "",
    rphone: "",
    remail: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/restaurants/${id}`)
      .then((res) => {
        setRestaurant({
          rname: res.data.rname,
          rowner: res.data.rowner,
          raddress: res.data.raddress,
          rphone: res.data.rphone,
          remail: res.data.remail,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateRestaurantInfo");
      });
  }, [id]);

  const onChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      rname: restaurant.rname,
      rowner: restaurant.rowner,
      raddress: restaurant.raddress,
      rphone: restaurant.rphone,
      remail: restaurant.remail,
    };

    axios
      .put(`http://localhost:8082/api/restaurants/${id}`, data)
      .then((res) => {
        navigate(`/show-restaurant/${id}`);
      })
      .catch((err) => {
        console.log("Error in UpdateRestaurantInfo!");
      });
  };

  return (
    <div className="UpdateEntryInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Restaurant List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Restaurant</h1>
            <p className="lead text-center">Update Restaurant's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="rname">Name</label>
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
              <label htmlFor="rowner">Owner</label>
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
              <label htmlFor="raddress">Address</label>
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
              <label htmlFor="rphone">Phone</label>
              <textarea
                type="text"
                placeholder="Phone Number of the Restaurant"
                name="rphone"
                className="form-control"
                value={restaurant.rphone}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="remail">Email</label>
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

            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRestaurantInfo;
