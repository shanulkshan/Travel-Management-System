import { Link, useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item, dateRange, startAndEndDate }) => {
  const navigate = useNavigate();

  const handleSeeAvailabilityClick = () => {
    {
      navigate(`/vehicle/${item._id}`, {
        state: { dateRange, startAndEndDate },
      });
    }
  };

  console.log(item.photos[0]);

  return (
    <div className="searchItem">
      <img src={`../${item.photos[0]}`} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siTaxiOp">Free airport ride</span>
        <span className="siSubtitle">Air conditioning</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Rating : .</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button
            className="siCheckButton"
            onClick={handleSeeAvailabilityClick}
          >
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
