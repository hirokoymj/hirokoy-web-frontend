//import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import { RouterButton } from 'components/Buttons/RouterButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles()((theme) => ({
  button: {
    color: '#fff',
    border: '1px solid #fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    fontWeight: 600,
  },
}));

export const LoginButton = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { userLoggedIn, currentUser } = useAuth();
  return (
    <>
      {userLoggedIn ? (
        <>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => {
              doSignOut().then(() => {
                navigate('/login');
              });
            }}
          >
            Logout
          </Button>
          <Box component="span" m={1}>
            {currentUser.displayName ? currentUser.displayName : currentUser.email}
          </Box>
        </>
      ) : (
        <RouterButton to={'/login'} text="login" />
      )}
    </>
  );
};
