import { FormGroup, Stack, TextField } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import Button from 'src/components/Button';
import { defaultFormState, defaultValidationSchema, ILoginFormState } from '.';

interface ILoginFormProps {
  onSubmit: (formData: ILoginFormState) => Promise<any>;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
  const handleSubmit = (values: ILoginFormState, { setSubmitting }: FormikHelpers<ILoginFormState>) => {
    setSubmitting(true);
    onSubmit(values)
      .then((response) => {
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={defaultFormState}
      validationSchema={defaultValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, isSubmitting, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Stack p={3} spacing={2}>
            <FormGroup>
              <TextField
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                error={!!errors.email}
                helperText={errors.email}
              />
            </FormGroup>

            <FormGroup>
              <TextField
                id="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange('password')}
                error={!!errors.password}
                helperText={errors.password}
              />
            </FormGroup>

            <Button
              variant="contained"
              color="primary"
              loading={isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
