import { Field } from "formik";
import {
  Checkbox,
  FormHelperText,
  FormLabel,
  Link,
  FormControl,
} from "@material-ui/core";
const CheckboxField = (props) => {
  const { FieldConfig, formik } = props;
  const handleChange = (event) => {
    formik.setFieldValue(FieldConfig.name, event.target.checked);
  };
  return (
    <Field {...FieldConfig}>
      {(check) => (
        <>
          <Checkbox onChange={handleChange} name={FieldConfig.name} id={FieldConfig.name} />
          <FormLabel name={FieldConfig.name}>
            {FieldConfig.label}
            <Link href="google.com">Terms and Conditions</Link>
          </FormLabel>
          <FormControl>
            <FormHelperText error={true} component="p" name={FieldConfig.name}>
              {FieldConfig.helperText}
            </FormHelperText>
          </FormControl>
        </>
      )}
    </Field>
  );
};

export default CheckboxField;
