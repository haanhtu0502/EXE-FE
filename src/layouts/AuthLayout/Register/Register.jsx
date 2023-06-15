import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useFormik } from "formik";
import "./Register.scss";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Mật khẩu phải có ít nhất 8 kí tự")
    .max(50, "Mật khẩu quá dài")
    .required("Vui lòng không để trống"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Số điện thoại không hợp lệ"
    )
    .min(10, "Số điện thoại phải đủ 10 số")
    .max(10, "Số điện thoại phải đủ 10 số")
    .required("Vui lòng không để trống"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng không để trống"),
  address: Yup.string()
    .min(5, "Địa chỉ quá ngắn")
    .required("Vui lòng không để trống"),
  username: Yup.string().required("Vui lòng không để trống"),
  fullname: Yup.string()
    .min(5, "Tên quá ngắn")
    .required("Vui lòng không để trống"),
  confirmPassword: Yup.string()
    .required("Vui lòng không để trống")
    .oneOf([Yup.ref("password"), null], "Mật khẩu xác minh sai"),
});

const Register = () => {
  const [emailExisted, setEmailExisted] = useState(false);

  const naviagate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      fullname: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // if (values.confirmPassword !== values.password) {
      //   return;
      // }
      console.log(values);
      setEmailExisted(false);
      const data = {
        Username: values.username,
        Password: values.password,
        ConfirmPassword: values.confirmPassword,
        FullName: values.fullname,
        Email: values.email,
        Phone: values.phone,
        Address: values.address,
      };
      //?Username=${values.username}&Password=${values.password}&ConfirmPassword=${values.confirmPassword}&FullName=${values.fullname}&Email=${values.email}&Phone=${values.phone}&Address=${values.address}
      fetch(`https://guidi.azurewebsites.net/api/User/Register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          if (response.errorMessage) {
            setEmailExisted(true);
            return;
          }
          if (response.message) {
            naviagate("/login");
            return;
          }
        })
        .catch((error) => console.error(error));
    },
  });
  return (
    <div>
      <div className="login-content_container">
        <div className="left_content">
          <Link to="/">
            <img className="left_content-logo" src={logo} alt="" />
          </Link>
          <p>
            Tìm kiếm niềm vui và khám phá những điều mới lạ mà bạn <br />
            chưa từng được trải nghiệm
          </p>
        </div>
        <div className="right_content">
          <h1>Đăng kí</h1>
          {emailExisted ? (
            <p style={{ textAlign: "center" }} className="auth__error">
              Email này đã được đăng kí
            </p>
          ) : (
            <></>
          )}
          <div>
            <form onSubmit={formik.handleSubmit} action="">
              <input
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="right_content-input"
                type="text"
                placeholder="Họ và tên"
              />
              {formik.errors.fullname && formik.touched.fullname ? (
                <p className="auth__error">{formik.errors.fullname}</p>
              ) : (
                <br />
              )}
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="right_content-input"
                type="text"
                placeholder="Email"
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="auth__error">{formik.errors.email}</p>
              ) : (
                <br />
              )}

              <input
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="right_content-input"
                type="text"
                placeholder="Số điện thoại"
              />
              {formik.errors.phone && formik.touched.phone ? (
                <p className="auth__error">{formik.errors.phone}</p>
              ) : (
                <br />
              )}
              <input
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="right_content-input"
                type="text"
                placeholder="Địa chỉ"
              />
              {formik.errors.address && formik.touched.address ? (
                <p className="auth__error">{formik.errors.address}</p>
              ) : (
                <br />
              )}

              <input
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="right_content-input"
                type="text"
                placeholder="Tên đăng nhập"
              />
              {formik.errors.username && formik.touched.username ? (
                <p className="auth__error">{formik.errors.username}</p>
              ) : (
                <br />
              )}

              <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="right_content-input"
                type="password"
                placeholder="Mật khẩu"
              />
              {formik.errors.password && formik.touched.password ? (
                <p className="auth__error">{formik.errors.password}</p>
              ) : (
                <br />
              )}

              <input
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="right_content-input"
                type="password"
                placeholder="Xác nhận mật khẩu"
              />
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <p className="auth__error">{formik.errors.confirmPassword}</p>
              ) : (
                <br />
              )}

              <button
                type="submit"
                onClick={formik.submitForm}
                className="right_content-login-button"
              >
                ĐĂNG KÍ
              </button>
              <br />
            </form>

            <div>
              <Link to="/login" className="right_content-links">
                —————————————— Bạn đã có tài khoản ——————————————
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

export default Register;
