import { useField } from "formik";
import {
  TextField,
  Typography,
  Input,
  Button,
  MenuItem,
} from "@material-ui/core";
import Classes from "./Fields.module.css";
import PersonalLogo from "./../../../assets/PersonalLogo.svg";
// import Classes from "./Fields.module.css";

import React, { useState, useMemo, useRef } from "react";
import countryList from "react-select-country-list";
// import { useState } from "react";
const Fields = (props) => {
  const [profileImg, setprofileImg] = useState("");
  const { name, label, type } = props.field;
  const [field, meta] = useField(name);
  const [value, setValue] = useState("");
  const Selected = useRef("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    console.log(Selected.current);
    setValue(value.target.value);
  };
  const imageChangeHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      props.setFieldValue(
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
  const SelectFieldConfig = {
    ...field,
    // ...props.field,
    fullWidth: true,
    variant: "outlined",
    // select: true,
    label: label,
    name: name,
    error: false,
    
    value: value,
    helperText: "",
    onChange: changeHandler,
  };
  if (type === "text") {
    if (meta && meta.touched && meta.error) {
      TextFieldConfig.error = true;
      TextFieldConfig.helperText = meta.error;
    }
  }
  if (type === "picture") {
    console.log(type);
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
              alt="helloxs"
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
          <TextField select {...SelectFieldConfig}>
            {options.map((option) => (
              <MenuItem  key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Typography>
      )}
    </>
  );
};

export default Fields;
