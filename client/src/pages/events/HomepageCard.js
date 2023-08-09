import React, { useState, useEffect } from "react"
import axios from "axios";
import { Row } from "react-bootstrap";
import './sportevents.css'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function HomepageCard() {

    const [item, setItem] = useState([
        {
            itemname: 'SPORT EVENTS',
            itemDesc: 'With this, you can get Transport, accommodation and event tickets as a package to participate in famous sports events around the world.',
            itemImage: 'https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg',
            itemlink: '/Sportpackag'
        },
        {
            itemname: 'CULTURAL EVENTS',
            itemDesc: 'With this, you can get Transport, accommodation and event tickets as a package to participate in famous sports events around the world.',
            itemImage: 'https://www.dxholidays.com/images/perahera.jpg',
            itemlink: '/cultpackag'
        },
        {
            itemname: 'ENTERTAINMENT EVENTS',
            itemDesc: 'With this, you can get Transport, accommodation and event tickets as a package to participate in famous sports events around the world.',
            itemImage: 'https://news.fintechnexus.com/wp-content/uploads/2022/03/Tomorrowland-1.jpeg',
            itemlink: '/enterpackag'
        }

    ]);


    return (
      <div>
        <Navbar />
        <Header activePage={"package"} />
        <div>
          <div class="container" style={{ marginTop: "50px" }}>
            <Row xs={1} md={1} className="g-3" id="by" class="rounded">
              {item.map((item, idx) => (
                // <div class="col-md-4">
                //     <div class="card">
                //         <img class="card-img-top" style={{ width: "100%", height: "200px" }} src={`${item.itemImage}`} alt="Card image" />
                //         <div class="card-body">
                //             <h5 class="card-title border-bottom pb-3">{idx + 1}. &nbsp;{item.itemname}</h5>
                //             <p class="card-text">{item.itemDesc}</p>
                //             <a href={item.itemlink} class="btn btn-primary float-right">View Events<i class="fas fa-angle-double-right"></i></a>
                //         </div>
                //     </div>
                // </div>

                <div
                  className="card cardaa text-center"
                  style={{ marginRight: "50px" }}
                >
                  <div className="overflow overflowaa">
                    <img
                      src={`${item.itemImage}`}
                      alt="sporting"
                      className="card-img-top card-img-topaa"
                    />
                  </div>
                  <div className="car-body car-bodyaa text-dark">
                    <h4 className="card-title card-titleaa">{item.itemname}</h4>
                    <p className="card-text text-secondary">{item.itemDesc}</p>

                    <a
                      href={item.itemlink}
                      className="btn btnhver btn-info"
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      View Events
                    </a>
                  </div>
                </div>
              ))}
            </Row>
          </div>
          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
}


