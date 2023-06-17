import React from "react";
import "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import profileImg from "../../assets/proflieImg.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userInfo = useSelector((state) => state.user.user);

  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return (
    <div className="profile__container">
      <Card sx={{ maxWidth: 500 }} className="profile_cardContent">
        <CardMedia
          sx={{
            height: 200,
            width: 200,
            marginLeft: 18,
            borderRadius: 50,
            marginTop: 5,
          }}
          image={profileImg}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            THÔNG TIN LIÊN HỆ
          </Typography>
          <Typography variant="h4" className="profile__text">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="lg"
              className="profile__text-icon"
            />
            <span className="profile__text-content">Nguyen Van A</span>
          </Typography>
          <Typography variant="h4" className="profile__text">
            <FontAwesomeIcon
              icon={faPhone}
              size="lg"
              className="profile__text-icon"
            />
            <span className="profile__text-content">0987654321</span>
          </Typography>
          <Typography variant="h4" className="profile__text">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="profile__text-icon"
            />
            <span className="profile__text-content">nguyenvana@gmail.com</span>
          </Typography>
          <Typography variant="h4" className="profile__text">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="lg"
              className="profile__text-icon"
            />
            <span className="profile__text-content">
              Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ
              Đức, TP.HCM.
            </span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            variant="outlined"
            className="profile__buttonEdit"
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Profile;
