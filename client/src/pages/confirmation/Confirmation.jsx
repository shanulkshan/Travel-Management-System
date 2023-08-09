import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./confirmation.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  const location = useLocation();
  const [vehicleData] = useState(location.state.data);
  const [dateRange] = useState(location.state.dateRange);
  const [startAndEndDate] = useState(location.state.startAndEndDate);
  const [reservation] = useState(location.state.reservation);

  const handleExport = () => {
    html2canvas(document.querySelector("#confirmationPreview")).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("download.pdf");
      }
    );
  };

  return (
    <div>
      <Navbar />
      <div id="confirmationPreview" className="confirmationPreview">
        <h1>Reservation Complete.</h1>
        <hr className="breakLine" />
        <h6>Vehicle Name: {vehicleData.displayVehicle.name}</h6>
        <h6>Vehicle Model: {vehicleData.displayVehicle.model}</h6>
        <h6>Vehicle Number: {vehicleData.displayVehicle.number}</h6>
        <h6>Vehicle Type: {vehicleData.displayVehicle.type}</h6>
        <h6>Vehicle Country: {vehicleData.displayVehicle.location}</h6>
        <h6>Vehicle City: {vehicleData.displayVehicle.city}</h6>
        {startAndEndDate[0].startDate && startAndEndDate[0].endDate && (
          <h6>{`Reservation Date: ${startAndEndDate[0].startDate
            .toISOString()
            .slice(0, 10)} - ${startAndEndDate[0].endDate
            .toISOString()
            .slice(0, 10)}`}</h6>
        )}
        <hr className="breakLine" />
        <h3>
          Total Price: {vehicleData.displayVehicle.price * dateRange.length}
        </h3>
        {/* <h4>
        * Photos:{" "}
        <span>
          <img src={vehicleData.displayVehicle.photos[0]} alt="" />
        </span>
      </h4> */}
      </div>
      <button className="exportbbtn" onClick={handleExport}>
        Export as a pdf
      </button>
      <button className="backbtn">
        <Link
          to="/"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Back to Home
        </Link>
      </button>
    </div>
  );
};
