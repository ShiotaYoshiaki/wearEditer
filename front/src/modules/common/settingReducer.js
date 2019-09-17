import { OPEN_SETTING, CLOSE_SETTING } from "../../constants/actionTypes";

const initialState = {
  isOpen: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SETTING:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_SETTING:
      return {
        ...state,
        isOpen: false,
      };


    default:
      return state;
  }
}
