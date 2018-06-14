import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { CIcon } from "./_icon";

export const CIconButton = ({ text, iconName, ...props }) => {
  const icon = <CIcon name={iconName} />;
  return <IconButton {...props}> {icon} </IconButton>;
};

export const CButton = ({ text, ...props }) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {text}
    </Button>
  );
};

export const CFlatButton = ({ text, ...props }) => {
  return <Button {...props} />;
};

export const CFloatingButton = ({ text, iconName, ...props }) => {
  const icon = <CIcon name={iconName} />;
  return (
    <Button variant="fab" color="secondary" {...props}>
      {icon}
    </Button>
  );
};
