import { OPEN_ADD_CONTENT_MODAL, CLOSE_ADD_CONTENT_MODAL, MOVE_CONTENT_ADD_MODAL, CHANGE_TAG_NAME_ADD_CONTENT_MODAL, COMPLETE_CREATE_TAG_ADD_CONTENT_MODAL, FAIL_CREATE_TAG_ADD_CONTENT_MODAL, COMPLETE_DELETE_TAG_ADD_CONTENT_MODAL, SET_ADD_CONTENT, FAIL_RECOGNITION_ADD_CONTENT_MODAL, COMPLETE_RECOGNITION_ADD_CONTENT_MODAL } from "../../constants/actionTypes";

const initialState = {
  isOpen: false,
  step: 0,
  tags: [],
  data: '',
  part: '',
  color: '',
  shop: {},
  candidate: '',
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

    case CHANGE_TAG_NAME_ADD_CONTENT_MODAL:
      return {
        ...state,
        candidate: action.payload,
      };

    case COMPLETE_CREATE_TAG_ADD_CONTENT_MODAL:
      return {
        ...state,
        ...action.payload,
      };

    case FAIL_CREATE_TAG_ADD_CONTENT_MODAL:
      return {
        ...state,
        ...action.payload,
      };

    case COMPLETE_DELETE_TAG_ADD_CONTENT_MODAL:
      return {
        ...state,
        ...action.payload,
      };

    case SET_ADD_CONTENT:
      return {
        ...state,
        ...action.payload,
      };

    case COMPLETE_RECOGNITION_ADD_CONTENT_MODAL:
      return {
        ...state,
        ...action.payload,
      };

    case FAIL_RECOGNITION_ADD_CONTENT_MODAL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
