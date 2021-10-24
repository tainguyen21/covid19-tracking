import { Grid } from "@mui/material";
import React from "react";
import HighlighCard from "./HighlighCard";

Highlight.propTypes = {};

function Highlight(props) {
  const { report } = props;
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
      title: "Số ca mắc",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Số ca khỏi (hiện tại API đang bị lỗi)",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item, index) => (
        <Grid item sm={4} xs={12} key={index}>
          <HighlighCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
