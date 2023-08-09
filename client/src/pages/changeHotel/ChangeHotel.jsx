import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./changeHotel.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { Modal } from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";

const ChangeHotel = () => {
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [selectedHotelIndex, setselectedHotelIndex] = useState(-1);
  const [HotelName, setHotelName] = useState("");
  const [Hoteltype, setHoteltype] = useState("");
  const [HotelCity, setHotelCity] = useState("");
  const [HotelAddress, setHotelAddress] = useState("");
  const [HotelDistance, setHotelDistance] = useState("");
  const [Hoteltitle, setHoteltitle] = useState("");
  const [Hoteldesc, setHoteldesc] = useState("");
  const [HotelcheapestPrice, setHotelcheapestPrice] = useState("");

  const { data, reFetch } = useFetch(`/api/hotels`);
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/AddHotel");
  };

  useEffect(() => {
    if (data) {
      setHotelName(
        data[selectedHotelIndex]?.name ? data[selectedHotelIndex].name : ""
      );
      setHoteltype(
        data[selectedHotelIndex]?.type
          ? data[selectedHotelIndex].type
          : ""
      );
      setHotelCity(
        data[selectedHotelIndex]?.city ? data[selectedHotelIndex].city : ""
      );
      setHotelAddress(
        data[selectedHotelIndex]?.address
          ? data[selectedHotelIndex].address
          : ""
      );
      setHotelDistance(
        data[selectedHotelIndex]?.distance
          ? data[selectedHotelIndex].distance
          : ""
      );
      setHoteltitle(
        data[selectedHotelIndex]?.title
          ? data[selectedHotelIndex].title
          : ""
      );
      setHoteldesc(
        data[selectedHotelIndex]?.desc
          ? data[selectedHotelIndex].desc
          : ""
      );
      setHotelcheapestPrice(
        data[selectedHotelIndex]?.cheapestPrice ? data[selectedHotelIndex].cheapestPrice : ""
      );
    }
  }, [selectedHotelIndex]);

  const closeEditorPopup = () => {
    setIsEditPopupVisible(false);
  };

  const updateHotel = async (event) => {
    event.preventDefault();

    const hotel = {
      name: HotelName,
      type: Hoteltype,
      city: HotelCity,
      address: HotelAddress,
      distance: HotelDistance,
      title: Hoteltitle,
      desc: Hoteldesc,
      cheapestPrice: HotelcheapestPrice,
    };

    await axios.put(`api/hotels/${data[selectedHotelIndex]._id}`, hotel);

    setIsEditPopupVisible(false);
    reFetch();
  };
  const handleNameChange = (event) => {
    setHotelName(event.target.value);
  };
  const handleTypeChange = (event) => {
    setHoteltype(event.target.value);
  };
  const handleCityChange = (event) => {
    setHotelCity(event.target.value);
  };
  const handleAddressChange = (event) => {
    setHotelAddress(event.target.value);
  };
  const handleDistanceChange = (event) => {
    setHotelDistance(event.target.value);
  };
  const handleTitleChange = (event) => {
    setHoteltitle(event.target.value);
  };
  const handleDescChange = (event) => {
    setHoteldesc(event.target.value);
  };
  const handlePriceChange = (event) => {
    setHotelcheapestPrice(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <button className="backButton" onClick={handleBackButton}>
          <FontAwesomeIcon icon={faPlus} /> Add Hotel
        </button>
        <table style={{ width: 700 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>City</th>
              <th>Title</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((hotel, index) => {
                const handleEditCLick = () => {
                  setIsEditPopupVisible(true);
                  setselectedHotelIndex(index);
                };

                const handleDeleteClick = async () => {
                  const confirm = window.confirm("Do you want to delete ");

                  if (confirm) {
                  await axios.delete(
                    `api/hotels/${data[index]._id}`,
                    hotel
                  );

                  reFetch();
                  }
                };

                return (
                  <tr key={index}>
                    <td>{hotel.name}</td>
                    <td>{hotel.type}</td>
                    <td>{hotel.city}</td>
                    <td>{hotel.title}</td>
                    <td>
                      <button onClick={handleEditCLick}>Edit</button>
                    </td>
                    <td>
                      <button onClick={handleDeleteClick}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isEditPopupVisible && (
          <Modal title="Edit Hotel Details" closePopup={closeEditorPopup}>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={HotelName}
                  onChange={handleNameChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="type">Hotel Type:</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={Hoteltype}
                  onChange={handleTypeChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="city">Hotel city:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={HotelCity}
                  onChange={handleCityChange}
                />
              </div>

              <div>
                <label htmlFor="address">Hotel Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={HotelAddress}
                  onChange={handleAddressChange}
                />
              </div>

              <div>
                <label htmlFor="distance">Hotel Distance:</label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  required
                  value={HotelDistance}
                  onChange={handleDistanceChange}
                />
              </div>

              <div>
                <label htmlFor="title">Hotel Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={Hoteltitle}
                  onChange={handleTitleChange}
                />
              </div>

              <div>
                <label htmlFor="desc">Description:</label>
                <input
                  type="text"
                  id="desc"
                  name="desc"
                  required
                  value={Hoteldesc}
                  onChange={handleDescChange}
                />
              </div>

              <div>
                <label htmlFor="cheapestPrice">Cheapest Price:</label>
                <input
                  type="number"
                  id="cheapestPrice"
                  name="cheapestPrice"
                  placeholder="$"
                  required
                  value={HotelcheapestPrice}
                  onChange={handlePriceChange}
                />
              </div>

              <button type="submit" onClick={updateHotel}>
                Change Hotel
              </button>
            </form>
          </Modal>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default ChangeHotel;
