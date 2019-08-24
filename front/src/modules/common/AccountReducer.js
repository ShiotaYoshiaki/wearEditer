import { COMPLETE_ACCOUNT_INFO } from "../../constants/actionTypes";

const initialState = {
  basic: {},
  setting: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_ACCOUNT_INFO:
      return {
        ...state,
        basic: action.payload,
      };

    default:
      return state;
  }
}
