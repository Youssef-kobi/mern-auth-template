import { useField } from "formik";
import { TextField, Typography, Input, Button } from "@material-ui/core";
import Classes from "./Fields.module.css";
import PersonalLogo from "./../../../assets/PersonalLogo.svg";
import SelectField from "./SelectField";
import React, { useState } from "react";
const Fields = (props) => {
  const [profileImg, setprofileImg] = useState("");
  const { name, label, type } = props.field;
  const [field, meta] = useField(name);

  const imageChangeHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      props.formik.setFieldValue(
        "profilePicture",
        URL.createObjectURL(e.currentTarget.files[0])
      );
      setprofileImg(e.currentTarget.files[0]);
    }
  };
  const TextFieldConfig = {
    ...field,
    fullWidth: true,
    variant: "outlined",
    label: label,
    name: name,
    error: false,
    helperText: "",
  };

  // const SelectFieldConfig = {
  //   ...field,
  //   fullWidth: true,
  //   variant: "outlined",
  //   label: label,
  //   name: name,
  //   error: false,
  //   helperText: "Please select your country",
  // };
  if (type === "text") {
    if (meta && meta.touched && meta.error) {
      TextFieldConfig.error = true;
      TextFieldConfig.helperText = meta.error;
    }
  }
  if (type === "picture") {
    // console.log(type);
  }

  if (type === "select") {
    // if (meta && meta.touched && meta.error) {
    //   SelectFieldConfig.error = true;
    //   SelectFieldConfig.helperText = meta.error;
    // }
  }
  return (
    <>
      {type === "text" && (
        <Typography component={"span"}>
          <TextField {...TextFieldConfig} />
        </Typography>
      )}
      {type === "picture" && (
        <Typography component={"span"}>
          <div className={Classes.imgContainer}>
            <img
              src={profileImg ? URL.createObjectURL(profileImg) : PersonalLogo}
              alt="img"
            />
          </div>
          <label htmlFor="profilePicture" className={Classes.profileimg}>
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
              id="profilePicture"
              style={{ display: "none" }}
              type="file"
              label={label}
              name={name}
              onChange={imageChangeHandler}
            />
          </label>
        </Typography>
      )}
      {type === "select" && (
        <Typography component={"span"}>
          <SelectField formik={props.formik} label={label} field={field} meta={meta}></SelectField>
        </Typography>
      )}
    </>
  );
};

export default Fields;
