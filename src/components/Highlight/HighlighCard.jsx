import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

HighlighCard.propTypes = {};

const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirmed") return { borderLeft: "5px solid #c9302c" };
    if (props.type === "recovered") return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid gray" };
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  count: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

function HighlighCard(props) {
  const { title, count, type } = props;
  const styles = useStyles({ type });

  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography
          component="p"
          variant="body2"
          gutterBottom
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography component="span" variant="body2" className={styles.count}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HighlighCard;
