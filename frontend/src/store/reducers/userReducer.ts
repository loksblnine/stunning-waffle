import jwt_decode from "jwt-decode";
import {ACTIONS} from "../../utils/constants";

type Decoded = {
  email: string,
  role: number
}
type initialState = {
  isReady: boolean,
  role: number,
  email: string,
}

const initialState: initialState = {
  isReady: false,
  role: 0,
  email: "",
};

const userReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case ACTIONS.USER.SET_USER: {
      /*set to action
      const {token} = action.payload;
      localStorage.setItem('token', token);
      let decoded: Decoded = jwt_decode(token);
      */
      return {
        ...state,
        role: action.payload.role,
        email: action.payload.email,
        isReady: true
      };
    }
    case ACTIONS.USER.SET_READY_USER:
      return {
        ...state,
        isReady: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
