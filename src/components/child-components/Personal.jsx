import React from "react";
import { TextField, Typography, Grid } from "@material-ui/core";

const Personal = (props) => {
  const { id, subFormData, onChange, currentPage, pages } = props;
  if (pages[currentPage] !== id) return null;

  const handleChange = ({ id, value }) => {
    let data = { ...subFormData };
    data[id] = value;
    onChange(data);
  };

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h6" color="primary">
          PERSONAL DETAILS
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="overline" color="primary">
          Enter your personal and contact information
        </Typography>
      </Grid>

      <Grid item xs={12} style={{ marginTop: "2rem" }}>
        <TextField
          fullWidth
          id="jobTitle"
          label="Job Title"
          value={subFormData.jobTitle}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="firstName"
          label="First Name"
          value={subFormData.firstName}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="lastName"
          label="Last Name"
          value={subFormData.lastName}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="email"
          label="E-mail"
          value={subFormData.email}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="phone"
          label="Phone Number"
          value={subFormData.phone}
          onChange={(e) => handleChange(e.currentTarget)}
          variant="filled"
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default Personal;
