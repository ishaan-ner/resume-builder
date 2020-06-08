import React from "react";
import EmploymentField from "../common/EmploymentField";

import { Typography, Grid, Button } from "@material-ui/core";

const Employment = (props) => {
  const { pages, id, subFormData, onChange, currentPage } = props;
  if (pages[currentPage] !== id) return null;

  const employment = [...subFormData];
  const handleFieldChange = (index) => (value) => {
    let data = [...employment];
    data[index] = value;
    onChange(data);
  };

  const addEmployer = () => {
    let data = [...employment];
    const newEmployer = {
      designation: "",
      company: "",
      startDate: "",
      endDate: "",
      city: "",
      summary: "",
    };
    data.push(newEmployer);
    onChange(data);
  };

  const removeEmployer = () => {
    let data = [...employment];
    data.pop();
    onChange(data);
  };

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h6" color="primary">
          EMPLOYMENT
        </Typography>
      </Grid>
      {employment.map((employer, index) => {
        return (
          <EmploymentField
            key={index}
            onChange={handleFieldChange(index)}
            subFormData={employment[index]}
          />
        );
      })}
      <Grid
        item
        container
        xs={12}
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Button
          color="secondary"
          onClick={addEmployer}
          disabled={employment.length === 3}
          size="small"
          variant="contained"
        >
          Add
        </Button>
        <Button
          color="secondary"
          onClick={removeEmployer}
          disabled={employment.length === 0}
          size="small"
          variant="contained"
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default Employment;
