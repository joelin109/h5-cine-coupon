import React from "react";
import PropTypes from "prop-types";
import UserCouponList from "./coupon";
import UserSearch from "./userSearch";
import UserDesc from "./userDesc";
import {
  userAction,
  userCouponAction as couponAction
} from "@/action/userAction";

class User extends React.Component {
  state = {
    user: {},
    coupons: []
  };

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  handleQuery = async query => {
    let { err, user } = await userAction.queryAccount(query);
    if (err) {
      alert(err);
    } else {
      const { error, result } = await couponAction.couponList(user.id);
      this.setState({
        user,
        coupons: result
      });
    }
  };

  handleMerge = async checkeds => {
    if (checkeds.length < 2) {
      alert("请选择2个以上优惠券");
      return;
    }

    let data = {
      user_id: this.state.user.id,
      coupons: checkeds
    };

    const { error, result } = await couponAction.couponMerge(data);
    if (error) {
      alert(error);
    } else {
      this.setState({ coupons: result });
    }
  };

  render() {
    const newUserCouponList = <UserCouponList coupons={this.state.coupons} />;
    return (
      <React.Fragment>
        <UserSearch action={this.handleQuery} />
        <div>
          <UserDesc user={this.state.user} />
          <UserCouponList
            coupons={this.state.coupons}
            action={this.handleMerge}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default User;
