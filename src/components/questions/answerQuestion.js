import React from "react";
import { Typography } from "@material-ui/core";
import CkEditor from "components/common/ckeditor";
import Button from "components/common/authButton";
import { Answers } from "services/web_services";

const AnswerQuestion = (props) => {
  const [answer, setAnswer] = React.useState("My answer...");
  const saveAnswer = () => {
    if (answer == "" || answer == "My answer...")
      return alert(
        "Debes ingresar una descripción o detalle del problema o pregunta"
      );
    else
      return Answers.create({ description: answer, question: props.id })
        .then((_) => window.location.reload())
        .catch((e) => alert(e));
  };

  return (
    <>
      <Typography variant="h6">
        Conoces a alguien que pueda responderla? Comparte un link a esta{" "}
        <a href="#">pregunta</a>
      </Typography>
      <Typography variant="h5"> Tu respuesta: </Typography>
      <CkEditor data={answer} setData={setAnswer} />
      <Button
        text="Responder"
        size="small"
        style={{ marginTop: "1rem" }}
        onClick={saveAnswer}
      />
    </>
  );
};
export default AnswerQuestion;
