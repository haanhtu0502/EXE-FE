import { Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";

const SearchFlight = ({ formik, location, dates, setDates }) => {
  const brand = [
    { name: "VietJet Aviation", id: 1 },
    { name: "Bamboo Airway", id: 2 },
    { name: "Vietnam Airline", id: 3 },
  ];

  const [openDate, setOpenDate] = useState(false);

  return (
    <>
      {" "}
      <form action="" onSubmit={formik.handleSubmit}>
        <label className="content__search-label" htmlFor="location">
          Điểm đến:
        </label>
        <Autocomplete
          disablePortal
          id="location"
          name="location"
          options={location}
          sx={{
            width: "100%",
            "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
              fontSize: "15px",
              paddingY: "10px",
            },
          }}
          defaultValue={formik.values.location}
          onChange={(e, value) => {
            formik.setFieldValue(
              "location",
              value !== null ? value : formik.initialValues.location
            );
          }}
          renderInput={(params) => (
            <TextField className="content__search-input-location" {...params} />
          )}
        />
        <label className="content__search-label" htmlFor="location">
          Hãng:
        </label>
        <Autocomplete
          disablePortal
          id="brand"
          name="brand"
          options={brand}
          getOptionLabel={(option) => option.name}
          sx={{
            width: "100%",
            "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
              fontSize: "15px",
              paddingY: "15px",
            },
          }}
          defaultValue={formik.values.brand}
          onChange={(e, value) => {
            formik.setFieldValue(
              "brand",
              value !== null ? value : formik.initialValues.brand
            );
          }}
          renderInput={(params) => (
            <TextField className="content__search-input-location" {...params} />
          )}
        />
        <label className="content__search-label" htmlFor="location">
          Ngày đi/ Ngày đến:
        </label>
        <div
          onClick={() => setOpenDate(!openDate)}
          className={`travelplanner__container-form-inputcontrol-text `}
          style={{ width: "100%" }}
        >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
          dates[0].endDate,
          "dd/MM/yyyy"
        )}`}</div>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => {
              formik.setFieldValue(
                "dates",
                item !== null ? item : formik.initialValues.dates
              );
              setDates([item.selection]);
              setOpenDate(!openDate);
            }}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className="date"
            minDate={new Date()}
          />
        )}
        <div className="content__search-price">
          <label htmlFor="minPrice" className="content__search-label">
            Giá thấp nhất:
          </label>
          <input
            value={formik.values.minPrice}
            onChange={formik.handleChange}
            placeholder="(VNĐ)"
            type="number"
            name="minPrice"
            className="content__search-label-price"
          />
        </div>
        <div className="content__search-price">
          <label htmlFor="maxPrice" className="content__search-label">
            Giá cao nhất:
          </label>
          <input
            value={formik.values.maxPrice}
            onChange={formik.handleChange}
            placeholder="(VNĐ)"
            type="number"
            name="maxPrice"
            className="content__search-label-price"
          />
        </div>
        <button className="content__search-button" type="submit">
          Tìm kiếm
        </button>
      </form>
    </>
  );
};

export default SearchFlight;
