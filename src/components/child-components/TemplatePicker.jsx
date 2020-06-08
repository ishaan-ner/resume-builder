import React from "react";
import template1 from "../../assets/images/template1.jpg";
import template2 from "../../assets/images/template2.jpg";
import template3 from "../../assets/images/template3.jpg";
import { Typography, Card, Grid, makeStyles } from "@material-ui/core";

const TemplatePicker = (props) => {
  const { currentTemplate, onChange } = props;
  const useStyles = makeStyles({
    card: {
      width: "5rem",
      height: "7rem",
      cursor: "pointer",
      "$ img": {
        height: "100%",
      },
      "&:hover": {
        transform: "scale(1.05,1.05)",
      },
    },
  });

  const classes = useStyles();

  const handleClick = (input) => {
    onChange(input.id);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" color="primary" style={{ marginBottom: "1rem" }}>
        CHANGE TEMPLATE
      </Typography>
      <Grid container style={{ width: "100%" }} justify="space-evenly">
        <Card className={classes.card} elevation={8}>
          <img
            id="template1"
            src={template1}
            alt="Template 1"
            style={{ height: "100%" }}
            onClick={(e) => handleClick(e.currentTarget)}
          ></img>
        </Card>
        <Card className={classes.card} elevation={8}>
          <img
            id="template2"
            src={template2}
            alt="Template 2"
            style={{ height: "100%" }}
            onClick={(e) => handleClick(e.currentTarget)}
          ></img>
        </Card>
        <Card className={classes.card} elevation={8}>
          <img
            id="template3"
            src={template3}
            alt="Template 3"
            style={{ height: "100%" }}
            onClick={(e) => handleClick(e.currentTarget)}
          ></img>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default TemplatePicker;
