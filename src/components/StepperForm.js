import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import AddressInfo from './AddressInfo';
import UserDetail from './UserDetail';
import UserInformation from './UserInformation';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },

}));

const StepperForm = () => {
  const classes = useStyles();
  const labels = ["USER INFORMATION ", "ADDRESS DETAILS ", "Thank You"];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <UserInformation />;
      case 1:
        return <AddressInfo />;
      case 2:
        return <UserDetail />;
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

      {activeStep !== (labels.length - 1) && <div>
        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
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
      </div>}
    </>
  )
}

export default StepperForm