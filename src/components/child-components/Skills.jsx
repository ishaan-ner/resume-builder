import React from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

const Skills = (props) => {
  const { id, pages, subFormData, onChange, currentPage } = props;
  if (pages[currentPage] !== id) return null;

  const handleChange = ({ id, value }) => {
    let data = [...subFormData];
    data[id] = value;
    onChange(data);
  };

  const addSkill = () => {
    let data = [...subFormData];
    data.push("");
    onChange(data);
  };

  const removeSkill = () => {
    let data = [...subFormData];
    data.pop();
    onChange(data);
  };

  return (
    <Grid container spacing={4} alignItems="flex-start">
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h6" color="primary">
          SKILLS
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="overline" color="primary">
          Enter up to 6 relevant skills
        </Typography>
      </Grid>

      <Grid item container xs={12} spacing={4}>
        {subFormData.map((skill, index) => {
          return (
            <Grid item xs={12}>
              <TextField
                fullWidth
                key={index}
                label="Skill"
                value={subFormData[index]}
                onChange={(e) => handleChange(e.currentTarget)}
                variant="filled"
                size="small"
              />
            </Grid>
          );
        })}
        <Grid
          item
          xs={12}
          container
          justify="space-evenly"
          style={{ marginTop: "0.5rem" }}
        >
          <Button
            color="secondary"
            onClick={addSkill}
            disabled={subFormData.length === 6}
            size="small"
            variant="contained"
          >
            Add Skill
          </Button>
          <Button
            color="secondary"
            onClick={removeSkill}
            disabled={subFormData.length === 0}
            size="small"
            variant="contained"
          >
            Remove Skill
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
