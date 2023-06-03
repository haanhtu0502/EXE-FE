import {
  faCalendarDays,
  faHotel,
  faLocationPin,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "./InnetaryHotel.scss";

const InnetaryHotel = () => {
  const [dates, setDates] = useState([
    {
      startDate: null,
      endDate: "15/06/2023",
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div className="innetary__hotel-container">
      <div className="travelplanner__container-form-inputcontrol innetary__inputcontrol date-range">
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="travelplanner__container-form-inputcontrol-icon"
        />
        {dates[0].startDate === null ? (
          <div
            onClick={() => setOpenDate(!openDate)}
            className={`travelplanner__container-form-inputcontrol-text ${
              openDate ? "blue-outline" : ""
            }`}
            style={{ color: "#aeaeae" }}
          >
            Ngày đi / Ngày đến
          </div>
        ) : (
          <div
            onClick={() => setOpenDate(!openDate)}
            className={`travelplanner__container-form-inputcontrol-text ${
              openDate ? "blue-outline" : ""
            }`}
          >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
            dates[0].endDate,
            "dd/MM/yyyy"
          )}`}</div>
        )}

        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => {
              setDates([item.selection]);
              setOpenDate(!openDate);
            }}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div style={{ marginBottom: 0 }} className="hotel__item">
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
                <button className="hotel__item-content-info-bottom-feature-button">
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnetaryHotel;
