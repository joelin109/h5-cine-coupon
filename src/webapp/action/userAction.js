import { userQuery } from "@/service/user";
import { userCouponList, mergeCoupons } from "@/service/uCoupon";

export const userAction = {
  queryAccount: async query => {
    const data = { query };
    const result = await userQuery(data);
    if (result.length === 1) {
      return { user: result[0] };
    }

    return { err: result.length === 0 ? "没有账号" : "账号不唯一" };
  }
};

export const userCouponAction = {
  couponList: async user_id => {
    const data = { user_id };
    const result = await userCouponList(data);
    //alert(JSON.stringify(result.rows));
    return { result: result.rows };
  },

  couponMerge: async data => {
    const response = await mergeCoupons(data);
    if (response.result) {
      alert(JSON.stringify("合并成功"));

      return userCouponAction.couponList(data.user_id);
    } else {
      let except = response.except_case_desc;
      let error = except === "no_login" ? "Token 过期" : except;
      return { error };
    }
  }
};
