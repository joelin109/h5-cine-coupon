import React from "react";
import { CButton, CDialog } from "@/component/_base";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

class DialogMergeConfirm extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    let verified = this.props.verify();
    if (verified) this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleConfirm = () => {
    this.setState({ open: false });
    this.props.action();
  };

  render() {
    const mergeButton = <CButton text="合并" onClick={this.handleClickOpen} />;
    return (
      <div>
        <div className="coupon-merge">
          {this.props.coupons.length > 0 ? mergeButton : ""}
        </div>

        <CDialog
          open={this.state.open}
          onCancel={this.handleClose}
          onConfirm={this.handleConfirm}
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              确认优惠券进行合并，请点击“确定”
            </DialogContentText>
          </DialogContent>
        </CDialog>
      </div>
    );
  }
}

export default DialogMergeConfirm;
