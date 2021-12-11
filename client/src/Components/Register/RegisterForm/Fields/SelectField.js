import Autocomplete from "@mui/material/Autocomplete";
import { TextField, Box } from "@material-ui/core";
// import { countries } from "./Countries";

const SelectField = (props) => {
  const { name, label, field, options, formik, meta } = props;

  const FieldConfig = {
    helperText: `Please select your ${label}`,
    label: label,
    error: false,
    name: name,
    ...field,
  };
  const SelectFieldConfig = {
    onChange: (event, value) => {
      formik.setFieldValue(name, value !== null && value.label);
    },
    options: options,
    autoHighlight: true,
    getOptionLabel: (option) => option.label || "",
  };
  if (meta && meta.touched && meta.error) {
    FieldConfig.error = true;
    FieldConfig.helperText = meta.error;
  }
  return (
    <Autocomplete
      {...SelectFieldConfig}
      renderOption={(prop, option) => (
        <Box {...prop} component="li">
          {name === "country" && (
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
          )}
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...FieldConfig}
          {...params}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};
export default SelectField;
