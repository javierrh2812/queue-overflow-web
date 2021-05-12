import React from "react";
import { Questions } from "services/web_services";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "redux/actions/auth";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  InputBase,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#AAAAAA",
    "&:hover": {
      backgroundColor: "#BBBBBB",
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: "44%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
export default function Appbar() {
  console.log("RENDERING APPBAR");
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('')

  const onClickTitle = () => history.push("/");
  const onClickLogin = () => history.push("/login");
  const onClickLogon = () => {
    dispatch(signOut());
    history.push("/");
  };

  const onSearch = async(e) => {
    e.preventDefault();
    const questionList = await Questions.all(search)
    dispatch({type: 'SET_QUESTION_LIST', payload: questionList.data})
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar disableGutters={false} variant="dense">
          <Typography
            className={classes.title}
            variant="h5"
            noWrap
            onClick={onClickTitle}
          >
            Queue Overflow
          </Typography>

          <div className={classes.search}>
            <form onSubmit={onSearch}>
              <InputBase
                value= {search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </div>
          <div className={classes.grow} />
          {auth.name && <Typography variant="h6">{auth.name}  | </Typography>}
          <div className={classes.sectionDesktop}>
            {auth ? (
              <Button color="inherit" onClick={onClickLogon}>
                Logon
              </Button>
            ) : (
              <Button color="inherit" onClick={onClickLogin}>
                Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
