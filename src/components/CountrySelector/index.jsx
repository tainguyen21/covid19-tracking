import React from "react";
import PropTypes from "prop-types";
import { Autocomplete, TextField } from "@mui/material";

CountrySelector.propTypes = {
  countries: PropTypes.array,
};

CountrySelector.defaultProps = {
  countries: [],
};

function CountrySelector(props) {
  const { value, handleOnChange, countries } = props;

  return (
    <Autocomplete
      disablePortal
      options={countries}
      value={value}
      getOptionLabel={(option) => option.Country}
      onChange={handleOnChange}
      sx={{ width: 300 }}
      clearOnEscape
      renderInput={(params) => <TextField {...params} label="Chọn quốc gia" />}
    />
  );
}

export default CountrySelector;
