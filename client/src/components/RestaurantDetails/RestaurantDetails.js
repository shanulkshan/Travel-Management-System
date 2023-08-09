import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";


export default function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    Restaurant_Name: "",
    Location: "",
    description: "",
    Opening_Hours: "",
    breakfastMenu: "",
    breakfastPrice: "",
    lunchfastMenu: "",
    lunchkfastPrice: "",
    dinnerMenu: "",
    dinnerPrice: "",
    numTables: "",
  });

  useEffect(() => {
    axios.get(`/api/restaurant/${id}`).then((res) => {
      if (res?.data) {
        setRestaurant({
          Restaurant_Name: res.data.Restaurant_Name,
          Location: res.data.Location,
          Opening_Hours: res.data.Opening_Hours,
          breakfastMenu: res.data.breakfastMenu,
          breakfastPrice: res.data.breakfastPrice,
          lunchMenu: res.data.lunchMenu,
          lunchPrice: res.data.lunchPrice,
          dinnerMenu: res.data.dinnerMenu,
          dinnerPrice: res.data.dinnerPrice,
        });
      }
    });
  }, [id]);

  useEffect(() => {
    console.log(restaurant);
  });

  const {
    Restaurant_Name,
    Location,
    description,
    Opening_Hours,
    breakfastMenu,
    breakfastPrice,
    lunchMenu,
    lunchPrice,
    dinnerMenu,
    dinnerPrice,
    numTables,
  } = restaurant;

  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={{
          marginTop: "20px",
          backgroundColor: "#f2f2f2",
          padding: "20px",
        }}
      >
        <h4 className="display-4 mb-4" style={{ color: "#00305A" }}>
          {Restaurant_Name}
        </h4>
        <hr style={{ borderColor: "#7ab3b8", borderWidth: "2px" }} />

        <div className="row">
          <div className="col-md-6">
            <dl className="row mb-3" style={{ color: "#00305A" }}>
              <dt className="col-sm-4">Location:</dt>
              <dd className="col-sm-8">{Location}</dd>
              <dt className="col-sm-4">Opening Hours:</dt>
              <dd className="col-sm-8">{Opening_Hours}</dd>
              <dt className="col-sm-4">Description:</dt>
              <dd className="col-sm-8">{description}</dd>
              <dt className="col-sm-4">Number of Tables:</dt>
              <dd className="col-sm-8">{numTables}</dd>
            </dl>
            <Link to="/RestaurantRes">
              <button
                className="btn btn-primary"
                style={{ marginRight: "20px" }}
              >
                Reserve
              </button>
            </Link>
          </div>
          <div className="col-md-6">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Meal</th>
                  <th>Menu</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Breakfast</td>
                  <td>{breakfastMenu}</td>
                  <td>{breakfastPrice}</td>
                </tr>
                <tr>
                  <td>Lunch</td>
                  <td>{lunchMenu}</td>
                  <td>{lunchPrice}</td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td>{dinnerMenu}</td>
                  <td>{dinnerPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
