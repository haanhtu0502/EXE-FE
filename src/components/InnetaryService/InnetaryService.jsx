import {
  faHandsHolding,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./InnetaryService.scss";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { format } from "date-fns";
import MuiAlert from "@mui/material/Alert";
import { updateInnetary } from "../../feature/innetarySlice";
import { useDispatch } from "react-redux";
import { Snackbar } from "@mui/material";
import dayjs from "dayjs";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const InnetaryService = ({ setPlanInfo, planInfo, item, plannedService }) => {
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const dispatch = useDispatch();

  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });

  const handleCloseSnackbar = () => {
    setOpenSnackbar({ ...openSnackbar, open: false });
  };

  const { open, vertical, horizontal, feature } = openSnackbar;

  const handleSave = () => {
    setOpenSnackbar({ ...openSnackbar, open: true, feature: "lưu" });

    const DateTimeFormated = {
      date: format(date, "yyyy-MM-dd"),
      startTime: format(startTime, "HH:mm:ss"),
      endTime: format(endTime, "HH:mm:ss"),
    };

    const data = {
      itineraryId: planInfo.id,
      serviceId: item.id,
      date: DateTimeFormated.date,
      startTime: DateTimeFormated.startTime,
      endTime: DateTimeFormated.endTime,
    };

    fetch(`https://guidi.azurewebsites.net/api/Itinerary/Service`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        fetch(`https://guidi.azurewebsites.net/api/Itinerary/${planInfo.id}`)
          .then((res) => res.json())
          .then((response) => {
            setPlanInfo(response.result);
            let itenary = JSON.parse(localStorage.getItem("itenary"));
            itenary = { ...itenary };
            localStorage.setItem("itenary", JSON.stringify(itenary));
            const action = updateInnetary();
            dispatch(action);

            // setLoading(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    setOpenSnackbar({ ...openSnackbar, open: true, feature: "xóa" });
    fetch(
      `https://guidi.azurewebsites.net/api/Itinerary/${planInfo.id}/Service/${item.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        fetch(`https://guidi.azurewebsites.net/api/Itinerary/${planInfo.id}`)
          .then((res) => res.json())
          .then((response) => {
            setPlanInfo(response.result);
            let itenary = JSON.parse(localStorage.getItem("itenary"));
            itenary = { ...itenary, price: response.result.price };
            localStorage.setItem("itenary", JSON.stringify(itenary));
            const action = updateInnetary();
            dispatch(action);

            // setLoading(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="date-time-picker">
        <div className="date-time-picker-component">
          <h2>Ngày :</h2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dayjs(plannedService.date)}
              onChange={(value) => {
                setDate(value.$d);
              }}
            />
          </LocalizationProvider>
        </div>
        <div className="date-time-picker-component">
          <h2>Thời gian bắt đầu :</h2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              value={plannedService.startTime}
              onChange={(value) => {
                setStartTime(value.$d);
              }}
            />
          </LocalizationProvider>
        </div>
        <div className="date-time-picker-component">
          <h2>Thời gian kết thúc :</h2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              value={plannedService.endTime}
              onChange={(value) => {
                setEndTime(value.$d);
              }}
            />
          </LocalizationProvider>
        </div>

        <button onClick={handleSave} className="date-time-picker-button">
          Lưu
        </button>
      </div>

      <div className="service__container">
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
            <button onClick={handleDelete} className="service__add-button">
              Xóa
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
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
          Đã {feature} dịch vụ thành công
        </Alert>
      </Snackbar>
    </div>
  );
};

export default InnetaryService;
