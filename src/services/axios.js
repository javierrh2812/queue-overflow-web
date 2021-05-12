import axios from "axios";
import { store } from "redux/store";

axios.interceptors.request.use(
  (req) => {
    let state = store.getState();
    if (!state.auth || !state.auth.token || !state.auth.token.token) return req;
    let userInfo = state.auth;
    req.headers.authorization = "Bearer " + userInfo.token.token;
    return req;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default axios;
