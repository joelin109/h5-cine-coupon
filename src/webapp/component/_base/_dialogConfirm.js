import React from "react";
import { CDialog, CFloatingButton } from "@/component/_base";

class DialogConfirm extends React.Component {
  state = {
    open: false
  };

  handlePreVerify = () => {
    let funcVerify = this.props.onVerify;
    if (funcVerify && funcVerify()) this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleConfirm = () => {
    this.setState({ open: false });
    this.props.onConfirm();
  };

  render() {
    let { text, iconName } = this.props;

    return (
      <div>
        <CFloatingButton iconName={iconName} onClick={this.handlePreVerify} />
        <CDialog
          open={this.state.open}
          onCancel={this.handleClose}
          onConfirm={this.handleConfirm}
        >
          {this.props.children}
        </CDialog>
      </div>
    );
  }
}

export default DialogConfirm;
