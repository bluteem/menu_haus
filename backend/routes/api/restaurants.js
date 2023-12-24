const express = require("express");
const router = express.Router();

// Load Restaurant model
const Restaurant = require("../../models/restaurant");

// @route GET api/restaurant/test
// @description tests restaurants route
// @access Public
router.get("/test", (req, res) => res.send("restaurant route testing!"));

// @route GET api/restaurants
// @description Get all restaurants
// @access Public
router.get("/", (req, res) => {
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(404).json({ norestaurantsfound: "No Restaurants found" }));
});

// @route GET api/restaurants/:id
// @description Get single restaurant by id
// @access Public
router.get("/:id", (req, res) => {
  restaurant.findById(req.params.id)
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(404).json({ norestaurantfound: "No Restaurant found" }));
});

// @route GET api/restaurants
// @description add/save restaurant
// @access Public
router.post("/", (req, res) => {
  Restaurant.create(req.body)
    .then((restaurant) => res.json({ msg: "Restaurant added successfully" }))
    .catch((err) => {
      res.status(400).json({ error: "Unable to add this restaurant" });
      console.log(err);
    });
});

// @route GET api/restaurants/:id
// @restaurant description update
// @access Public
router.put("/:id", (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body)
    .then((restaurant) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/restaurants/:id
// @description Delete restaurant by id
// @access Public
router.delete("/:id", (req, res) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then((restaurant) => res.json({ mgs: "Restaurant entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a restaurant" }));
});

module.exports = router;
