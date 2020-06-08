import React, { useState } from "react";
import Personal from "./child-components/Personal";
import Summary from "./child-components/Summary";
import Employment from "./child-components/Employment";
import Education from "./child-components/Education";
import Skills from "./child-components/Skills";
import { Grid, Button, Box, MobileStepper } from "@material-ui/core";

const UserForm = (props) => {
  const { formData, handleFieldChange } = props;
  const pages = [
    "personal",
    "professionalSummary",
    "employment",
    "education",
    "skills",
  ];
  const [currentPage, setPage] = useState(0);

  const _next = () => {
    setPage(currentPage + 1);
  };

  const _prev = () => {
    setPage(currentPage - 1);
  };

  return (
    <Box style={{ display: "block", height: "100%", overflowY: "auto" }}>
      <Grid container direction="column">
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justify="center"
          style={{ padding: "1rem 2rem" }}
        >
          <MobileStepper
            style={{ width: "90%", backgroundColor: "inherit" }}
            variant="dots"
            steps={pages.length}
            position="static"
            activeStep={currentPage}
            nextButton={
              <Button
                color="primary"
                variant="contained"
                onClick={_next}
                disabled={currentPage === pages.length - 1}
              >
                Next
                <i className="fas fa-chevron-right"></i>
              </Button>
            }
            backButton={
              <Button
                color="primary"
                variant="contained"
                onClick={_prev}
                disabled={currentPage === 0}
              >
                <i className="fas fa-chevron-left"></i>
                Back
              </Button>
            }
          />
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ padding: "1rem 2rem" }}>
        <Personal
          currentPage={currentPage}
          subFormData={formData.personal}
          onChange={handleFieldChange("personal")}
          id="personal"
          pages={pages}
        />
        <Summary
          currentPage={currentPage}
          subFormData={formData.professionalSummary}
          onChange={handleFieldChange("professionalSummary")}
          id="professionalSummary"
          pages={pages}
        />
        <Employment
          currentPage={currentPage}
          subFormData={formData.employment}
          onChange={handleFieldChange("employment")}
          id="employment"
          pages={pages}
        />
        <Education
          currentPage={currentPage}
          subFormData={formData.education}
          onChange={handleFieldChange("education")}
          id="education"
          pages={pages}
        />
        <Skills
          currentPage={currentPage}
          subFormData={formData.skills}
          onChange={handleFieldChange("skills")}
          id="skills"
          pages={pages}
        />
      </Grid>
    </Box>
  );
};

export default UserForm;
