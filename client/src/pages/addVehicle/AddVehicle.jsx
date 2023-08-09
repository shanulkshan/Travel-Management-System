import "./addVehicle.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [seating, setSeating] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleAddData = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // Validation logic
    if (!vehicleName) {
      alert("Please enter vehicle name");
      return;
    }
    if (!vehicleNumber) {
      alert("Please enter vehicle number");
      return;
    }
    if (!vehicleType) {
      alert("Please enter vehicle type");
      return;
    }
    if (!vehicleModel) {
      alert("Please enter vehicle model");
      return;
    }
    if (!location) {
      alert("Please enter located country");
      return;
    }
    if (!city) {
      alert("Please enter located city");
      return;
    }
    if (!seating || seating < 1) {
      alert("Please enter valid seating capacity");
      return;
    }
    if (!price || price < 1) {
      alert("Please enter valid price");
      return;
    }
    if (!rating || rating < 1 || rating > 10) {
      alert("Please enter valid rating (between 1 and 5)");
      return;
    }
    if (!description) {
      alert("Please enter vehicle description");
      return;
    }
    if (!image) {
      alert("Please select a vehicle image");
      return;
    }

    formData.append("image", image);
    formData.append("name", vehicleName);
    formData.append("number", vehicleNumber);
    formData.append("type", vehicleType);
    formData.append("location", location);
    formData.append("city", city);
    formData.append("seating", seating);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("desc", description);
    formData.append("model", vehicleModel);

    await axios.post("/api/vehicles", formData);

    navigate("/changeVehicle");
  };

  return (
    <>
      <Navbar />
      <div className="addVehicleHomeContainer">
        <h2>Add Vehicle</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
            onChange={(event) => {
              setVehicleName(event.target.value);
            }}
          />

          <label htmlFor="number">Vehicle Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            required
            onChange={(event) => {
              setVehicleNumber(event.target.value);
            }}
          />

          <label htmlFor="type">Vehicle Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            required
            onChange={(event) => {
              setVehicleType(event.target.value);
            }}
          />

          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            required
            onChange={(event) => {
              setVehicleModel(event.target.value);
            }}
          />

          <label htmlFor="location">Located Country:</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />

          <label htmlFor="city">Located City:</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />

          <label htmlFor="seating">Seating Capacity:</label>
          <input
            type="number"
            id="seating"
            name="seating"
            required
            onChange={(event) => {
              setSeating(event.target.value);
            }}
          />

          <label htmlFor="price">Price For a Day:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="$"
            required
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />

          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            name="rating"
            required
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />

          <label htmlFor="desc">Vehicle Description:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            required
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

          <label htmlFor="image">Vehicle Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            required
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />

          <button type="submit" onClick={handleAddData}>
            <Link
              to="/changeVehicle"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Add Vehicle
            </Link>
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddVehicle;
