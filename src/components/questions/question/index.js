import React, { useEffect, useState } from "react";
import { Questions } from "services/web_services";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import AnswerList from "./answerList";
import AnswerQuestion from "../answerQuestion";
import Rating from "components/common/rating";

const Question = (props) => {
  const [question, setQuestion] = useState(false);

  useEffect(() => {
    Questions.get(props.match.params.id).then((res) => setQuestion(res.data));
  }, []);

  if (!question) return <div>Cargando ...</div>;

  const { title, description, _id, answers, votes } = question;

  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h3" color="primary">
            {title}{" "}
          </Typography>
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={1} children={<Rating votes={votes} />} />
          <Grid item xs={10} dangerouslySetInnerHTML={{ __html: description }} />
        </Grid>
        <AnswerQuestion id={_id} />
        <br />
        <Typography variant="h6" color="primary">
          {" "}
          {`${answers.length} respuesta/s`}{" "}
        </Typography>
        <AnswerList answers={answers} />
      </CardContent>
    </Card>
  );
};
export default Question;
