import "./aboutUs.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" activePage="travel" />
      <div className="homeContainer">
        <div class="about-section">
          <h1>About Us Page</h1>
          <p>
            Welcome to TravelWise, your one-stop destination for all your travel
            needs! Our mission is to provide exceptional travel services to
            tourists all around the world, making their journeys unforgettable
            and hassle-free.
          </p>
          <p>
            We offer a comprehensive range of services, including flights,
            accommodation, tours, transportation, and travel insurance, all of
            which can be customized to suit your unique preferences and budget.
            Our experienced team of travel experts is always on hand to help you
            plan and book your dream vacation, whether it's a romantic getaway,
            a family adventure, or a solo trip of a lifetime.
          </p>
          <p>
            At TravelWise, we are committed to providing the highest level of
            customer service and satisfaction. We work tirelessly to ensure that
            every aspect of your travel experience is seamless, from the moment
            you book your trip to the moment you return home. So why wait? Start
            planning your next adventure with TravelWise today!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;