import axios from "./axios";

const API = "http://localhost:3001/api";

const req = {
  get: (url) => axios.get(`${API}${url}`),
  post: (url, body) => axios.post(`${API}${url}`, body),
};
export const Questions = {
  all: (q) => req.get(encodeURI(`/question/getQuestionList?q=${q}`)),
  create: (body) => req.post("/question/saveQuestion", body),
  get: (id) => req.get(`/question/getQuestion/${id}`),
};
export const Answers = {
  create: (body) => req.post("/answer/saveAnswer", body),
};
export const Users = {
  create: (body) => req.post("/user/saveUser", body),
};

export const Auth = {
  login: (body) => req.post("/auth/login", body),
};
