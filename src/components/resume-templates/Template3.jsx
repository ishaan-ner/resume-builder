import React from "react";
import { Grid } from "@material-ui/core";

const Template3 = (props) => {
  const { data, classes } = props;
  return (
    <React.Fragment>
      <Grid
        item
        xs={8}
        container
        direction="column"
        className={classes.formData}
      >
        <div className={classes.formSection}>
          <h3>{`${data.personal.firstName} ${data.personal.lastName}`}</h3>
          <hr />
          <p className={classes.jobTitle}>{data.personal.jobTitle}</p>

          <h3>Professional Summary:</h3>
          <p>{data.professionalSummary}</p>
        </div>
        <hr />
        <div className={classes.formSection}>
          <h3>Employment History</h3>
          {data.employment.map((employer, idx) => {
            return (
              <div className={classes.dynamicFormField} key={idx}>
                <h4>
                  {employer.designation} - {employer.company}
                </h4>
                <p>
                  {employer.city} {employer.startDate} -{employer.endDate}
                </p>
                <p>{employer.summary}</p>
              </div>
            );
          })}
        </div>
        <div className={classes.formSection}>
          <h3>Education</h3>
          {data.education.map((item, idx) => {
            return (
              <div className={classes.dynamicFormField} key={idx}>
                <h4>
                  {item.degree} - {item.university}
                </h4>
                <p>
                  {item.city} {item.startDate} -{item.endDate}
                </p>
                <p>{item.summary}</p>
              </div>
            );
          })}
        </div>
      </Grid>
      <Grid item xs={4} container className={classes.header}>
        <span>
          <i className="fas fa-phone-square"></i>
          {data.personal.phone}
        </span>
        <span>
          <i className="fas fa-envelope"></i>
          {data.personal.email}
        </span>
        <div className={classes.dynamicFormField}>
          <h2>Skills</h2>
          <ul>
            {data.skills.map((skill, idx) => {
              return <li key={idx}>{skill}</li>;
            })}
          </ul>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default Template3;
