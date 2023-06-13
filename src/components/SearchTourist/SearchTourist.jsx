import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SearchTourist = ({ formik, location }) => {
  const preference = [
    { name: "Thiên nhiên", value: 1 },
    { name: "Lịch sử", value: 2 },
    { name: "Hoang dã", value: 3 },
    { name: "Bảo tàng", value: 4 },
  ];
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <label className="content__search-label" htmlFor="location">
          Điểm đến:
        </label>
        <Autocomplete
          disablePortal
          id="location"
          name="location"
          options={location}
          getOptionLabel={(option) => option.name}
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
          Hạng mục:
        </label>
        <Autocomplete
          disablePortal
          id="preference"
          name="preference"
          options={preference}
          getOptionLabel={(option) => option.name}
          sx={{
            width: "100%",
            "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
              fontSize: "15px",
              paddingY: "15px",
            },
          }}
          defaultValue={formik.values.preference}
          onChange={(e, value) => {
            formik.setFieldValue(
              "preference",
              value !== null ? value : formik.initialValues.preference
            );
          }}
          renderInput={(params) => (
            <TextField className="content__search-input-location" {...params} />
          )}
        />

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

export default SearchTourist;
