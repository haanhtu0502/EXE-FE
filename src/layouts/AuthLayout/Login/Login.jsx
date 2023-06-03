<<<<<<< Updated upstream
import React from "react";
import { Link } from "react-router-dom";
=======
import React, { useState } from "react";
>>>>>>> Stashed changes
import "./Login.scss";
import logo from "../../../assets/logo.png";
import googleIcon from "../../../assets/Google.png";
import fbIcon from "../../../assets/Facebook.png";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "../../../firebase/firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../../feature/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const googleAuth = () => {
    try {
      signInWithPopup(auth, googleProvider).then((data) => {
        const {
          user: { providerData },
        } = data;
        const action = login(providerData[0]);
        dispatch(action);
        localStorage.setItem("user", JSON.stringify(providerData[0]));
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const facebookAuth = () => {
    signInWithPopup(auth, facebookProvider).then((data) => {
      const {
        user: { providerData },
      } = data;
      const action = login(providerData[0]);
      dispatch(action);
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      navigate("/");
    });
  };

  return (
    <div>
      <div className="login-content_container">
        <div className="left_content">
          <img className="left_content-logo" src={logo} alt="" />
          <p>
            Tìm kiếm niềm vui và khám phá những điều mới lạ mà bạn <br />
            chưa từng được trải nghiệm
          </p>
        </div>
        <div className="right_content">
          <h1>Đăng Nhập</h1>
          <div>
            <input
              className="right_content-input"
              type="text"
              placeholder="Địa chỉ Email"
            />
            <br />
            <input
              className="right_content-input"
              type="password"
              placeholder="Mật khẩu"
            />
            <br />
            <button className="right_content-login-button">ĐĂNG NHẬP</button>
            <br />
            <div className="right_content-account">
              <div>
                <input type="checkbox" name="rememberCheckbox" />
                <label
                  htmlFor="rememberCheckbox"
                  className="right_content-checkbox"
                >
                  Nhớ tài khoản
                </label>
              </div>
              <a href="#" className="right_content-links">
                Quên mật khẩu?
              </a>
            </div>
            <p className="right_content-custom-dash">
              ————————————————— Hoặc —————————————————
            </p>
            <div className="right_content-button">
              <div className="button-container">
                <button onClick={googleAuth}>
                  <img src={googleIcon} alt="" className="icon-img" />
                  Đăng nhập với Google
                </button>
                <button onClick={facebookAuth}>
                  <img src={fbIcon} alt="" className="icon-img" />
                  Đăng nhập với Facebook
                </button>
              </div>
            </div>
            <div>
              {/* <a href="/register" className="right_content-links"></a> */}
              <Link to="/register" className="right_content-links">
                —————————————— Tạo tài khoản mới ——————————————
              </Link>
              <br />
              <p className="right_content-text">
                Bằng cách đăng ký hoặc đăng nhập bạn đã hiểu và đồng ý với
                <br /> Điều khoản Sử Dụng và Chính Sách Bảo Mật cảu Guidi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
