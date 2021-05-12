import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "components/common/button";
import { Questions } from "services/web_services";
import QuestionList from "./questionList";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { SET_QUESTION_LIST} from 'redux/actions/types'

const LastQuestions = (props) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const questionList = useSelector(state=>state.question.questionList)

  const getQuestionList = async () => {
    const questions = await Questions.all();
    dispatch({type: SET_QUESTION_LIST, payload: questions.data})
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  return (
    <div>
      <Grid container alignItems="center" spacing={2} justify="space-between">
        <Grid item>
          <Typography variant="h4" style={{ marginLeft: "1rem" }}>
            Todas las preguntas
          </Typography>
        </Grid>
        <Grid item>
          <Button
            text="Nueva pregunta"
            style={{ marginRight: "1rem" }}
            onClick={() => history.push("/questions/ask")}
          />
        </Grid>
      </Grid>
      <QuestionList data={questionList} />
    </div>
  );
};
export default LastQuestions;
