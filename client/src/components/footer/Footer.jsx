import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr />
        <div class="row">
          <div class="column">
            <h5>About</h5>
            <p class="text-justify">
              TravelWise is a one-stop-shop for all your travel needs. Our
              user-friendly platform allows you to conveniently browse and book
              flights, accommodations, tours, transportation, and travel
              insurance. We also provide a wealth of information and resources
              to help you plan your trip, along with 24/7 customer support.
            </p>
          </div>
          <div class="column">
            <div className="fLists">
              <ul className="fList">
                <li className="fListItem">
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Countries
                  </Link>
                </li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
              </ul>
              <ul className="fList">
                <li className="fListItem">
                  <Link
                    to="/aboutUs"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    About Us
                  </Link>
                </li>
                <li className="fListItem">Partner Help</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Safety Resource Center</li>
                <li className="fListItem">Terms & conditions</li>
              </ul>
              <ul className="fList">
                <li className="fListItem">
                  <Link
                    to="/changeHotel"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Hotel
                  </Link>
                </li>
                <li className="fListItem">
                  <Link
                    to="/homeRestaurant"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Restaurants
                  </Link>
                </li>
                <li className="fListItem">
                  <Link
                    to="/changeVehicle"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Car Rental
                  </Link>
                </li>
                <li className="fListItem">
                  <Link
                    to="/eventadd"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Packages
                  </Link>
                </li>
                <li className="fListItem">
                  <Link
                    to="/admin-event"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Edit Packages
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
