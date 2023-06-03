import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import logo from "../../../assets/logo.png";
import googleIcon from "../../../assets/Google.png";
import fbIcon from "../../../assets/Facebook.png";

const Login = () => {
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
                <button>
                  <img src={googleIcon} alt="" className="icon-img" />
                  Đăng nhập với Google
                </button>
                <button>
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
