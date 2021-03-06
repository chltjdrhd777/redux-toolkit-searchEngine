import React from "react";
import { B } from "components/styled";
import { Hotel, HotelList, HotelHeading } from "components/styled/Home.styled";
import FeaturedHotelImg from "assets/images/hotel_astro_resort.jpg";
import GardenImg from "assets/images/hotel_the_enchanted_garden.jpg";
import ParadiseImg from "assets/images/hotel_the_paradise.jpg";

function Hotels() {
  return (
    <Hotel>
      <B.Container>
        <HotelList>
          <HotelHeading>
            <span className="heading">Explore</span>
            <span className="sub-heading">Our beautiful hotels</span>
          </HotelHeading>

          <B.Grid>
            <div className="grid-item featured-hotels">
              <img src={FeaturedHotelImg} alt="featured" />
              <h5 className="hotel-name">Astro Hotel</h5>
              <span className="hotel-price">From $200/night</span>
              <div className="hotel-rating">
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star-half rating"></i>
              </div>

              <B.Button className="gradient ">
                Book now
                <span className="dots">
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </B.Button>
            </div>

            <div className="grid-item">
              <img src={GardenImg} alt="garden" />
              <h5 className="hotel-name">Enchanted Garden</h5>
              <span className="hotel-price">From $300/night</span>
              <div className="hotel-rating">
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
              </div>

              <B.Button className="gradient">
                Book now
                <span className="dots">
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </B.Button>
            </div>

            <div className="grid-item">
              <img src={ParadiseImg} alt="paradise" />
              <h5 className="hotel-name">The Paradise</h5>
              <span className="hotel-price">From $350/night</span>
              <div className="hotel-rating">
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star rating"></i>
                <i className="fas fa-star-half rating"></i>
              </div>

              <B.Button className="gradient">
                Book now
                <span className="dots">
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </B.Button>
            </div>
          </B.Grid>
        </HotelList>
      </B.Container>
    </Hotel>
  );
}

export default Hotels;
