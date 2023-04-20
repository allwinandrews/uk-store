import React from "react";
import "./FeaturedItem.css"

export default function FeaturedItem(props) {
  return (
    <div>
      <div className="featured__item">
        <div
          className="featured__item__pic set-bg"
          style={{
            backgroundImage:
              "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          }}
        >
          <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />

          <ul className="featured__item__pic__hover">
            <li>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="#">Crab Pool Security</a>
          </h6>
          <h5>$30.00</h5>
        </div>
      </div>
    </div>
  );
}
