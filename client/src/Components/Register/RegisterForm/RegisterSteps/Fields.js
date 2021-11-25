import React from "react";
import { Field, ErrorMessage } from "formik";

// import * as Yup from "yup";
import Classes from "./Fields.module.css";

const Fields = (props) => {
  const { name, label, requiredErrorMsg } = props.field;
  //   const validationSchema = Yup.object({
  //   // product: Yup.string().required("Please select a product").oneOf(products),
  //     name: Yup.string('string ahya').required(),
  //   // email: Yup.string().email().required(),
  //   // password: Yup.string().required(),
  //   // review: Yup.string().required(),
  //   // rating: Yup.number().min(1).max(10).required(),
  //   // date: Yup.date().default(() => new Date()),
  //   // wouldRecommend: Yup.boolean().default(false),
  // });
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {/* {(field) => (
        <> */}
      <Field
        type="text"
        name={name}
        placeholder={label}
        className={`${Classes.formControl} ${
          requiredErrorMsg.error ? Classes.invalid : ""
        }`}
      />
      <ErrorMessage
        component="p"
        name={name}
        // className="invalid-feedback"
      />
    </>
    //   )}
    // </>
  );
};

export default Fields;
