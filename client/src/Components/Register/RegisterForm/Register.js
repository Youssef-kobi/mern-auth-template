import { Formik, Form } from "formik";
import * as Yup from "yup";
import Classes from "./Register.module.css";
import FormFilds from "./RegisterFormData";
import {
  Stepper,
  Step,
  StepLabel,
  // Button,
  // Typography,
  // CircularProgress
} from "@material-ui/core";
import { useState } from "react";
import RegisterPersonal from "./RegisterSteps/RegisterPersonal";
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <RegisterPersonal formField={FormFilds} />;
    // break;
    case 1:
      break;
    // return <PaymentForm formField={formField} />;
    case 2:
      break;
    // return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
};
const Register = () => {
  const steps = ["Personal information", "Shop details", "Review your order"];
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confPassword: "",
    phoneNumber: "",
  };
  const [activeStep, setActiveStep] = useState(0);
  // const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      console.log(values);
      // _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      console.log(values);
      // actions.setTouched({});
      // actions.setSubmitting(false);
    }
  };
  const validationSchema = Yup.object({
    lastName: Yup.string().required("Please select a product"),
    firstName: Yup.string("string ahya").required("hololo"),
    // email: Yup.string().email().required(),
    // password: Yup.string().required(),
    // review: Yup.string().required(),
    // rating: Yup.number().min(1).max(10).required(),
    // date: Yup.date().default(() => new Date()),
    // wouldRecommend: Yup.boolean().default(false),
  });
  return (
    <div className={Classes.form}>
      <Stepper alternativeLabel activeStep={0}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={Classes.form}>{renderStepContent(activeStep)}</Form>
      </Formik>
    </div>
  );
};

export default Register;
