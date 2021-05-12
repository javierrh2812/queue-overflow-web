import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import QuestionList from "./questionList/index";
import Question from "./question/index";
import AskQuestion from "./askQuestion";
import { AuthRoute } from "../routes";

export default function Questions() {
  console.log("QUESTIONS");
  return (
    <Container maxWidth="md" style={{paddingTop: '1.45rem', paddingRight: '150px'}}>
      <Switch>
        <Route exact path="/questions/" component={QuestionList} />
        <AuthRoute path="/questions/ask" component={AskQuestion} />
        <Route path="/questions/:id" component={Question} />
      </Switch>
    </Container>
  );
}
