import { SIGN_IN, CHECK_AUTH, SIGN_OUT } from "./types";

export const signIn = (userInfo) => {
    return {
      type: SIGN_IN,
      payload: userInfo,
    };
};

export const isAuth = () => {
  let userInfo = sessionStorage.getItem("session");
  if (!userInfo) return { type: SIGN_OUT };
  return {
    type: CHECK_AUTH,
    payload: userInfo,
  };
};

export const signOut = () => {
  sessionStorage.removeItem('session')
  return { type: SIGN_OUT };
};
