import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import res1 from "../../img/restaurant/res1.jpg";
import res2 from "../../img/restaurant/res2.jpg";
import res3 from "../../img/restaurant/res3.jpg";
import res4 from "../../img/restaurant/res4.jpg";
import res5 from "../../img/restaurant/res5.jpg";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: [], // initial state for restaurants array
      searchQuery: "", // initial state for search query
    };
  }

  componentDidMount() {
    this.retrievePosts(); // call retrievePosts() function to fetch data
  }

  retrievePosts() {
    axios.get("/api/restaurant").then((res) => {
      console.log("res");
      console.log(res);
      if (res.status === 200) {
        this.setState({
          restaurant: res.data, // set the retrieved data to restaurant state property
        });
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/api/restaurant/${id}`).then((res) => {
      alert("Deleted Successfully !!");
      this.retrievePosts(); // call retrievePosts() function to refresh the data
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.Restaurant_Name.toLowerCase().includes(searchKey) ||
        post.Location.toLowerCase().includes(searchKey) ||
        post.Opening_Hours.toLowerCase().includes(searchKey)
    );

    return result;
  }

  handleSearchArea = (event) => {
    const searchKey = event.currentTarget.value.toLowerCase();
    const { restaurant } = this.state; // get the current state of restaurant
    const filteredData = this.filterData(restaurant, searchKey);
    this.setState({ searchQuery: searchKey, restaurant: filteredData });
  };

  render() {
    const { restaurant, searchQuery } = this.state;

    const filteredData = this.filterData(restaurant, searchQuery);

    const cardStyle = {
      border: "none",
      borderRadius: "10px",
      backgroundColor: "#F7F7F7",
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
      transition: "all 0.2s",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    };

    const cardTitleStyle = {
      fontWeight: "bold",
      fontSize: "1.2rem",
      color: "#1A385A",
    };

    const cardTextStyle = {
      fontSize: "0.9rem",
      color: "#5F5F5F",
    };

    const linkStyle = {
      backgroundColor: "#7ab3b8",
      color: "white",
      fontWeight: "bold",
      borderRadius: "5px",
      padding: "5px 10px",
      textDecoration: "none",
      transition: "all 0.2s",
    };

    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={res1} alt="" className="card-img-top pListImg" />
              <div className="card-body pListTitles">
                <h5 className="card-title">Latin Restaurants</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={res2} alt="" className="card-img-top pListImg" />
              <div className="card-body pListTitles">
                <h5 className="card-title">Engligh Restaurants</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={res3} alt="" className="card-img-top pListImg" />
              <div className="card-body pListTitles">
                <h5 className="card-title">Srilankan Restaurants</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container" margin="auto">
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control py-2 border-right-0 border"
                  placeholder="Search restaurants"
                  aria-label="Search"
                  aria-describedby="search-label"
                  name="searchQuery"
                  onChange={this.handleSearchArea}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary border-left-0 border"
                    type="button"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: "100%", margin: 0, padding: 0 }}>
            <hr />
          </div>

          <div className="container my-4">
            <div className="row">
              {filteredData.map((post, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card" style={cardStyle}>
                    <div className="card-body">
                      <h5 className="card-title" style={cardTitleStyle}>
                        {post.Restaurant_Name}
                      </h5>
                      <p className="card-text mb-2" style={cardTextStyle}>
                        {post.Location}
                      </p>
                      <p className="card-text mb-2" style={cardTextStyle}>
                        {post.Opening_Hours}
                      </p>
                    </div>
                    <div className="card-footer">
                      <Link to={`/post/${post._id}`} style={linkStyle}>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
