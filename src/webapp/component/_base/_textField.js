import React from "react";
import TextField from "@material-ui/core/TextField";

export const CTextField = ({ placeholder, value, onChange }) => {
  return (
    <TextField
      id="query"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export const CMultiTextField = ({ placeholder, value, onChange }) => {
  return (
    <TextField
      id="query"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
