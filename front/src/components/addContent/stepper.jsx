import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DivModalStatus } from '../../style/common/addContent';

const useStyles = {
  root: {
    width: '90%',
  },
  backButton: {
    // marginRight: theme.spacing(1),
  },
  instructions: {
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1),
  },
};

function getSteps() {
  return ['Select Photo...', 'Add Groups', 'Add Tags'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select Photo...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Uknown stepIndex';
  }
}

class Setting extends React.Component {

  render() {
    const { classes, addContent, moveAddContentModal } = this.props;
    const { step } = addContent;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {step === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={() => moveAddContentModal(0)}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(step)}</Typography>
                <DivModalStatus>
                  <Button
                    disabled={step === 0}
                    onClick={() => moveAddContentModal(step - 1)}
                    className={classes.backButton}
                  >
                    Back
                </Button>
                  <Button variant="contained" color="primary" onClick={() => moveAddContentModal(step + 1)}>
                    {step === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </DivModalStatus>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Setting);
