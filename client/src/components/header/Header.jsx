import {
  faBed,
  faBowlFood,
  faCalendarDays,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

const Header = ({ type, activePage }) => {
  return (
    <div className="mainHeader">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div
            className={`headerListItem ${
              activePage === "hotel" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBed} />
            <a href="">
              <span>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Hotels
                </Link>
              </span>
            </a>
          </div>
          <div
            className={`headerListItem ${
              activePage === "restaurant" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBowlFood} />
            <span>
              <Link
                to="/restaurantHome"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Restaurants
              </Link>
            </span>
          </div>
          <div
            className={`headerListItem ${
              activePage === "travel" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faCar} />
            <span>
              <Link
                to="/vehicleHome"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Car rentals
              </Link>
            </span>
          </div>
          <div
            className={`headerListItem ${
              activePage === "attractions" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>
              <Link
                to="/aboutUs"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Attractions
              </Link>
            </span>
          </div>
          <div
            className={`headerListItem ${
              activePage === "packages" ? "active" : ""
            }`}
            onClick={() => window.location.replace("/eventhome")}
          >
            <FontAwesomeIcon icon={faTaxi} />
            <span>
              <Link
                to="/eventhome"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Packages
              </Link>
            </span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className="headerBottomWrapper">
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free TravelWise account
              </p>
              <button className="headerBtn">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Sign in / Register
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
