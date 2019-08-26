import { OPEN_SIDE_TAB, CLOSE_SIDE_TAB } from "../../constants/actionTypes";

const initialState = {
  isOpen: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDE_TAB:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_SIDE_TAB:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
}
