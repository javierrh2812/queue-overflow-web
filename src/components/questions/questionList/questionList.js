import React from "react";
import QuestionCard from "./questionCard";
import {Grid} from '@material-ui/core'
const QuestionList = (props) => {
  const questionList = props.data;
  return (
    <Grid container spacing={2}>
      {questionList.map((question) => (
        <QuestionCard key={question._id} question={question} />
      ))}
    </Grid>
  );
};
export default QuestionList;
