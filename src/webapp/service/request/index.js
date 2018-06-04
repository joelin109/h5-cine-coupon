import { storeUtil } from "@/util";
import axios from "axios";

function httpUrl(url) {
  let baseURL = "";
  if (url.indexOf("http") >= 0) {
    baseURL = "";
  } else {
    if (window.API_Host_URL) {
      baseURL = window.API_Host_URL;
    }
  }
  return baseURL + url;
}

function httpBody(bodyData) {
  let sitecode = storeUtil.getSiteCode();
  let token = storeUtil.getToken();

  return {
    token: token,
    sitecode: sitecode,
    channel: "",
    locale: "zh_CN",
    appver: "2.3.1",
    data: bodyData
  };
}

export let post = (url, data) => {
  let _apiURL = httpUrl(url);
  let _httpBody = httpBody(data);

  // alert(_apiURL)
  return axios.post(_apiURL, _httpBody).then(response => response.data);
};

export let get = (url, params) => {
  let _apiURL = httpUrl(url);
  return axios.get(_apiURL, { params }).then(response => response.data);
};
