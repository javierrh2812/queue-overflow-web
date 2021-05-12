import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "./button";

const AuthButton = ({ onClick, ...rest }) => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const onError = () => window.confirm("debes autenticarte") && history.push("/login");
  const onButtonClick = () => (auth ? onClick() : onError());
  return <Button {...rest} onClick={onButtonClick} />;
};
export default AuthButton;
