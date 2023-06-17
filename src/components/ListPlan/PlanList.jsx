import React, { useEffect, useState } from "react";
import "./PlanList.scss";
import PlanItem from "../PlanItem/PlanItem";
import Empty from "../../assets/search-empty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { fetchUser } from "../../utils/fetchLocalStorage";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const PlanList = () => {
  const [plans, setPlans] = useState([]);

  const userInfo = useSelector((state) => state.user.user);
  useEffect(() => {
    const fetchAllItinerary = () => {
      if (userInfo) {
        fetch(
          `https://guidiapi.azurewebsites.net/api/Itinerary/User/${userInfo.id}`
        )
          .then((res) => res.json())
          .then((response) => {
            setPlans([...response.result]);
          })
          .catch((err) => console.log(err));
      }
    };
    fetchAllItinerary();
  }, []);

  console.log(userInfo);

  return (
    <>
      {!userInfo ? (
        <Navigate to="/" />
      ) : (
        <div className="planList__container">
          <div className="planList__header">
            <h1>
              <FontAwesomeIcon
                icon={faClipboardList}
                size="lg"
                className="service__header-icon"
              />
              Danh sách kế hoạch bạn đã tạo
            </h1>
          </div>
          {plans.length === 0 ? (
            <div className="search__result-empty">
              <img src={Empty} alt="" />
              <h1 style={{ fontSize: "30px" }}>Bạn chưa tạo kế hoạch nào</h1>
            </div>
          ) : (
            plans.map((plan) => (
              <div className="plans__item">
                <div className="playList__content">
                  <div className="playList__item">
                    <PlanItem
                      plan={plan}
                      setPlans={setPlans}
                      userId={userInfo.id}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default PlanList;
