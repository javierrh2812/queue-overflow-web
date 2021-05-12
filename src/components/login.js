import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, TextField, Button, FormHelperText } from "@material-ui/core";
import { Auth } from "services/web_services";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "redux/actions/auth";
//import {signIn} from '../../redux/actions/auth/actionDispatcher'

export default function Login() {
  console.log('LOGIN');
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = () => {
    Auth.login({ email, password })
      .then((res) => {
        setError('')
        sessionStorage.setItem("session", res.data);
        dispatch(signIn(res.data));
        history.push('/')
      })
      .catch((e) => setError(e.message));
  };

  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="email"
              label="Correo"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="password"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth color="primary" size="large" onClick={onSubmit}>
              Ingresar
            </Button>
          </Grid>
          {error !== "" && (
            <Grid item xs={12}>
              Error
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
