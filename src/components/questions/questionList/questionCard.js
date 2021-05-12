import React from "react";
import { Card, CardContent, Grid, Typography, } from "@material-ui/core";

import { Link } from "react-router-dom";

const QuestionCard = (props) => {
  const {
    question: { _id, title, description, votes, author, createdAt },
  } = props;

  const formattedDate= (date) => {
    date = new Date(date)
    return date.toLocaleString() 
  }


  return (
    <Grid item xs={12}>
      <Card variant="outlined">
        <CardContent>
          <Link to={`/questions/${_id}`}>
            <Typography style={{ fontSize: "1.22rem" }} color="secondary">{title}</Typography>
          </Link>

          <Typography style={{ opacity: "0.6", fontSize: "0.9rem" }} color="primary" >
            {`${author.name} preguntó el ${formattedDate(createdAt)}`}
          </Typography>

          <Grid container>
            <Grid item xs={1}> <div>{`votos:${votes}`}</div> </Grid>
            <Grid item xs={11}> <div dangerouslySetInnerHTML={{__html: description}}/> </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default QuestionCard;
