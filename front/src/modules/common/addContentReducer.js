import { OPEN_ADD_CONTENT_MODAL, CLOSE_ADD_CONTENT_MODAL } from "../../constants/actionTypes";

const initialState = {
  isOpen: false,
  tags: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_ADD_CONTENT_MODAL:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_ADD_CONTENT_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
}
