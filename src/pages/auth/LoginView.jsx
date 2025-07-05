import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "components/Forms/FormInputText";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "contexts/authContext";
import { loginFormSchema } from "../validation/formValidations";

import "./google.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
  error: {
    color: "red",
  },
  submit: {
    marginBottom: theme.spacing(4),
  },
  link: {
    paddingLeft: theme.spacing(1),
  },
}));

export const LoginView = () => {
  const classes = useStyles();
  const { userLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const methods = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async ({ email, password }) => {
    await doSignInWithEmailAndPassword(email, password).catch((error) => {
      if (error.code === "auth/user-not-found") {
        setError(`${error.code} - There is no user exist with that email`);
      } else {
        setError(`${error.code} `);
      }
    });
  };

  const onGoogleSignIn = () => {
    doSignInWithGoogle().catch((err) => {
      setError(err.code);
    });
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <Container maxWidth="xs" component={Paper} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>{" "}
        <Box component="p" className={classes.error}>
          {error}
        </Box>
        <FormProvider {...methods}>
          <FormInputText
            label="Email"
            name="email"
            style={{ marginBottom: "16px" }}
          />
          <FormInputText
            label="Password"
            name="password"
            type="password"
            style={{ marginBottom: "16px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={handleSubmit(onSubmit)}>
            {isSubmitting ? "submitting" : "submit"}
          </Button>
        </FormProvider>
        <Typography align="center">
          Don't have an account?
          <Link to={"/signup"} className={classes.link}>
            Sign up
          </Link>
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          m={0}
          paddingBottom={2}
          paddingTop={2}
          justifyContent="space-between"
          alignItems="center">
          <Divider style={{ width: "45%" }} />
          or
          <Divider style={{ width: "45%" }} />
        </Box>
        <GoogleSignInBtn onClick={onGoogleSignIn} />
      </Container>
    </>
  );
};

/**
 * Google Branding Guidline.
 * https://developers.google.com/identity/branding-guidelines
 */
const GoogleSignInBtn = ({ onClick }) => {
  return (
    <Button
      class="gsi-material-button"
      onClick={(e) => {
        onClick(e);
      }}>
      <div class="gsi-material-button-state"></div>
      <div class="gsi-material-button-content-wrapper">
        <div class="gsi-material-button-icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ display: "block" }}>
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
        </div>
        <span class="gsi-material-button-contents">Sign in with Google</span>
        <span style={{ display: "none" }}>Sign in with Google</span>
      </div>
    </Button>
  );
};
