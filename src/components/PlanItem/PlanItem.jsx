import React, { useState } from "react";
import "./PlanItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faWallet,
  faClipboard,
  faPenToSquare,
  faTrash,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import dayjs from "dayjs";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PlanItem = ({ plan, setPlans, userId }) => {
  const DatePlanned = {
    startDate: format(dayjs(plan.startDate).$d, "dd/MM/yyyy"),
    endDate: format(dayjs(plan.endDate).$d, "dd/MM/yyyy"),
  };

  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });

  const handleCloseSnackbar = () => {
    setOpenSnackbar({ ...openSnackbar, open: false });
  };

  const { open, vertical, horizontal, feature } = openSnackbar;

  const handleDelete = () => {
    fetch(`https://guidi.azurewebsites.net/api/Itinerary/${plan.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        fetch(`https://guidi.azurewebsites.net/api/Itinerary/User/${userId}`)
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            setPlans([...response.result]);
            setOpenSnackbar({ ...openSnackbar, open: true, feature: "xóa" });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="planItem__container">
      <div className="planItem__header">
        <FontAwesomeIcon
          icon={faClipboard}
          size="lg"
          className="planItem__header-icon"
        />
      </div>
      <div className="planItem__content">
        <h1>Tên chuyến đi: {plan.title}</h1>
        <h3>
          <FontAwesomeIcon
            icon={faLocationDot}
            size="md"
            className="planItem__content-icon"
          />{" "}
          Điểm đến: {plan.destinationName}
        </h3>
        <div className="planItem__content-date">
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="md"
            className="planItem__content-icon"
          />{" "}
          {DatePlanned.startDate} - {DatePlanned.endDate}
        </div>
        <div className="planItem__content-budget">
          <p>
            <FontAwesomeIcon
              icon={faWallet}
              size="md"
              className="planItem__content-icon"
            />{" "}
            Ngân sách:{" "}
            {plan.budget.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>
        <div className="planItem__content-price">
          <p>
            <FontAwesomeIcon
              icon={faMoneyBillAlt}
              size="md"
              className="planItem__content-icon"
            />{" "}
            Sô tiền phải trả cho chuyến du lịch này:{" "}
            {plan.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>
      </div>
      <div className="btn-wrapper">
        <button onClick={handleDelete} className="btn btn-delete">
          <FontAwesomeIcon
            icon={faTrash}
            size="lg"
            className="planItem__btn-icon"
          />{" "}
          Xóa
        </button>
        <button className="btn btn-edit">
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="lg"
            className="planItem__btn-icon"
          />
          Chỉnh Sửa
        </button>
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
          Đã {feature} lịch trình thành công
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PlanItem;
