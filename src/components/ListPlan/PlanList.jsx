import React, { useEffect, useState } from "react";
import "./PlanList.scss";
import PlanItem from "../PlanItem/PlanItem";
import Empty from "../../assets/search-empty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { fetchUser } from "../../utils/fetchLocalStorage";

const userInfo = fetchUser();

const PlanList = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    const fetchAllItinerary = () => {
      fetch(`https://guidi.azurewebsites.net/api/Itinerary/User/${userInfo.id}`)
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setPlans([...response.result]);
        })
        .catch((err) => console.log(err));
    };
    fetchAllItinerary();
  }, []);

  return (
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
          <h1>Không tìm thấy kết quả nào</h1>
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
  );
};

export default PlanList;
