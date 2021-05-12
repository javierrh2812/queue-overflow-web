import { SIGN_IN, CHECK_AUTH, SIGN_OUT } from '../actions/types'

const initState = null;

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...action.payload};
        case CHECK_AUTH:
            return {...action.payload};
        case SIGN_OUT:
            return null;
        default:
            return state;
    }
};

export default authReducer;
