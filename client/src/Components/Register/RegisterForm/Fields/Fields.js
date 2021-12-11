import { useField } from "formik";
import { TextField, Typography, Input, Button } from "@material-ui/core";
import Classes from "./Fields.module.css";
import SelectField from "./SelectField";
import React, { useState } from "react";
import CheckboxField from "./CheckboxField";
const Fields = (props) => {
  const { name, label, type, options, defaultImg } = props.field;
  const formik = props.formik;
  const [Picture, setPicture] = useState(null);
  const [field, meta] = useField(name);
  let FieldsContent;

  const imageChangeHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      formik.setFieldValue(name, URL.createObjectURL(e.currentTarget.files[0]));
      setPicture(e.currentTarget.files[0]);
    }
  };
  const FieldConfig = {
    ...field,
    fullWidth: true,
    variant: "outlined",
    label: label,
    name: name,
    error: false,
    helperText: "",
  };
  if (meta && meta.touched && meta.error) {
    FieldConfig.error = true;
    FieldConfig.helperText = meta.error;
  }
  switch (type) {
    case "text":
      FieldsContent = <TextField {...FieldConfig} />;
      break;
    case "select":
      FieldsContent = (
        <SelectField
          formik={formik}
          options={options}
          name={name}
          label={label}
          field={field}
          meta={meta}
        ></SelectField>
      );
      break;
    case "password":
      FieldsContent = <TextField type="password" {...FieldConfig} />;
      break;
    case "checkbox":
      FieldsContent = (
        <CheckboxField FieldConfig={FieldConfig} formik={formik}/>
      );
      break;
    default:
      break;
  }
  return (
    <>
      <Typography component={"span"}>{FieldsContent}</Typography>
      {type === "picture" && (
        <>
          <div className={Classes.imgContainer}>
            <img
              src={Picture ? URL.createObjectURL(Picture) : defaultImg}
              alt="img"
            />
          </div>
          <label htmlFor={name} className={Classes.profileimg}>
            <Button
              className={Classes.btn}
              variant="contained"
              component="span"
              color="primary"
            >
              Upload Image
            </Button>
            <Input
              accept="image/*"
              id={name}
              style={{ display: "none" }}
              type="file"
              label={label}
              name={name}
              onChange={imageChangeHandler}
            />
          </label>
        </>
      )}
    </>
  );
};
export default Fields;
