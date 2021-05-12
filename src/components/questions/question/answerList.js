import React from "react";
import { Grid } from "@material-ui/core";
import Rating from 'components/common/rating'
const AnswerList = (props) => {
  const { answers } = props;
  return (
    <Grid container spacing={2}>
      {answers.map((answer) => (
        <AnswerCard key={answer._id}answer={answer} />
      ))}
    </Grid>
  );
};
export default AnswerList;

const AnswerCard = (props) => {
  const { answer } = props;

  return (
    <Grid item xs={12} style={{borderBottom: '0.06rem solid gray'}}>
      <Grid container>
        <Grid item xs={1}> <Rating votes={answer.votes} verified={answer.verified}/> </Grid>
        <Grid item xs={10}>
          <div dangerouslySetInnerHTML={{ __html: answer.description }} />
        </Grid>
      </Grid>
    </Grid>
  );
};
