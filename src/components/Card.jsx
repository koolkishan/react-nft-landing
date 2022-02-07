import React from "react";
import superEth from "../assets/supereth.png";
export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series}</span>
          <span className="card-top">Top bid</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            <img src={superEth} alt="super eth" />
            <h4>{price} ETH</h4>
          </div>
        </div>
        <div className="card-sub-details">
          <span>#{tag}</span>
          <span>{time} day left</span>
        </div>
      </div>
    </div>
  );
}
