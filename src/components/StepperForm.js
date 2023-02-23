import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { minimumValue, regexValdication, required } from "../utils/validations";
import AddressInfo from "./AddressInfo";
import UserDetail from "./UserDetail";
import UserInformation from "./UserInformation";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

const StepperForm = () => {
  const classes = useStyles();
  const labels = ["USER INFORMATION ", "ADDRESS DETAILS ", "Thank You"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [userDetails, setUserDetails] = React.useState({
    userInformation: {
      firstname: "",
      middlename: "",
      lastname: "",
      mobilenumber: "",
      email: "",
      birthdate: "",
      age: "",
      bloodgroup: "",
      height: "",
      weight: "",
      gender: "",
      maritalstatus: "",
    },
    addressDetails: {
      addLine1: "",
      addLine2: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
  });
  const [error, setError] = React.useState({});

  const handleChange = (event, valueField, id) => {
    setUserDetails({
      ...userDetails,
      [valueField]: {
        ...userDetails[valueField],
        [event.target.id || id]: event.target.value,
      },
    });
  };
  const handleNext = () => {
    let err = {};
    if (activeStep === 0) {
      Object.keys(userDetails.userInformation).forEach((info) => {
        let value = userDetails.userInformation[info];
        if (required(value)) {
          err = {
            ...err,
            [info]: `${info} is required`,
          };
        }
        if (
          (info === "firstname" ||
            info === "middlename" ||
            info === "lastname") &&
          !err[info]
        ) {
          if (minimumValue(value, 3)) {
            err = {
              ...err,
              [info]: `${info} must have 3 characters`,
            };
          }
        }
        if (info === "mobilenumber" && !err[info]) {
          if (regexValdication(value, /^[0-9]{10}$/)) {
            err = {
              ...err,
              [info]: `${info} must have 10 digits`,
            };
          }
        }
        if (info === "email" && !err[info]) {
          if (
            regexValdication(
              value,
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
            )
          ) {
            err = {
              ...err,
              [info]: `Invalid Email Address`,
            };
          }
        }
      });
    } else if (activeStep === 1) {
      Object.keys(userDetails.addressDetails).forEach((info) => {
        let value = userDetails.addressDetails[info];
        if (required(value)) {
          err = {
            ...err,
            [info]: `${info} is required`,
          };
        }
      });
    }
    if (Object.keys(err).length) {
      setError(err);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <UserInformation
            userDetails={userDetails}
            handleChange={handleChange}
            error={error}
          />
        );
      case 1:
        return (
          <AddressInfo
            userDetails={userDetails}
            handleChange={handleChange}
            error={error}
          />
        );
      case 2:
        return <UserDetail userDetails={userDetails} />;
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep}>
        {labels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {handleSteps(activeStep)}

      {activeStep !== labels.length - 1 && (
        <div>
          <Button
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
};

export default StepperForm;
