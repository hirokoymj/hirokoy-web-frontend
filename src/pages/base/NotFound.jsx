import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

import { Title } from "components/Titles/Title";

export const NotFound = () => {
  return (
    <Box component="p">
      <Title text="Page not found!" />
      Go to the{" "}
      <Link component={NavLink} to="/">
        Homepage
      </Link>
      .
    </Box>
  );
};
