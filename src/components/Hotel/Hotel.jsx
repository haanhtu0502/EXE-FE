import {
  faHotel,
  faLocationPin,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Hotel.scss";

const Hotel = ({ result, setOpenSnackbar, openSnackbar }) => {
  const handleClickAdd = () => {
    setOpenSnackbar({ ...openSnackbar, open: true });
  };
  return (
    <div className="hotel__container">
      <div className="hotel__item">
        <div className="hotel__item-header">
          <FontAwesomeIcon icon={faHotel} />
        </div>
        <div className="hotel__item-content">
          <img
            className="hotel__item-content-img"
            src="https://cf.bstatic.com/xdata/images/hotel/square200/388870170.webp?k=802120b5dadf788858e0e40abead6f03673d79b46329b84a1645fe1971613a44&o="
            alt=""
          />
          <div className="hotel__item-content-info">
            <div className="hotel__item-content-info-header">
              <h3 className="hotel__item-content-info-header-name">
                Riu Plaza Espana
              </h3>
              <div className="hotel__item-content-info-header-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="hotel__item-content-info-location">
              <FontAwesomeIcon icon={faLocationPin} />
              <h6 className="hotel__item-content-info-location-address">
                Khách sạn ở Hà Nội
              </h6>
            </div>
            <p className="hotel__item-content-info-desc">
              Nằm ở trung tâm thành phố Hà Nội, Riu Plaza España có phòng nghỉ
              gắn máy điều hòa, nhà hàng, WiFi miễn phí và quầy bar. Khách sạn 4
              sao này cung cấp dịch vụ phòng và dịch vụ trợ giúp đặc biệt
            </p>

            <div className="hotel__item-content-info-bottom">
              <div className="hotel__item-content-info-bottom-room">
                <h3 className="hotel__item-content-info-bottom-room-name">
                  Phòng cổ điển có giường cỡ King
                </h3>
                <h3 className="hotel__item-content-info-bottom-room-type">
                  1 giường đôi cực lớn
                </h3>
              </div>
              <div className="hotel__item-content-info-bottom-feature">
                <h3 className="hotel__item-content-info-bottom-feature-price">
                  1.000.000 VNĐ
                </h3>
                <button
                  onClick={handleClickAdd}
                  className="hotel__item-content-info-bottom-feature-button"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hotel__item">
        <div className="hotel__item-header">
          <FontAwesomeIcon icon={faHotel} />
        </div>
        <div className="hotel__item-content">
          <img
            className="hotel__item-content-img"
            src="https://cf.bstatic.com/xdata/images/hotel/square200/388870170.webp?k=802120b5dadf788858e0e40abead6f03673d79b46329b84a1645fe1971613a44&o="
            alt=""
          />
          <div className="hotel__item-content-info">
            <div className="hotel__item-content-info-header">
              <h3 className="hotel__item-content-info-header-name">
                Riu Plaza Espana
              </h3>
              <div className="hotel__item-content-info-header-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="hotel__item-content-info-location">
              <FontAwesomeIcon icon={faLocationPin} />
              <h6 className="hotel__item-content-info-location-address">
                Khách sạn ở Hà Nội
              </h6>
            </div>
            <p className="hotel__item-content-info-desc">
              Nằm ở trung tâm thành phố Hà Nội, Riu Plaza España có phòng nghỉ
              gắn máy điều hòa, nhà hàng, WiFi miễn phí và quầy bar. Khách sạn 4
              sao này cung cấp dịch vụ phòng và dịch vụ trợ giúp đặc biệt
            </p>

            <div className="hotel__item-content-info-bottom">
              <div className="hotel__item-content-info-bottom-room">
                <h3 className="hotel__item-content-info-bottom-room-name">
                  Phòng cổ điển có giường cỡ King
                </h3>
                <h3 className="hotel__item-content-info-bottom-room-type">
                  1 giường đôi cực lớn
                </h3>
              </div>
              <div className="hotel__item-content-info-bottom-feature">
                <h3 className="hotel__item-content-info-bottom-feature-price">
                  1.000.000 VNĐ
                </h3>
                <button
                  onClick={handleClickAdd}
                  className="hotel__item-content-info-bottom-feature-button"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
