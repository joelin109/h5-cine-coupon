import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { CIcon } from "./_icon";

export const CIconButton = ({ text, iconName, selected = false, onClick, ...props }) => {
  const icon = <CIcon name={iconName} />;
  const color = selected ? "primary" : "";
  if (text) {
    return (
      <Button color={color} onClick={onClick}>
        {icon} {text}
      </Button>
    );
  }
  return <IconButton onClick={onClick} {...props}> {icon} </IconButton>;
};

export const CButton = ({ text, onClick, ...props }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} {...props}>
      {text}
    </Button>
  );
};

export const CFlatButton = ({ text, onClick, ...props }) => {
  return (
    <Button color="primary" onClick={onClick} {...props}>
      {text}
    </Button>
  );
};

export const CFloatingButton = ({ text, iconName, onClick, ...props }) => {
  const icon = <CIcon name={iconName} />;
  return (
    <Button variant="fab" color="secondary" onClick={onClick} {...props}>
      {icon}
    </Button>
  );
};
