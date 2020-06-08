import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

const EmploymentField = (props) => {
  const { subFormData, onChange } = props;
  const employer = { ...subFormData };
  const handleChange = ({ id, value }) => {
    let data = { ...employer };
    data[id] = value;
    onChange(data);
  };
  return (
    <Grid item xs={12} container spacing={4}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="overline" color="primary">
          Enter Employment Details
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="designation"
          label="Designation"
          value={employer.designation}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          id="company"
          label="Company"
          value={employer.company}
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
          value={employer.startDate}
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
          value={employer.endDate}
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
          value={employer.city}
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
          value={employer.summary}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
          placeholder="e.g. Projects you have been part of, problems faced"
        />
      </Grid>
    </Grid>
  );
};

export default EmploymentField;
