import Featured from "../../components/hotelfeatured/hotelFeatured";
import FeaturedProperties from "../../components/hotelfeaturedProperties/hotelFeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/hotelheader/hotelHeader";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/hotelpropertyList/hotelPropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <br></br>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
