import { post } from "@/service/request";
import Api from "@/../APIConfig";

export const userQuery = data => {
  return post(Api.APIURL_User_Query, data)
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
