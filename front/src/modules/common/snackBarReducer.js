import { OPEN_SNACK_BAR, CLOSE_SNACK_BAR } from "../../constants/actionTypes";

const initialState = {
  isOpen: false,
  type: '',
  message: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SNACK_BAR:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_SNACK_BAR:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
