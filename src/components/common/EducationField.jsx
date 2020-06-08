import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

const EmploymentField = (props) => {
  const { subFormData, onChange } = props;
  const university = { ...subFormData };
  const handleChange = ({ id, value }) => {
    let data = { ...university };
    data[id] = value;
    onChange(data);
  };
  return (
    <Grid item xs={12} container spacing={4}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="overline" color="primary">
          Enter Education Details
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="degree"
          label="Degree"
          value={university.degree}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          id="university"
          label="University"
          value={university.university}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          id="startDate"
          label="Start Date"
          type="date"
          value={university.startDate}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          id="endDate"
          label="End Date"
          type="date"
          value={university.endDate}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          id="city"
          label="City"
          value={university.city}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          id="summary"
          label="Summary"
          multiline
          rows={4}
          rowsMax={6}
          value={university.summary}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
          placeholder="e.g. A summary of your education"
        />
      </Grid>
    </Grid>
  );
};

export default EmploymentField;
