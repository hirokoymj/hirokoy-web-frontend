import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles'; // Import useTheme

interface TitleProps {
  text: string;
}
export const Title: React.FC<TitleProps> = ({ text }) => {
  const theme = useTheme(); // Get the theme object

  return (
    <Typography
      component="h2"
      variant="h5"
      color="black" // Or use theme.palette.text.primary, or 'text.primary' for system palette
      sx={{
        marginBottom: theme.spacing(2), // Use sx prop for styling
      }}
      noWrap
    >
      {text}
    </Typography>
  );
};
