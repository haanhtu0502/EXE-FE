import React, { useEffect, useState } from "react";
import "./PlanContent.scss";
import Flight from "../Flight/Flight";
import Hotel from "../Hotel/Hotel";
import TouristSpot from "../TouristSpot/TouristSpot";
import Service from "../Service/Service";

const PlanContent = () => {
  const [type, setType] = useState("flight");
  const [result, setResult] = useState([]);

  useEffect(() => {}, [type]);

  return (
    <div className="content__container">
      <div className="content__filter">filter</div>
      <div className="content__flex">
        <div className="content__flex-left">
          <div className="content__search">search</div>
          <div className="content__price">Price</div>
          <button className="content__button">Chuyến đi của bạn</button>
        </div>
        <div className="content__flex-right">
          {type === "flight" ? <Flight result={result} /> : <></>}
          {type === "hotel" ? <Hotel result={result} /> : <></>}
          {type === "tourist" ? <TouristSpot result={result} /> : <></>}
          {type === "service" ? <Service result={result} /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default PlanContent;
