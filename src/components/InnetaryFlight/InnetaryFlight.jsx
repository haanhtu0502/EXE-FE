import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import Arrow from "../../assets/Arrow.png";
import "./InnetaryFlight.scss";

const InnetaryFlight = () => {
  return (
    <div style={{ marginBottom: 0 }} className="flight__item">
      <div className="flight__item-header">
        <FontAwesomeIcon icon={faPlane} />
        <h3 className="flight__item-header-date">25/06/2023</h3>
        <h3 className="flight__item-header-seat">4 người</h3>
      </div>
      <div className="flight__item-content">
        <div className="flight__item-content-brand">VietJet Aviation</div>
        <div className="flight__item-content-departure">
          <h3 className="flight__item-content-departure-time">05:30</h3>
          <h3 className="flight__item-content-departure-location">TP.HCM</h3>
        </div>
        <img className="flight__item-content-img" src={Arrow} alt="" />
        <div className="flight__item-content-departure">
          <h3 className="flight__item-content-departure-time">07:40</h3>
          <h3 className="flight__item-content-departure-location">Hà Nội </h3>
        </div>
        <h3 className="flight__item-content-price">2.000.000</h3>
        <button className="flight__item-content-button">Xóa</button>
      </div>
    </div>
  );
};

export default InnetaryFlight;