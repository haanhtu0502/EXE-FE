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
import {
  Autocomplete,
  Box,
  Fade,
  Modal,
  Snackbar,
  TextField,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import ModalPlanner from "../ModalPlanner/ModalPlanner";
import PricePieChart from "../PricePieChart/PricePieChart";
import SearchFlight from "../SearchFlight/SearchFlight";
import SearchHotel from "../SearchHotel/SearchHotel";
import SearchService from "../SearchService/SearchService";
import SearchTourist from "../SearchTourist/SearchTourist";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PlanContent = () => {
  const [type, setType] = useState("flight");
  const [result, setResult] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal } = openSnackbar;

  const handleCloseSnackbar = () => {
    setOpenSnackbar({ ...openSnackbar, open: false });
  };

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const flightFormik = useFormik({
    initialValues: {
      location: "Hà Nội",
      brand: { name: "VietJet Aviation", id: 1 },
      dates: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
      minPrice: "",
      maxPrice: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const hotelFormik = useFormik({
    initialValues: {
      location: "Hà Nội",
      rating: { name: "5 sao", value: 5 },
      roomType: { name: "1 giường đôi cực lớn", value: 1 },
      minPrice: "",
      maxPrice: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const serviceFormik = useFormik({
    initialValues: {
      location: "Hà Nội",
      minPrice: "",
      maxPrice: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const touristFormik = useFormik({
    initialValues: {
      location: "Hà Nội",
      preference: { name: "Thiên nhiên", value: 1 },
      minPrice: "",
      maxPrice: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const fetchData = () => {
      switch (type) {
        case "flight":
          console.log(type);
          break;
        case "hotel":
          console.log(type);
          break;
        case "service":
          console.log(type);
          break;
        case "tourist":
          console.log(type);
          break;
      }
    };
    fetchData();
  }, [type, flightFormik.values]);

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
            {type === "flight" ? (
              <SearchFlight
                formik={flightFormik}
                location={location}
                dates={dates}
                setDates={setDates}
              />
            ) : (
              <></>
            )}
            {type === "hotel" ? (
              <SearchHotel formik={hotelFormik} location={location} />
            ) : (
              <></>
            )}
            {type === "service" ? (
              <SearchService formik={serviceFormik} location={location} />
            ) : (
              <></>
            )}
            {type === "tourist" ? (
              <SearchTourist formik={touristFormik} location={location} />
            ) : (
              <></>
            )}
          </div>
          <PricePieChart />
          {/* <div className="content__price">
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
          </div> */}
          <button onClick={handleOpenModal} className="content__button">
            Chuyến đi của bạn
          </button>
        </div>
        <div className="content__flex-right">
          {type === "flight" ? (
            <Flight
              result={result}
              openSnackbar={openSnackbar}
              setOpenSnackbar={setOpenSnackbar}
            />
          ) : (
            <></>
          )}
          {type === "hotel" ? (
            <Hotel
              result={result}
              openSnackbar={openSnackbar}
              setOpenSnackbar={setOpenSnackbar}
            />
          ) : (
            <></>
          )}
          {type === "tourist" ? (
            <TouristSpot
              result={result}
              openSnackbar={openSnackbar}
              setOpenSnackbar={setOpenSnackbar}
            />
          ) : (
            <></>
          )}
          {type === "service" ? (
            <Service
              result={result}
              openSnackbar={openSnackbar}
              setOpenSnackbar={setOpenSnackbar}
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={openModal}
        onClose={handleCloseModal}
      >
        <ModalPlanner handleClose={handleCloseModal} />
      </Modal>

      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={1000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{
            width: "100%",
            fontSize: "15px",
            alignItem: "center",
          }}
        >
          Đã thêm vào chuyến đi của bạn
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PlanContent;
