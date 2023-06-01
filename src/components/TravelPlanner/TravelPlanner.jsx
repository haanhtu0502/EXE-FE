import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./TravelPlanner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HaNoi from "../../assets/HaNoi.png";
import DaNang from "../../assets/DaNang.png";
import PhuQuoc from "../../assets/PhuQuoc.png";
import HoiAn from "../../assets/HoiAn.png";
import {
  faCalendarDays,
  faLocation,
  faLocationPin,
  faMoneyBill,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { useFormik } from "formik";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router";

const TravelPlanner = () => {
  const [dates, setDates] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      location: "",
      dates: [
        {
          startDate: null,
          endDate: null,
          key: "selection",
        },
      ],
      name: "",
      number: "",
      budget: "",
    },
    onSubmit: (values) => {
      console.log(values);
      navigate("/planner/plan");
    },
  });

  const location = ["HCM", "Hà Nội", "Đà Nẵng"];

  const [openDate, setOpenDate] = useState(false);
  return (
    <>
      <div className="travelplanner__container">
        <h1 className="travelplanner__container-title">
          Lên kế hoạch cho chuyến đi của bạn
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="travelplanner__container-form"
        >
          <div className="travelplanner__container-form-inputcontrol">
            <FontAwesomeIcon
              icon={faPen}
              className="travelplanner__container-form-inputcontrol-icon"
            />
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Đặt tên cho chuyến đi của bạn"
              type="text"
              className="travelplanner__container-form-inputcontrol-input"
            />
          </div>
          <div className="travelplanner__container-form-inputcontrol">
            <FontAwesomeIcon
              icon={faLocationPin}
              className="travelplanner__container-form-inputcontrol-icon"
            />
            <Autocomplete
              disablePortal
              id="location"
              name="location"
              options={location}
              sx={{ width: "450px", outline: "none" }}
              defaultValue={formik.values.location}
              onChange={(e, value) => {
                formik.setFieldValue(
                  "location",
                  value !== null ? value : formik.initialValues.location
                );
              }}
              renderInput={(params) => (
                <TextField
                  className=""
                  {...params}
                  sx={{ border: "none" }}
                  placeholder="Nhập nơi bạn muốn đến"
                />
              )}
            />
          </div>
          <div className="travelplanner__container-form-inputcontrol date-range">
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
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</div>
            )}

            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => {
                  console.log(item);
                  formik.setFieldValue(
                    "dates",
                    item !== null ? item : formik.initialValues.location
                  );
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
          <div className="travelplanner__container-form-inputcontrol">
            <FontAwesomeIcon
              icon={faUser}
              className="travelplanner__container-form-inputcontrol-icon"
            />
            <input
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              placeholder="Số người cùng đi"
              type="number"
              className="travelplanner__container-form-inputcontrol-input"
            />
          </div>
          <div className="travelplanner__container-form-inputcontrol">
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="travelplanner__container-form-inputcontrol-icon"
            />
            <input
              name="budget"
              value={formik.values.budget}
              onChange={formik.handleChange}
              placeholder="Ngân sách của bạn (VNĐ)"
              type="number"
              className="travelplanner__container-form-inputcontrol-input"
            />
          </div>
          <button
            type="submit"
            className="travelplanner__container-form-button"
          >
            Tìm kiếm
          </button>
        </form>
      </div>

      <div className="travelplanner__experience">
        <h1 className="travelplanner__experience-title">Trải nghiệm hấp dẫn</h1>
        <div className="travelplanner__experience-contain">
          <div className="travelplanner__experience-item">
            <img src={HaNoi} alt="" />
            <h1>Hà Nội</h1>
          </div>
          <div className="travelplanner__experience-item">
            <img src={DaNang} alt="" />
            <h1>Đà Nẵng</h1>
          </div>
          <div className="travelplanner__experience-item">
            <img src={PhuQuoc} alt="" />
            <h1>Phú Quốc</h1>
          </div>
          <div className="travelplanner__experience-item">
            <img src={HoiAn} alt="" />
            <h1>Hội An</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelPlanner;
