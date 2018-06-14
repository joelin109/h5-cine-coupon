import React from "react";
import ReactDOM from "react-dom";
import CThemeProvider from "@/component/gthemeProvider";
import User from "@/e-user";
import Header from "@/component/gheader";

class Index extends React.Component {
  render() {
    return (
      <CThemeProvider>
        <Header />
        <User />
      </CThemeProvider>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("app"));
