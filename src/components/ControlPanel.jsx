import React from "react";
import ColorPicker from "./child-components/ColorPicker";
import TemplatePicker from "./child-components/TemplatePicker";
import { Grid, Button } from "@material-ui/core";

const ControlPanel = (props) => {
  const {
    currentColor,
    currentTemplate,
    handleControlPanelChange,
    handlePrint,
  } = props;

  return (
    <Grid
      container
      alignContent="space-around"
      style={{
        height: "100%",
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ margin: "2rem 0" }}
      >
        <ColorPicker
          currentColor={currentColor}
          onChange={handleControlPanelChange("color")}
        />
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ margin: "2rem 0" }}
      >
        <TemplatePicker
          currentTemplate={currentTemplate}
          onChange={handleControlPanelChange("template")}
        />
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ margin: "2rem 0" }}
      >
        <Button variant="contained" color="secondary" onClick={handlePrint}>
          Print Resume
        </Button>
      </Grid>
    </Grid>
  );
};

export default ControlPanel;
