const templates = {
  template1: {
    paper: {
      height: "100%",
      borderRadius: "5px",
      overflow: "hidden",
    },

    previewContainer: {
      height: "100%",
    },

    header: {
      flexDirection: "column",
      padding: "2rem 1rem",
      alignItems: "center",
      backgroundColor: "#094c41",
      color: "white",
      fontFamily: "Times New Roman",
      fontSize: "14px",
      "& h1": {
        fontSize: "1rem",
        margin: "0",
        textAlign: "center",
      },
      "& h2": {
        fontSize: "0.6rem",
        textTransform: "uppercase",
        fontWeight: "400",
        letterSpacing: "1px",
      },
      "& hr": {
        width: "1rem",
      },
      "& p": {
        fontSize: "0.5rem",
        textAlign: "left",
      },
      "& i": {
        marginRight: "0.5rem",
      },
    },

    formData: {
      padding: "2rem 2rem",
      "& h3": {
        fontSize: "1rem",
        margin: "0",
      },
      "& p": {
        fontSize: "0.7rem",
      },
    },

    formSection: {
      marginBottom: "3rem",
    },

    dynamicFormField: {
      margin: "1rem 0 1rem 0",

      "& h4": {
        margin: "1rem 0 0.2rem",
        fontSize: "0.7rem",
      },
      "& p": {
        margin: "0.2rem",
        fontSize: "0.6rem",
      },
      "& ul": {
        padding: "0",
        listStyleType: "none",
        "& li": {
          fontSize: "0.5rem",
          margin: "0.5rem 0",
        },
      },
    },
  },

  template2: {
    paper: {
      height: "100%",
      borderRadius: "5px",
      overflow: "hidden",
    },

    previewContainer: {
      height: "100%",
      alignContent: "flex-start",
    },

    header: {
      flexDirection: "column",
      height: "10rem",
      padding: "1rem 1rem",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#b12025",
      color: "white",
      fontFamily: "Times New Roman",
      fontSize: "14px",
      "& h1": {
        fontSize: "1rem",
        margin: "0",
      },
      "& h2": {
        fontSize: "0.6rem",
        textTransform: "uppercase",
        fontWeight: "400",
        letterSpacing: "1px",
      },
      "& hr": {
        width: "1rem",
      },
      "& p": {
        fontSize: "0.5rem",
        textAlign: "left",
      },
      "& i": {
        marginRight: "0.5rem",
      },
    },

    formData: {
      padding: "1rem 1rem",
      "& h3": {
        fontSize: "1rem",
        margin: "0",
      },
      "& p": {
        fontSize: "0.7rem",
      },
    },

    formSection: {
      borderRight: "1px solid black",
    },

    dynamicFormField: {
      margin: "1rem 0 1rem 0",

      "& h4": {
        margin: "1rem 0 0.2rem",
        fontSize: "0.7rem",
      },
      "& p": {
        margin: "0.2rem",
        fontSize: "0.6rem",
      },
      "& ul": {
        padding: "0",
        listStyleType: "none",
        "& li": {
          fontSize: "0.5rem",
          margin: "0.5rem 0",
        },
      },
    },
  },

  template3: {
    paper: {
      height: "100%",
      borderRadius: "5px",
      overflow: "hidden",
    },

    previewContainer: {
      height: "100%",
    },

    header: {
      flexDirection: "column",
      padding: "2rem 1rem",
      alignItems: "center",
      backgroundColor: "#094c41",
      color: "white",
      fontFamily: "Times New Roman",
      fontSize: "14px",
      "& h1": {
        fontSize: "1rem",
        margin: "0",
      },
      "& h2": {
        fontSize: "0.6rem",
        textTransform: "uppercase",
        fontWeight: "400",
        letterSpacing: "1px",
      },
      "& hr": {
        width: "1rem",
      },
      "& p": {
        fontSize: "0.5rem",
        textAlign: "left",
      },
      "& span": {
        fontSize: "0.5rem",
        display: "block",
      },
      "& i": {
        fontSize: "0.6rem",
        marginRight: "0.2rem",
      },
    },

    formData: {
      padding: "2rem 2rem",
      "& h3": {
        fontSize: "1rem",
        margin: "0",
      },
      "& p": {
        fontSize: "0.7rem",
      },
    },

    formSection: {
      marginBottom: "0.5rem",
    },

    dynamicFormField: {
      margin: "1rem 0 0.5rem 0",

      "& h4": {
        margin: "1rem 0 0.2rem",
        fontSize: "0.7rem",
      },
      "& p": {
        margin: "0.2rem",
        fontSize: "0.6rem",
      },
      "& ul": {
        padding: "0",
        listStyleType: "none",
        "& li": {
          fontSize: "0.5rem",
          margin: "0.5rem 0",
        },
      },
    },
  },
};

export default templates;
