import { INCREMENT, DECREMENT } from "../constants/actionTypes";

const initialState = {
  state: 0,
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state;
  }
}
