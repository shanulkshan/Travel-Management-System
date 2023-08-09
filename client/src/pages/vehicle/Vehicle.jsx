import "./vehicle.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { format } from "date-fns";
import axios from "axios";

const Vehicle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [dateRange, setDateRange] = useState(location.state.dateRange);
  const [startAndEndDate, setstartAndEndDate] = useState(
    location.state.startAndEndDate
  );
  const { data, loading } = useFetch(`/api/vehicles/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleReserveVehicle = async () => {
    const reservation = {
      title: "Title",
      maxPeople: 4,
      reservationNumbers: [{ unavailableDates: [...dateRange] }],
    };

    await axios.post(`/api/reservations/${id}`, reservation);

    navigate(`/confirmation`, {
      state: { data, dateRange, startAndEndDate, reservation },
    });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="vehicleContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={`../${data.photos[slideNumber]}`}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="vehicleWrapper">
            <p style={{ color: "#797979" }}>
              selected dates :
              {startAndEndDate[0] &&
                startAndEndDate[0].startDate &&
                startAndEndDate[0] &&
                startAndEndDate[0].endDate && (
                  <span className="headerSearchText">{`${format(
                    startAndEndDate[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(
                    startAndEndDate[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                )}
            </p>
            <h1 className="vehicleTitle">
              {data.displayVehicle?.name ? data.displayVehicle.name : ""}
            </h1>
            <div className="vehicleAddress">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <span className="vehiclePriceHighlight">
              Book a vehicle over $
              {data.displayVehicle?.price ? data.displayVehicle.price : ""} and
              get a free airport service
            </span>
            <div className="vehicleImages">
              {data.displayVehicle?.photos &&
                data.displayVehicle.photos.length > 0 &&
                data.displayVehicle.photos.map((photo, i) => {
                  return (
                    <div className="vehicleImgWrapper" key={i}>
                      <img
                        onClick={() => handleOpen(i)}
                        src={`../${photo}`}
                        alt=""
                        className="vehicleImg"
                      />
                    </div>
                  );
                })}
            </div>
            <p>{data.displayVehicle?.desc ? data.displayVehicle.desc : ""}</p>
          </div>
          <div className="vehicleDetails">
            <div className="vehicleDetailsPrice">
              <h1>Perfect for Your Ride!</h1>
              <span>
                This vehicle has an excellent rating score of{" "}
                {data.displayVehicle?.rating ? data.displayVehicle.rating : ""}!
              </span>
              <h2>
                Total:
                <b>
                  $
                  {(data.displayVehicle?.price
                    ? data.displayVehicle.price
                    : "") * dateRange.length}
                </b>
              </h2>
              <button onClick={handleReserveVehicle}>
                Reserve or Book Now!
              </button>
            </div>
          </div>
          {/* <MailList /> */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Vehicle;
