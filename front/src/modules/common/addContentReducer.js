import { OPEN_ADD_CONTENT_MODAL, CLOSE_ADD_CONTENT_MODAL, MOVE_CONTENT_ADD_MODAL } from "../../constants/actionTypes";

const initialState = {
  isOpen: false,
  step: 0,
  tags: [],
  data: '',
  part: '',
  color: '',
  shop: {},
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

    case MOVE_CONTENT_ADD_MODAL:
      return {
        ...state,
        step: action.payload,
      };

    default:
      return state;
  }
}
