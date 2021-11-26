import { useField } from "formik";
import { TextField, Typography } from "@material-ui/core";
// import Classes from "./Fields.module.css";

const Fields = (props) => {
  const { name, label } = props.field;
  const [field, meta] = useField(name);
  const TextFieldConfig = {
    ...field,
    // ...props.field,
    fullWidth: true,
    variant: "outlined",
    label: label,
    name: name,
    error: false,
    helperText: "",
  };
  if (meta && meta.touched && meta.error) {
    TextFieldConfig.error = true;
    TextFieldConfig.helperText = meta.error;
  }
  return (
    <Typography component={"span"}>
      <TextField {...TextFieldConfig} />
    </Typography>
  );
};

export default Fields;
