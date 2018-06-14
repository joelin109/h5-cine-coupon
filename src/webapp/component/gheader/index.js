import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { CIconButton } from "@/component/_base";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Header(props) {
  const { classes } = props;
  const cine = window.API_Host_URL.indexOf("www.bstcine.com") !== -1 ? "Cine官网" : "测试网"
  return (
    <div>
      <AppBar
        position="static"
        style={{ position: "fixed", top: 0, left: 0, right: 0 }}
      >
        <Toolbar>
          <CIconButton id="menu" />
          <Typography variant="C" color="inherit" className={classes.flex}>
           <div className = "header-text"> {cine} </div>
          </Typography>
          <CIconButton id="search" />
          <CIconButton id="person" />
          <CIconButton id="home" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
