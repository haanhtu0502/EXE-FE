import React from "react";
import logo from "../../../assets/logo.png";

const Register = () => {
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
          <h1>Đăng kí</h1>
          <div>
            <input
              className="right_content-input"
              type="text"
              placeholder="Họ và tên"
            />
            <br />
            <input
              className="right_content-input"
              type="text"
              placeholder="Địa chỉ Email"
            />
            <br />
            <input
              className="right_content-input"
              type="text"
              placeholder="Số điện thoại"
            />
            <br />
            <input
              className="right_content-input"
              type="password"
              placeholder="Mật khẩu"
            />
            <br />
            <input
              className="right_content-input"
              type="password"
              placeholder="Xác nhận mật khẩu"
            />
            <br />
            <button className="right_content-login-button">ĐĂNG KÍ</button>
            <br />

            <div>
              <a href="/login" className="right_content-links">
                —————————————— Bạn đã có tài khoản ——————————————
              </a>
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

export default Register;
