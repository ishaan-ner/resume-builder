import React from "react";
import Template1 from "./resume-templates/Template1";
import Template2 from "./resume-templates/Template2";
import Template3 from "./resume-templates/Template3";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import templates from "../styles/ResumeTemplates";

const Preview = (props) => {
  const { data, currentTemplate, currentColor, componentToPrint } = props;
  const template = templates[currentTemplate];
  template.header.backgroundColor = currentColor;
  const useStyles = makeStyles(template);
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={5} ref={componentToPrint}>
      <Grid container className={classes.previewContainer}>
        {currentTemplate === "template1" && (
          <Template1 data={data} classes={classes} />
        )}
        {currentTemplate === "template2" && (
          <Template2 data={data} classes={classes} />
        )}
        {currentTemplate === "template3" && (
          <Template3 data={data} classes={classes} />
        )}
      </Grid>
    </Paper>
  );
};

export default Preview;
