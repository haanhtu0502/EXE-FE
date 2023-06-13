import {
  faCircle,
  faCirclePlus,
  faPlane,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Flight.scss";
import Arrow from "../../assets/Arrow.png";
import { format } from "date-fns";
import Empty from "../../assets/search-empty.png";

const Flight = ({ result, setOpenSnackbar, openSnackbar }) => {
  const handleClickAdd = () => {
    setOpenSnackbar({ ...openSnackbar, open: true });
  };
  return (
    <div className="fligth__container">
      {result.length === 0 ? (
        <div className="search__result-empty">
          <img src={Empty} alt="" />
          <h1>Không tìm thấy kết quả nào</h1>
        </div>
      ) : (
        result.map((item) => (
          <div className="flight__item">
            <div className="flight__item-header">
              <FontAwesomeIcon icon={faPlane} />
              <h3 className="flight__item-header-date">
                {format(new Date(item.date), "dd/MM/yyyy")}
              </h3>
              <h3 className="flight__item-header-seat">
                {item.numberOfSeats} chỗ ngồi
              </h3>
            </div>
            <div className="flight__item-content">
              <div className="flight__item-content-brand">{item.brandName}</div>
              <div className="flight__item-content-departure">
                <h3 className="flight__item-content-departure-time">
                  {item.startTime.slice(0, -3)}
                </h3>
                <h3 className="flight__item-content-departure-location">
                  {item.destinationFromName}
                </h3>
              </div>
              <img className="flight__item-content-img" src={Arrow} alt="" />
              <div className="flight__item-content-departure">
                <h3 className="flight__item-content-departure-time">
                  {item.endTime.slice(0, -3)}
                </h3>
                <h3 className="flight__item-content-departure-location">
                  {item.destinationToName}
                </h3>
              </div>
              <h3 className="flight__item-content-price">
                {item.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </h3>
              <button
                onClick={handleClickAdd}
                className="flight__item-content-button"
              >
                Thêm
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Flight;
