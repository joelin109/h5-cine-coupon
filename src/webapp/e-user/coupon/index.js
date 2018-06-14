import React from "react";
import { CButton } from "@/component/_base";
import CouponList from "./couponList";
import CouponMergeStatus from "./couponMergeStatus";
import DialogMergeConfirm from "./dialogMergeConfirm";

class UserCouponList extends React.PureComponent {
  state = {
    checked: [],
    isOpen: false
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    let newChecked2 = [];
    this.props.coupons.map(coupon => {
      if (newChecked.indexOf(coupon.id) !== -1) {
        newChecked2.push(coupon.id);
      }
    });

    this.setState({
      checked: newChecked2
    });
  };

  handlePreVerify = () => {
    let newChecked = [];
    this.props.coupons.map(coupon => {
      if (this.state.checked.indexOf(coupon.id) !== -1) {
        newChecked.push(coupon.no);
      }
    });

    if (newChecked.length < 2) {
      alert("请选择2个以上优惠券");
      return false;
    }

    return true;
  };

  handleMerge = () => {
    let newChecked = [];
    this.props.coupons.map(coupon => {
      if (this.state.checked.indexOf(coupon.id) !== -1) {
        newChecked.push(coupon.no);
      }
    });
    this.props.action(newChecked);
  };

  handleConfirm = () => {
    this.setState({
      isOpen: true
    });
  };

  render() {
    const coupons = this.props.coupons;
    const mergeButton = <CButton text="合并" onClick={this.handleConfirm} />;
    return (
      <React.Fragment>
        <CouponList
          coupons={coupons}
          checkeds={this.state.checked}
          action={this.handleToggle}
        />
        <CouponMergeStatus coupons={coupons} checkeds={this.state.checked} />
        <DialogMergeConfirm coupons={coupons} action={this.handleMerge} verify={this.handlePreVerify}/>
      </React.Fragment>
    );
  }
}

export default UserCouponList;
