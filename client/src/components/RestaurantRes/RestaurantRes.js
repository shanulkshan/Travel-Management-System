import React, { useState } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import jsPDF from "jspdf";

export default function ReservationForm({ restaurantId }) {
  const generatePdfReport = () => {
    const doc = new jsPDF();

    const img = new Image();
    img.src = "../../img/restaurant/res1.jpeg";

    img.onload = function () {
      // Add image to the pdf report
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const imgData = canvas.toDataURL("image/jpeg");

      doc.addImage(imgData, "JPEG", 20, 70, 100, 75);

      // Save the pdf report
      doc.save("reservation_report.pdf");
    };

    // Define styling
    const boldFont = "Helvetica-Bold";
    const regularFont = "Helvetica";
    const textColor = "#333";
    const titleFontSize = 24;
    const subtitleFontSize = 12;
    const margin = 20;

    // Add background color
    doc.setFillColor(255, 255, 204);
    doc.rect(
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight(),
      "F"
    );

    // Add restaurant name and logo to the pdf report
    doc.addImage(
      "../../img/restaurant/res1.jpeg",
      "JPEG",
      margin,
      margin,
      50,
      50
    );
    doc.setFont(boldFont);
    doc.setTextColor(textColor);
    doc.setFontSize(titleFontSize);
    doc.text("Restaurant Reservation", margin + 60, margin + 20, {
      align: "center",
    });

    // Add reservation details to the pdf report
    doc.setFont(regularFont);
    doc.setFontSize(subtitleFontSize);
    doc.text(`Reservation Name: ${reservationData.name}`, margin, margin + 70);
    doc.text(`Email: ${reservationData.email}`, margin, margin + 80);
    doc.text(`Date: ${reservationData.date}`, margin, margin + 90);
    doc.text(`Time: ${reservationData.time}`, margin, margin + 100);

    if (reservationData.message) {
      doc.text(`Message: ${reservationData.message}`, margin, margin + 110);
    }

    // Save the pdf report
    doc.save("reservation_report.pdf");
  };

  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post(
        `/restaurant/${restaurantId}/reservation`,
        reservationData
      );
      setSubmitting(false);
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitting(false);
      setSubmitError(error.response.data.error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Reservation Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={reservationData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={reservationData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={reservationData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    name="time"
                    value={reservationData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={reservationData.message}
                  onChange={handleInputChange}
                />
              </div>
              {submitError && (
                <div className="alert alert-danger" role="alert">
                  {submitError}
                </div>
              )}
              {submitSuccess ? (
                <div className="alert alert-success" role="alert">
                  Reservation submitted successfully.
                </div>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-3"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>
                        <span
                          className="spinner-border spinner-border-sm mr-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Submitting...
                      </span>
                    ) : (
                      "Make Reservation"
                    )}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-block"
                    disabled={submitting}
                    onClick={generatePdfReport}
                  >
                    {submitting ? (
                      <span>
                        <span
                          className="spinner-border spinner-border-sm mr-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Downloading Report...
                      </span>
                    ) : (
                      <span>
                        Download Reservation Report (PDF){" "}
                        <i className="fas fa-download"></i>
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
