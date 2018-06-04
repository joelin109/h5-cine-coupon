import React, { Component } from "react";
import { render } from "react-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  getContrastText
} from "@material-ui/core/styles";

const cineTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#61bdfa",
      main: "#198dc7",
      dark: "#006096"
      //contrastText: getContrastText("#198dc7"),
    },
    secondary: {
      light: "ff8f91",
      main: "#fc5c63",
      dark: "#c32439"
      //contrastText: getContrastText("#fc5c63")
    },
  },
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 6,
  },
 
});

export default class CThemeProvider extends Component {
  render() {
    return (
      <MuiThemeProvider theme={cineTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}
