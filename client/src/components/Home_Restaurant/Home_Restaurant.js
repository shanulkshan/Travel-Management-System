import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

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

    const cardTitleStyle = {
      color: "#0F3057",
      fontWeight: "bold",
    };

    const cardTextStyle = {
      color: "#0A2540",
    };

    const linkStyle = {
      color: "#E46F44",
      textDecoration: "none",
      marginRight: "10px",
    };

    const deleteButtonStyle = {
      backgroundColor: "#E8AA9B",
      borderColor: "#E8AA9B",
    };

    const addButtonStyle = {
      color: "#fff",
      backgroundColor: "#1A385A",
      borderColor: "#769ABE",
    };

    return (
      <div>
        <Navbar />
        <div
          className="container"
          style={{
            justifyContent: "space-between",
            backgroundColor: "#F2F7FF",
          }}
        >
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col-lg-9-mt-2-mb-2">
              <h4 style={{ color: "#0A2540" }}>
                Restaurant List (ADMIN USE ONLY)
              </h4>
            </div>
            <div>
              <input
                className="form-control"
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handleSearchArea}
              ></input>
            </div>
          </div>
          <hr></hr>

          <div className="row" style={{}}>
            {filteredData.map((post, index) => (
              <div className="col-md-4 mb-2" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={cardTitleStyle}>
                      {post.Restaurant_Name}
                    </h5>
                    <p className="card-text" style={cardTextStyle}>
                      {post.Location}
                    </p>
                    <p className="card-text" style={cardTextStyle}>
                      {post.Opening_Hours}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link
                          to={`/post/${post._id}`}
                          className="btn btn-sm"
                          style={linkStyle}
                        >
                          View
                        </Link>
                        <Link
                          to={`/edit/${post._id}`}
                          className="btn btn-sm"
                          style={linkStyle}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-sm"
                          onClick={() => this.onDelete(post._id)}
                          style={deleteButtonStyle}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-4" style={{ justifyContent: "space-between" }}>
            <div className="col-md-12">
              <Link
                to="/addRestaurant"
                className="btn btn-lg active"
                role="button"
                aria-pressed="true"
                style={addButtonStyle}
              >
                Add new Restaurant
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
