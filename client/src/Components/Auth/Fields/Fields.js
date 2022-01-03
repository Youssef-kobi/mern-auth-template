import { useState } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { TextField, Typography, Input, Button } from '@material-ui/core'
import Classes from './Fields.module.css'
import SelectField from './SelectField'
import CheckboxField from './CheckboxField'

const Fields = ({
  formik,
  Field: { name, label, type, options, defaultImg },
}) => {
  const [Picture, setPicture] = useState(null)

  let FieldsContent

  const imageChangeHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      formik.setFieldValue(name, URL.createObjectURL(e.currentTarget.files[0]))
      setPicture(e.currentTarget.files[0])
    }
  }
  let Error = {
    error: false,
    helperText: '',
  }
  const [field, meta] = useField(name)
  if (meta && meta.touched && meta.error) {
    Error = {
      error: true,
      helperText: meta.error,
    }
  }
  if (type === 'text') {
    FieldsContent = (
      <TextField
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        fullWidth
        variant='outlined'
        label={label}
        name={name}
        error={Error.error}
        helperText={Error.helperText}
      />
    )
  }
  if (type === 'select') {
    FieldsContent = (
      <SelectField formik={formik} options={options} name={name} label={name} />
    )
  }
  if (type === 'password') {
    FieldsContent = (
      <TextField
        type='password' // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        fullWidth
        variant='outlined'
        label={label}
        name={name}
        error={Error.error}
        helperText={Error.helperText}
      />
    )
  }
  if (type === 'checkbox') {
    FieldsContent = (
      <CheckboxField
        formik={formik}
        options={options}
        name={name}
        label={name}
      />
    )
  }
  if (type === 'picture') {
    FieldsContent = (
      <>
        <div className={Classes.imgContainer}>
          <img
            src={Picture ? URL.createObjectURL(Picture) : defaultImg}
            alt='img'
          />
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={Classes.profileimg}>
          <Button
            className={Classes.btn}
            variant='contained'
            component='span'
            color='primary'
          >
            Upload Image
          </Button>
          <Input
            accept='image/*'
            id={name}
            style={{ display: 'none' }}
            type='file'
            label={label}
            name={name}
            onChange={imageChangeHandler}
          />
        </label>
      </>
    )
  }
  return <Typography component='span'>{FieldsContent}</Typography>
}
Fields.propTypes = {
  // eslint-disable-next-line react/require-default-props
  formik: PropTypes.instanceOf(Object),
  Field: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.instanceOf(Array),
    defaultImg: PropTypes.string,
  }).isRequired,
}
export default Fields
