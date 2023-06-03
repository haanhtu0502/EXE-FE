import React from "react";
import "./ModalPlanner.scss";
import InnetaryFlight from "../InnetaryFlight/InnetaryFlight";
import InnetaryHotel from "../InnetaryHotel/InnetaryHotel";
import Empty from "../../assets/search-empty.png";

const ModalPlanner = ({ handleClose }) => {
  return (
    <div className="innetay__container">
      <h1 className="innetary__name">Chuyến đi Hà Nội</h1>

      <h3 className="innetary__title">Chuyến bay</h3>
      <InnetaryFlight />

      <h3 className="innetary__title">Khách sạn</h3>
      <InnetaryHotel />

      <h3 className="innetary__title">Địa điểm du lịch</h3>
      <div className="search-empty">
        <img src={Empty} alt="" />
      </div>
      <h3 className="innetary__title">Dịch vụ</h3>
      <div className="search-empty">
        <img src={Empty} alt="" />
      </div>
      <div className="innetary__buttons">
        <button onClick={handleClose} className="innetary__button">
          Đóng
        </button>
        <button className="innetary__button">Thanh toán</button>
      </div>
    </div>
  );
};

export default ModalPlanner;