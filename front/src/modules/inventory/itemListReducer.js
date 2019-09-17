import { CHANGE_TO_GRID_VIEW, CHANGE_TO_LIST_VIEW, COMPLETE_LOAD_ITEM_CONTENT_LIST, OPEN_ITEM_DETAIL_MODAL, CLOSE_ITEM_DETAIL_MODAL, COMPLETE_CHANGE_TO_DISPLAY_ITEM_LIST, COMPLETE_CLEAR_EDIT_TAG_ITEM_LIST } from "../../constants/actionTypes";
import { HOW_TO_DISPLAY } from "../../constants/parameter";
import { isMobile } from "../../constants/functions";

const initialState = {
  howToDisplay: (!isMobile()) ? HOW_TO_DISPLAY.LIST : HOW_TO_DISPLAY.GRID,
  list: [],
  order: [],
  modal: {
    isOpen: false,
  },
  tags: [],
  editTags: {
    edits: [],
    list: [],
  },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TO_GRID_VIEW:
      return {
        ...state,
        howToDisplay: HOW_TO_DISPLAY.GRID,
      };

    case CHANGE_TO_LIST_VIEW:
      return {
        ...state,
        howToDisplay: HOW_TO_DISPLAY.LIST,
      }

    case COMPLETE_LOAD_ITEM_CONTENT_LIST:
      return {
        ...state,
        ...action.payload,
      }

    case OPEN_ITEM_DETAIL_MODAL:
      return {
        ...state,
        modal: {
          isOpen: true,
          itemId: action.payload,
        }
      }

    case CLOSE_ITEM_DETAIL_MODAL:
      return {
        ...state,
        modal: {
          isOpen: false,
        }
      }

    case COMPLETE_CHANGE_TO_DISPLAY_ITEM_LIST:
      return {
        ...state,
        ...action.payload,
      }

    case COMPLETE_CLEAR_EDIT_TAG_ITEM_LIST:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
}
