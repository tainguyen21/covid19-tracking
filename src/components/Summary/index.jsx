import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import LineCharts from "../Charts/LineCharts";

Summary.propTypes = {};

function Summary(props) {
  const { report } = props;

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineCharts data={report} />
      </Grid>
      <Grid item sm={4} xs={12}></Grid>
    </Grid>
  );
}

export default Summary;
