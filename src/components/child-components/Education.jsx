import React from "react";
import EducationField from "../common/EducationField";
import { Typography, Grid, Button } from "@material-ui/core";

const Education = (props) => {
  const { pages, id, subFormData, onChange, currentPage } = props;
  if (pages[currentPage] !== id) return null;

  const education = [...subFormData];
  const handleFieldChange = (index) => (value) => {
    let data = [...education];
    data[index] = value;
    onChange(data);
  };

  const addUniversity = () => {
    let data = [...education];
    const newUniversity = {
      degree: "",
      university: "",
      startDate: "",
      endDate: "",
      city: "",
      summary: "",
    };
    data.push(newUniversity);
    onChange(data);
  };

  const removeUniversity = () => {
    let data = [...education];
    data.pop();
    onChange(data);
  };

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h6" color="primary">
          EDUCATION
        </Typography>
      </Grid>
      {education.map((university, index) => {
        return (
          <EducationField
            key={index}
            onChange={handleFieldChange(index)}
            subFormData={education[index]}
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
          onClick={addUniversity}
          disabled={education.length === 3}
          size="small"
          variant="contained"
        >
          Add
        </Button>
        <Button
          color="secondary"
          onClick={removeUniversity}
          disabled={education.length === 0}
          size="small"
          variant="contained"
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default Education;
