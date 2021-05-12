import React from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  history.push("/questions");
  return <></>;
};

export default Landing;
