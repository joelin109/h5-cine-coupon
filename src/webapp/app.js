import React from "react";
import ReactDOM from "react-dom";
import CThemeProvider from "@/component/themeProvider";
import CheckboxList from "@/e-user";
import Header from "@/component/header";
import Button from "@material-ui/core/Button";

class Index extends React.Component {
  render() {
    return (
      <CThemeProvider>
        <Header />
        <div>
          <Button >Default</Button>
          <Button color="primary">
            Primary
          </Button>
          <Button color="secondary">
            Secondary
          </Button>
        </div>
        <CheckboxList />
      </CThemeProvider>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
