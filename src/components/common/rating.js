import React from "react";
import {
  ExpandLess as UpIcon,
  ExpandMore as DownIcon,
  VerifiedUser as VerifiedIcon,
} from "@material-ui/icons";

const Rating = ({ votes, verified }) => {
  return (
    <div style={{ justifyItems: "center", display: "grid" }}>
      <div>
        <UpIcon />
      </div>
      <div> {votes} </div>
      <div>
        <DownIcon />
      </div>
      {verified && <VerifiedIcon />}
    </div>
  );
};
export default Rating;
