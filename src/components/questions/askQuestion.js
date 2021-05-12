import React from "react";
import { Typography, Grid, TextField } from "@material-ui/core";
import CkEditor from "components/common/ckeditor";
import Button from "components/common/authButton";
import { Questions } from "services/web_services";

const AskQuestion = (props) => {
  const [title, setTitle] = React.useState("Título");
  const [question, setQuestion] = React.useState("My question...");
  const saveQuestion = () => {
    if (title == "" || question == "")
      return alert("Tu pregunta debe tener un titulo y una descripcion");
    else
      return Questions.create({ title, description: question })
        .then((_) => props.history.push("/questions"))
        .catch((e) => alert(e));
  };

  return (
    <Grid container justify="center">
      <Typography variant="h2"> Tu pregunta: </Typography>
      <Grid item xs={10}>
        <TextField
          variant="outlined"
          name="title"
          label="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={10}>
        <CkEditor data={question} setData={setQuestion} />
      </Grid>
      <Grid item xs={10}>
        <Button
          text="Guardar"
          size="small"
          style={{ marginTop: "1rem" }}
          onClick={saveQuestion}
        />
      </Grid>
    </Grid>
  );
};
export default AskQuestion;
