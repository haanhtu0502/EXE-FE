import React from "react";
import "./Payment.scss";
import { useSelector } from "react-redux";

const Payment = () => {
  const itenary = useSelector((state) => state.innetary.itenary);
  return (
    <div className="payment__container">
      <div className="payment__wrapper">
        <div className="payment__title">
          <h2>Điền thông tin</h2>
        </div>
        <div className="payment__content">
          <h2>Thông tin đơn hàng</h2>
          <div className="payment__productInfo">
            <div className="payment__productInfo-wrapper">
              <p className="payment__productInfo-label">Tên đơn hàng:</p>
              <p className="payment__productInfo-value">{itenary.title}</p>
            </div>
            <div className="payment__productInfo-wrapper">
              <p className="payment__productInfo-label">Giá tiền:</p>
              <p className="payment__productInfo-value">
                {itenary.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
            <div className="payment__productInfo-wrapper">
              <p className="payment__productInfo-label">Phí Agency/ Website:</p>
              <p className="payment__productInfo-value">15%</p>
            </div>
            <div className="payment__productInfo-wrapper">
              <p className="payment__productInfo-label">
                Tổng số tiền phải thanh toán:
              </p>
              <p className="payment__productInfo-value">
                {(itenary.price + (itenary.price * 15) / 100).toLocaleString(
                  "vi-VN",
                  {
                    style: "currency",
                    currency: "VND",
                  }
                )}
              </p>
            </div>
          </div>
          <h2>Thông tin liên lạc</h2>
          <div className="payment__contactInfo">
            <div className="payment__contactInfo-wrapper">
              <p className="payment__contactInfo-label">Họ và Tên*:</p>
              <input
                className="payment__contactInfo-input"
                type="text"
                placeholder="Nguyen Van A"
              />
            </div>
            <div className="payment__contactInfo-wrapper">
              <p className="payment__contactInfo-label">Địa chỉ*:</p>
              <input
                className="payment__contactInfo-input"
                type="text"
                placeholder="TP.HCM"
              />
            </div>
            <div className="payment__contactInfo-wrapper">
              <p className="payment__contactInfo-label">SĐT*:</p>
              <input
                className="payment__contactInfo-input"
                type="tel"
                placeholder="0987654321"
              />
            </div>
            <div className="payment__contactInfo-wrapper">
              <p className="payment__contactInfo-label">Email*:</p>
              <input
                className="payment__contactInfo-input"
                type="email"
                placeholder="abc@gmal.com"
              />
            </div>
          </div>
        </div>
        <p>
          Tôi đã hiểu và đồng ý với điều khoản sử dụng chung và chính sách quyền
          riêng tư của klook.
        </p>
        <div className="payment__noticed">
          Vui lòng điền thông tin chính xác. Một khi đã gửi thông tin bạn sẽ
          không thay đổi được
        </div>
        <button className="payment__button">Thanh toán</button>
      </div>
    </div>
  );
};

export default Payment;
