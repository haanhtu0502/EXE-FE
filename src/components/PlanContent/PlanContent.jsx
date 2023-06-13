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
import { useParams } from "react-router";

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

  const itenary = useSelector((state) => state.innetary.itenary);

  const {
    id,
    budget,
    destinationId,
    destinationName,
    title,
    endDate,
    startDate,
  } = itenary;

  const [dates, setDates] = useState([
    {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      key: "selection",
    },
  ]);

  const [planInfo, setPlanInfo] = useState(null);
  const [location, setLocation] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchItenaryInfo = () => {
      fetch(`https://guidi.azurewebsites.net/api/Itinerary/${id}`)
        .then((res) => res.json())
        .then((response) => {
          setPlanInfo(response.result);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    const fetchLocations = () => {
      fetch(`https://guidi.azurewebsites.net/api/Location`)
        .then((res) => res.json())
        .then((response) => {
          setLocation(response.result);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchLocations();
    fetchItenaryInfo();
  }, []);

  const flightFormik = useFormik({
    initialValues: {
      locationFrom: { name: "Tất cả", id: 0 },
      location: { name: destinationName, id: destinationId },
      brand: "Tất cả",
      minPrice: 0,
      maxPrice: budget,
      number: "",
    },
    onSubmit: (values) => {
      fetch(
        `https://guidi.azurewebsites.net/api/Flight?destinationtoid=${
          values.location.id
        }${
          values.locationFrom.name === "Tất cả"
            ? ""
            : "&destinationfromid=" + values.locationFrom.id
        }${values.brand === "Tất cả" ? "" : "&brandName=" + values.brand}${
          values.minPrice === "" ? "" : "&minPrice=" + values.minPrice
        }${values.maxPrice === "" ? "" : "&maxPrice=" + values.maxPrice}${
          values.number === "" ? "" : "&numberOfSeats=" + values.number
        }`
      )
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          if (response.errorMessage) {
            setResult([]);
            return;
          }
          setResult(response.result);
        })
        .catch((err) => console.log(err));
    },
  });

  const hotelFormik = useFormik({
    initialValues: {
      location: { name: destinationName, id: destinationId },
      rating: { name: "5 sao", value: 5 },
      roomType: { name: "1 giường đôi cực lớn", value: 1 },
      minPrice: 0,
      maxPrice: budget,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const serviceFormik = useFormik({
    initialValues: {
      location: { name: destinationName, id: destinationId },
      minPrice: 0,
      maxPrice: budget,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const touristFormik = useFormik({
    initialValues: {
      location: { name: destinationName, id: destinationId },
      preference: { name: "Tất cả", id: 0 },
      minPrice: 0,
      maxPrice: budget,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const fetchData = () => {
      switch (type) {
        case "flight":
          const fetchFlights = () => {
            fetch(
              `https://guidi.azurewebsites.net/api/Flight?destinationtoid=${
                flightFormik.values.location.id
              }${
                flightFormik.values.locationFrom.name === "Tất cả"
                  ? ""
                  : "&destinationfromid=" + flightFormik.values.locationFrom.id
              }${
                flightFormik.values.brand === "Tất cả"
                  ? ""
                  : "&brandName=" + flightFormik.values.brand
              }${
                flightFormik.values.minPrice === ""
                  ? ""
                  : "&minPrice=" + flightFormik.values.minPrice
              }${
                flightFormik.values.maxPrice === ""
                  ? ""
                  : "&maxPrice=" + flightFormik.values.maxPrice
              }${
                flightFormik.values.number === ""
                  ? ""
                  : "&numberOfSeats=" + flightFormik.values.number
              }`
            )
              .then((res) => res.json())
              .then((response) => {
                console.log(response);
                setResult(response.result);
              })
              .catch((err) => console.log(err));
          };
          fetchFlights();
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
        default:
          break;
      }
    };
    fetchData();
  }, [type]);

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
                loading={loading}
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
