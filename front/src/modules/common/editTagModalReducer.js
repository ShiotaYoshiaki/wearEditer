import { TAGGING_IMAGE_SUCCESS, OPEN_EDIT_TAG_MODAL, CLOSE_EDIT_TAG_MODAL } from "../../constants/actionTypes";

const initialState = {
  isOpen: false,
  tags: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_EDIT_TAG_MODAL:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_EDIT_TAG_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    case TAGGING_IMAGE_SUCCESS:
      return {
        ...state,
        tags: action.payload.tags,
      };

    default:
      return state;
  }
}
