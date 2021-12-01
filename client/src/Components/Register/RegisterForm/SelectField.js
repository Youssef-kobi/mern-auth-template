import Autocomplete from "@mui/material/Autocomplete";
import { TextField, Box } from "@material-ui/core";
import { countries } from "./Countries";

const CountrySelect = (props) => {
  const { name, label, field } = props;
  console.log(label);
  // console.log(props);
  const FieldConfig = {
    helperText: "Please select your country",
    label: label,
    error: false,
    name: name,
    ...field,
  };
  console.log(field);
  const SelectFieldConfig = {
    // variant: "outlined",
    // label: label,
    // variant: "outlined",
    onChange: (e, value) => {
      if (countries.some(e => e.label === (field.value))) {
        console.log(countries.some(e => e.label === (field.value))) 
        FieldConfig.error = true;
        FieldConfig.helperText = props.meta.error;
      }
      props.formik.setFieldValue("country", value !== null && value.label);
    },
    options: countries,
    autoHighlight: true,
    // value: field.label,
    // isOptionEqualToValue: (option, value) => value.label === field.label,
    //
    getOptionLabel: (option) => option.label || "",
  };
  if (props.meta && props.meta.touched && props.meta.error) {
    FieldConfig.error = true;
    FieldConfig.helperText = props.meta.error;
  }
  return (
    <Autocomplete
      {...SelectFieldConfig}
      renderOption={(prop, option) => (
        <Box {...prop} component="li">
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
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
export default CountrySelect;
// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
