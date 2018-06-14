import React from "react";
import CouponItem from "./couponItem";
import { CCheckbox } from "@/component/_base";
import ListItem from "@material-ui/core/ListItem";


const CouponList = ({ coupons, checkeds, action }) => {
  let couponList = coupons.map(coupon => {
      //alert(coupon.match_lesson_ids);
    const willChedcked =
      coupon.type === "1" &&
      coupon.condition === "1" && coupon.match_lesson_ids === null;

    const willCheckedItem = (
      <ListItem key={coupon.id} button onClick={action(coupon.id)}>
        <div className="list-item-c">
          <CCheckbox checked={checkeds.indexOf(coupon.id) !== -1} />
        </div>
        <CouponItem coupon={coupon} />
      </ListItem>
    );

    return (
      <div className="root-list-item">
        {willChedcked ? willCheckedItem : <CouponItem coupon={coupon} />}
      </div>
    );
  });

  return <div className="root-list">{couponList}</div>;
};

export default CouponList;
