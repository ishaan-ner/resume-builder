import React from "react";

import { TextField, Typography, Grid } from "@material-ui/core";

const ProfessionalSummary = (props) => {
  const { pages, id, subFormData, onChange, currentPage } = props;
  if (pages[currentPage] !== id) return null;

  const handleChange = ({ value }) => {
    onChange(value);
  };

  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      style={{ padding: "0 1rem" }}
    >
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h6" color="primary">
          PROFESSIONAL SUMMARY
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="overline" color="primary">
          Enter a brief professional description
        </Typography>
      </Grid>
      <TextField
        style={{ marginTop: "4rem" }}
        fullWidth
        label="Professional Summary"
        multiline
        rows={4}
        rowsMax={6}
        value={subFormData}
        onChange={(e) => handleChange(e.currentTarget)}
        variant="filled"
        placeholder="e.g. Passionate professional with 5+ years experience in..."
        size="small"
      />
    </Grid>
  );
};

export default ProfessionalSummary;
