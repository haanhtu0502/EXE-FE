import React, { useEffect, useState } from "react";
import "./PlanContent.scss";
import Flight from "../Flight/Flight";
import Hotel from "../Hotel/Hotel";
import TouristSpot from "../TouristSpot/TouristSpot";
import Service from "../Service/Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faHotel,
  faHandsHolding,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { Autocomplete, Box, TextField } from "@mui/material";
import { format } from "date-fns";

const PlanContent = () => {
  const [type, setType] = useState("flight");
  const [result, setResult] = useState([]);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const formik = useFormik({
    initialValues: {
      location: "Hà Nội",
      minPrice: "",
      maxPrice: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const filterNav = [
    {
      icon: faPlane,
      display: "Chuyến bay",
      type: "flight",
    },
    {
      icon: faHotel,
      display: "Khách sạn",
      type: "hotel",
    },
    {
      icon: faHandsHolding,
      display: "Dịch vụ",
      type: "service",
    },
    {
      icon: faBookOpen,
      display: "Du lịch",
      type: "tourist",
    },
  ];

  const location = ["HCM", "Hà Nội", "Đà Nẵng"];

  useEffect(() => {}, [type]);

  return (
    <div className="content__container">
      <div className="content__filter">
        {filterNav.map((item) => (
          <div
            onClick={() => {
              setType(item.type);
            }}
            className={`content__filter-item ${
              item.type === type ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={item.icon} />
            <h3 className="content__filter-item-text">{item.display}</h3>
          </div>
        ))}
      </div>
      <div className="content__flex">
        <div className="content__flex-left">
          <div className="content__search">
            <form action="" onSubmit={formik.handleSubmit}>
              <label className="content__search-label" htmlFor="location">
                Điểm đến:
              </label>
              <Autocomplete
                disablePortal
                id="location"
                name="location"
                options={location}
                sx={{ width: "100%" }}
                defaultValue={formik.values.location}
                onChange={(e, value) => {
                  formik.setFieldValue(
                    "location",
                    value !== null ? value : formik.initialValues.location
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    className="content__search-input-location"
                    {...params}
                  />
                )}
              />
              <label className="content__search-label" htmlFor="location">
                Ngày đi/ Ngày đến:
              </label>
              <div
                className={`travelplanner__container-form-inputcontrol-text `}
                style={{ width: "100%" }}
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</div>
              <div className="content__search-price">
                <label htmlFor="minPrice" className="content__search-label">
                  Giá thấp nhất:
                </label>
                <input
                  value={formik.values.minPrice}
                  onChange={formik.handleChange}
                  placeholder="(VNĐ)"
                  type="number"
                  name="minPrice"
                  className="content__search-label-price"
                />
              </div>
              <div className="content__search-price">
                <label htmlFor="maxPrice" className="content__search-label">
                  Giá cao nhất:
                </label>
                <input
                  value={formik.values.maxPrice}
                  onChange={formik.handleChange}
                  placeholder="(VNĐ)"
                  type="number"
                  name="maxPrice"
                  className="content__search-label-price"
                />
              </div>
              <button className="content__search-button" type="submit">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="content__price">
            <div className="content__price-text">
              <h3>Ngân sách: </h3>
              <p>5.000.000</p>
            </div>
            <div className="content__price-text">
              <h3>Đã tiêu: </h3>
              <p>2.000.000</p>
            </div>
            <div className="content__price-text">
              <h3>Còn lại: </h3>
              <p>3.000.000</p>
            </div>
          </div>
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
