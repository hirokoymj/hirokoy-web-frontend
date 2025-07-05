import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputText } from "components/Forms/FormInputText";

import { useAuth } from "contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { registerFormSchema } from "../validation/formValidations";

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
  divider: {
    marginBottom: theme.spacing(2),
  },
}));

export const SignupView = () => {
  const classes = useStyles();
  const { userLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const methods = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async ({ email, password }) => {
    console.log("onSubmit");
    await doCreateUserWithEmailAndPassword(email, password).catch((error) => {
      setError(error.code);
    });
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <Container maxWidth="xs" component={Paper} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
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
          <FormInputText
            label="Confirm Password"
            name="passwordConfirmation"
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
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </FormProvider>
        <Divider className={classes.divider} />
        <Typography align="center">
          Already have an account? <Link to={"/login"}>Login</Link>
        </Typography>
      </Container>
    </>
  );
};
