import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CButton } from "./_button";

//export const CDialog = ({ open, onCancel, onConfirm }) => {
export default class CDialog extends Component {
  render() {
    const { open, onCancel, onConfirm } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <DialogTitle id="alert-dialog-title">{"提示"}</DialogTitle>
        {this.props.children}
        <DialogActions>
          <CButton text="取消" onClick={onCancel} color="primary" />
          <CButton text="确定" onClick={onConfirm} color="primary" autoFocus />    
        </DialogActions>
      </Dialog>
    );
  }
}
