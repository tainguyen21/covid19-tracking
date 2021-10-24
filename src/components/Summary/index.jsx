import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import LineCharts from "../Charts/LineCharts";
import HighMaps from "../Charts/HighMaps";

Summary.propTypes = {
  report: PropTypes.array,
};

Summary.defaultProps = {
  report: [],
};

function Summary(props) {
  const { report, selectedCountry } = props;
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectedCountry) {
      import(
        `@highcharts/map-collection/countries/${selectedCountry.ISO2.toLowerCase()}/${selectedCountry.ISO2.toLowerCase()}-all.geo.json`
      ).then((res) => setMapData(res));
    }
  }, [selectedCountry]);

  return (
    <Grid container spacing={3} style={{ marginTop: "32px" }}>
      <Grid item sm={8} xs={12}>
        <LineCharts data={report} />
      </Grid>
      <Grid item sm={4} xs={12}>
        <HighMaps mapData={mapData} />
      </Grid>
    </Grid>
  );
}

export default Summary;
