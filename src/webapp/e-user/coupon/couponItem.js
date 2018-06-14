import React from "react";

const CouponItem = ({ coupon }) => {
  let statusDesc = coupon.sub_status === 0 ? "" : "其它";
  if (coupon.sub_status === -1) {
    statusDesc = "赠送";
  } else if (coupon.sub_status === -2) {
    statusDesc = "合并";
  }
  let promote = coupon.type === "2" ? (10 - 10 * parseFloat(coupon.value)) + "折" :"￥" + coupon.value
  return (
    <div className="coupon-detail">
      <div className="coupon-detail-main">
        <div>
          优惠:
          <a className="coupon-detail-substatus">{promote}</a>

          <a className="coupon-detail-substatus">{statusDesc}</a>
        </div>
        <div>优惠券码：<a className="coupon-detail-cno"> {coupon.no}</a></div>
      </div>
      <div className="coupon-no">--------------------------</div>
      <div className="effective-date">
        创建时间：{coupon.create_at.substring(0, 10).replace(/-/g, ".")}
      </div>
      <div className="effective-date">
        有效期至：{coupon.expire_at.substring(0, 10).replace(/-/g, ".")}
      </div>
    </div>
  );
};

export default CouponItem;
