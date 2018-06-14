import React from "react";

const CouponMergeStatus = ({ coupons, checkeds }) => {
  let mergeCoupons = [];
  let totalValue = 0;
  let expire_ats = [];

  coupons.map(coupon => {
    if (checkeds.indexOf(coupon.id) !== -1) {
      mergeCoupons.push(coupon.no + "    - ￥" + coupon.value );
      expire_ats.push(coupon.expire_at.substring(0, 10).replace(/-/g, "."));
      totalValue += parseInt(coupon.value);
    }
  });

  mergeCoupons.sort();
  let couponList = mergeCoupons.map(coupon => <li>{coupon}</li>);
  const totalNum = mergeCoupons.length;
  const merge = totalNum >= 2 ? <li>已选：{mergeCoupons.length} 张 </li> : "";
  const total = totalNum >= 2 ? <li>总共：{totalValue} 元 </li> : "";

  if (totalNum === 0) return <div />;

  return (
    <div className="coupon-merge-status">
      <div className="status-bold">{merge}</div>
      {couponList}
      <div>
        <li></li>
      </div>
      <div className="status-bold">{total}</div>
    </div>
  );
};

export default CouponMergeStatus;
