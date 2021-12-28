import { Formik, Form } from "formik";

import Classes from "./Register.module.css";
import formFields from "./RegisterFormData";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useState } from "react";
import RegisterPersonal from "./RegisterSteps/RegisterPersonal/RegisterPersonal";
import RegisterShop from "./RegisterSteps/RegisterShop/RegisterShop";
import validationSchema from "./Validations";

const renderStepContent = (step, formik) => {
  switch (step) {
    case 0:
      return <RegisterPersonal formik={formik} formField={formFields} />;
    case 1:
      return <RegisterShop formik={formik} formField={formFields} />;
    case 2:
      break;
    // return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
};
const Register = () => {
  const steps = ["Personal information", "Shop details"];
  const initialValues = {
    profilePicture: null,
    firstName: "",
    lastName: "",
    // userName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confPassword: "",
    // step 2 From
    shopImg: null,
    shopAddress: "",
    postalCode: "",
    shopName: "",
    shopSite: "",
    shopType: "",
    shopPhoneNumber: "",
    shopEmail: "",
    salesTax: "",
    termsOfUse: false,
  };
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const submitForm = async (values, actions) => {
    try {
      const user = { ...values };
      console.log(user)
      const res = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(await res.json());
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const currentValidationSchema = validationSchema[activeStep];
  return (
    <div className={Classes.main}>
      <Stepper
        className={Classes.stepper}
        alternativeLabel
        activeStep={activeStep}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className={Classes.form}>
            {renderStepContent(activeStep, formik)}

            <div className={Classes.btnsflex}>
              {activeStep !== 0 && !formik.isSubmitting && (
                <Button
                  type="button"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                </Button>
              )}
              <div>
                <Button
                  disabled={formik.isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isLastStep ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
            {formik.isSubmitting && <CircularProgress size={24} />}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
