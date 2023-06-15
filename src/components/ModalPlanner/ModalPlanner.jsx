import React from "react";
import "./ModalPlanner.scss";
import InnetaryFlight from "../InnetaryFlight/InnetaryFlight";
import InnetaryHotel from "../InnetaryHotel/InnetaryHotel";
import Empty from "../../assets/search-empty.png";
import { useNavigate } from "react-router";
import InnetaryService from "../InnetaryService/InnetaryService";
import InnetaryTouristSpot from "../InnetaryTouristSpot/InnetaryTouristSpot";

const ModalPlanner = ({ handleClose, planInfo, setPlanInfo }) => {
  const navigate = useNavigate();
  return (
    <div className="innetay__container">
      <h1 className="innetary__name">{planInfo.title}</h1>

      <h3 className="innetary__title">Chuyến bay</h3>
      {!planInfo.flight ? (
        <div className="search-empty">
          <img src={Empty} alt="" />
        </div>
      ) : (
        <InnetaryFlight
          setPlanInfo={setPlanInfo}
          planInfo={planInfo}
          item={planInfo.flight}
        />
      )}

      <h3 className="innetary__title">Khách sạn</h3>
      {!planInfo.hotel ? (
        <div className="search-empty">
          <img src={Empty} alt="" />
        </div>
      ) : (
        <InnetaryHotel
          setPlanInfo={setPlanInfo}
          planInfo={planInfo}
          item={planInfo.hotel}
        />
      )}

      <h3 className="innetary__title">Dịch vụ</h3>
      {planInfo.plannedServices.length === 0 ? (
        <div className="search-empty">
          <img src={Empty} alt="" />
        </div>
      ) : (
        planInfo.plannedServices.map((item) => (
          <InnetaryService
            setPlanInfo={setPlanInfo}
            planInfo={planInfo}
            item={item.service}
            plannedService={item}
          />
        ))
      )}

      <h3 className="innetary__title">Địa điểm du lịch</h3>
      {planInfo.plannedSpots.length === 0 ? (
        <div className="search-empty">
          <img src={Empty} alt="" />
        </div>
      ) : (
        planInfo.plannedSpots.map((item) => (
          <InnetaryTouristSpot
            setPlanInfo={setPlanInfo}
            planInfo={planInfo}
            item={item.spot}
            plannedSpot={item}
          />
        ))
      )}
      <div className="innetary__buttons">
        <button onClick={handleClose} className="innetary__button">
          Đóng
        </button>
        <button
          onClick={() => {
            navigate("/payment");
          }}
          className="innetary__button"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default ModalPlanner;
