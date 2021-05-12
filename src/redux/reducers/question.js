import { SET_QUESTION_LIST } from "../actions/types";

const initState = {
  questionList: [],
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_QUESTION_LIST:
      return { questionList: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
