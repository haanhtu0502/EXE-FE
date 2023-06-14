import React from "react";
import "./Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHolding,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import Empty from "../../assets/search-empty.png";

const Service = ({ result, setOpenSnackbar, openSnackbar }) => {
  const handleClickAdd = () => {
    setOpenSnackbar({ ...openSnackbar, open: true });
  };
  return (
    <div className="service__container">
      {result.length === 0 ? (
        <div className="search__result-empty">
          <img src={Empty} alt="" />
          <h1>Không tìm thấy kết quả nào</h1>
        </div>
      ) : (
        result.map((item) => (
          <div className="service__item">
            <div className="service__header">
              <FontAwesomeIcon
                icon={faHandsHolding}
                size="lg"
                className="service__header-icon"
              />
            </div>
            <div className="service__body">
              <div className="service__body-left">
                <div className="service__image">
                  <img
                    width="250px"
                    src={`https://drive.google.com/uc?export=view&id=${item.image}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="service__body-right">
                <div className="service__title">
                  <h2>{item.name}</h2>

                  <h6>
                    <FontAwesomeIcon icon={faLocationPin} /> {item.address}
                  </h6>
                </div>
                <div className="service__desc">{item.description}</div>
              </div>
            </div>
            <div className="service__price">
              <h4>
                {item.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </h4>
            </div>
            <div className="service__detail-button">
              <button onClick={handleClickAdd} className="service__add-button">
                Thêm
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Service;
