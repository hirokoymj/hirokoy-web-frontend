import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { makeStyles } from 'tss-react/mui';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInputText } from 'components/Forms/FormInputText';
import { useAuth, doCreateUserWithEmailAndPassword } from 'contexts/authContext';
import { registerFormSchema } from '../validation/formValidations';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
  submit: {
    marginBottom: theme.spacing(4),
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
}));

export const SignupView = () => {
  const classes = useStyles();
  const { userLoggedIn } = useAuth();
  const [error, setError] = useState('');
  const methods = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async ({ email, password }) => {
    console.log('onSubmit');
    await doCreateUserWithEmailAndPassword(email, password).catch((error) => {
      setError(error.code);
    });
  };

  return (
    <>
      {userLoggedIn && <Navigate to={'/'} replace={true} />}
      <Container maxWidth="xs" component={Paper} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>{' '}
        <Box component="p" className={classes.error}>
          {error}
        </Box>
        <FormProvider {...methods}>
          <FormInputText label="Email" name="email" style={{ marginBottom: '16px' }} />
          <FormInputText label="Password" name="password" type="password" style={{ marginBottom: '16px' }} />
          <FormInputText
            label="Confirm Password"
            name="passwordConfirmation"
            type="password"
            style={{ marginBottom: '16px' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={handleSubmit(onSubmit)}
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </FormProvider>
        <Divider className={classes.divider} />
        <Typography align="center">
          Already have an account? <Link to={'/login'}>Login</Link>
        </Typography>
      </Container>
    </>
  );
};
