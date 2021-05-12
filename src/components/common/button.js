import { Button as MuiButton } from "@material-ui/core";
import React from "react";
const Button = (props) => {
  const { text, ...rest } = props;
  return (
    <MuiButton color="secondary" variant="contained" {...rest}>
      {text}
    </MuiButton>
  );
};
export default Button;
