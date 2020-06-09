import React, { useState, useRef } from "react";
import UserForm from "./components/UserForm";
import Preview from "./components/Preview";
import "./App.css";
import init from "./services/state-init";
import { Grid } from "@material-ui/core";
import ControlPanel from "./components/ControlPanel";
import { useReactToPrint } from "react-to-print";

function App() {
  const [formData, setFormData] = useState({ ...init });
  const [currentColor, setColor] = useState("#094c41");
  const [currentTemplate, setTemplate] = useState("template1");

  const handleFieldChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleControlPanelChange = (field) => (value) => {
    if (field === "color") {
      setColor(value);
    } else if (field === "template") {
      setTemplate(value);
      switch (value) {
        case "template1":
          setColor("#094c41");
          return;
        case "template2":
          setColor("#b12025");
          return;
        case "template3":
          setColor("#082a4d");
          return;
        default:
          return;
      }
    }
  };

  const componentToPrint = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentToPrint.current,
  });

  return (
    <Grid
      container
      style={{
        height: "100%",
      }}
      justify="center"
    >
      <Grid
        item
        lg={4}
        xs={12}
        style={{
          height: "100%",
          padding: "2rem",
        }}
      >
        <UserForm formData={formData} handleFieldChange={handleFieldChange} />
      </Grid>
      <Grid
        item
        lg={5}
        sm={10}
        xs={12}
        style={{
          height: "100%",
          padding: "3rem",
          backgroundColor: "#DFDCE3",
        }}
      >
        <Preview
          data={formData}
          currentColor={currentColor}
          currentTemplate={currentTemplate}
          componentToPrint={componentToPrint}
        />
      </Grid>
      <Grid
        item
        lg={3}
        xs={12}
        style={{
          height: "100%",
          padding: "2rem",
        }}
      >
        <ControlPanel
          currentColor={currentColor}
          currentTemplate={currentTemplate}
          handleControlPanelChange={handleControlPanelChange}
          handlePrint={handlePrint}
        />
      </Grid>
    </Grid>
  );
}

export default App;
