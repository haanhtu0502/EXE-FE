import React from "react";
import "./Search.scss";
import SearchIcon from "../../../assets/Search.png";

const Search = () => {
  return (
    <div className="header__search">
      <img className="header__search-icon" src={SearchIcon} alt="" />
      <p className="header__search-text">Cần tìm niềm vui à</p>
    </div>
  );
};

export default Search;
