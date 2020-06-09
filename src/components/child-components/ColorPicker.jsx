import React from "react";
import { Radio, Typography, Grid } from "@material-ui/core";

const ColorPicker = (props) => {
  const { currentColor, onChange } = props;

  const colors = {
    green: "#094c41",
    red: "#b12025",
    blue: "#082a4d",
    purple: "#32084d",
    black: "#1c212f",
  };

  const colorKeys = Object.keys(colors);

  const handleColorChange = ({ value }) => {
    onChange(value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" color="primary">
        CHANGE COLOR
      </Typography>
      <Grid container justify="space-evenly" style={{ marginTop: "1rem" }}>
        {colorKeys.map((color) => {
          return (
            <Radio
              key={color}
              checked={currentColor === colors[color]}
              onChange={(e) => handleColorChange(e.target)}
              value={colors[color]}
              name={color}
              inputProps={{ "aria-label": color }}
              style={{
                color: colors[color],
                backgroundColor: "white",
              }}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ColorPicker;
