import React from "react";
import "./TouristSpot.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faLocationPin,
  faStar,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Empty from "../../assets/search-empty.png";

const TouristSpot = ({ result, setOpenSnackbar, openSnackbar }) => {
  const handleClickAdd = () => {
    setOpenSnackbar({ ...openSnackbar, open: true });
  };
  return (
    <div className="tourist__container">
      {result.length === 0 ? (
        <div className="search__result-empty">
          <img src={Empty} alt="" />
          <h1>Không tìm thấy kết quả nào</h1>
        </div>
      ) : (
        result.map((item) => (
          <div className="tourist__item">
            <div className="tourist__header">
              <FontAwesomeIcon
                icon={faBookOpen}
                size="lg"
                className="tourist__header-icon"
              />
            </div>
            <div className="tourist__body">
              <div className="tourist__body-left">
                <div className="tourist__image">
                  <img
                    width="250px"
                    src={`https://drive.google.com/uc?export=view&id=${item.image}`}
                    alt=""
                  />
                </div>
                <div className="tourist__categories">
                  <h5>
                    <FontAwesomeIcon icon={faList} /> {item.preferenceName}
                  </h5>
                </div>
              </div>
              <div className="tourist__body-right">
                <div className="tourist__title">
                  <div className="tourist__title-info">
                    <h2>{item.name}</h2>
                    <h4>
                      {item.rating}{" "}
                      <FontAwesomeIcon
                        className="tourist__iconStar"
                        icon={faStar}
                      />
                    </h4>
                  </div>
                  <h6>
                    <FontAwesomeIcon icon={faLocationPin} /> {item.address}
                  </h6>
                </div>
                <div className="tourist__desc">{item.description}</div>
              </div>
            </div>
            <div className="tourist__price">
              <h4>
                {item.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </h4>
            </div>
            <div className="tourist__detail-button">
              <button onClick={handleClickAdd} className="tourist__add-button">
                Thêm
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TouristSpot;
