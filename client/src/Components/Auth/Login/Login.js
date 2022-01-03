import React, { useContext, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { Grid, Button, CircularProgress } from '@material-ui/core'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Fields from '../Fields/Fields'
import Classes from './Login.module.css'
import validationSchema from './Validations'
import AuthContext from '../../../store/authContext'

const Login = () => {
  const AuthCtx = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (AuthCtx.isLoggedIn) {
      navigate('/')
    }
  }, [AuthCtx.isLoggedIn])

  const submitForm = async (values, actions) => {
    const { email, password } = values
    axios
      .post('http://localhost:8000/api/users/login', { email, password })
      .then((response) => {
        AuthCtx.login(response.data.token)
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          actions.setFieldError('email', 'email is already used')
        } else if (error.request) {
          // eslint-disable-next-line no-console
          console.log('network error')
        } else {
          // eslint-disable-next-line no-console
          console.log(error)
        }
      })
  }
  const Loginfields = {
    email: {
      name: 'email',
      label: 'Email *',
      type: 'text',
    },
    password: {
      name: 'password',
      label: 'Password *',
      type: 'password',
    },
  }
  const initialValues = {
    email: '',
    password: '',
  }
  return (
    <div className={Classes.main}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {(formik) => (
          <Form className={Classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Fields Field={Loginfields.email} />
              </Grid>
              <Grid item xs={12}>
                <Fields Field={Loginfields.password} />
              </Grid>
            </Grid>
            <div className={Classes.btnsflex}>
              <div>
                <Button
                  disabled={formik.isSubmitting}
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  Submit
                </Button>
              </div>
            </div>
            {formik.isSubmitting && <CircularProgress size={24} />}
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default Login
