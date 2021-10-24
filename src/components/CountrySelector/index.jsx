import React from "react";
import PropTypes from "prop-types";
import { Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    autoComplete: {
      margin: `24px 0`,
    },
  };
});

CountrySelector.propTypes = {
  countries: PropTypes.array,
  handleOnChange: PropTypes.func,
  value: PropTypes.object,
};

CountrySelector.defaultProps = {
  countries: [],
  handleOnChange: null,
  value: null,
};

function CountrySelector(props) {
  const { value, handleOnChange, countries } = props;
  const styles = useStyles();

  return (
    <Autocomplete
      className={styles.autoComplete}
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
