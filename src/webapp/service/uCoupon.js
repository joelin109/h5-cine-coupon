import { post } from "@/service/request";
import Api from "@/../APIConfig";
import * as api_response from "./data/response_coupon.json";

export const userCouponList = data => {
  return post(Api.APIURL_Admin_User_Coupon_List, data)
    .then(response => {
      let result;

      if (response.result) {
        return response.result;
      }

      return {};
    })
    .catch(error => {
      console.log(error);
    });
};

export const mergeCoupons = data => {
  return post(Api.APIURL_User_Coupon_Synthesizer, data)
    .then(response => {
      return response;
    })
    .catch(error => {
      return false;
      console.log(error);
    });
};
