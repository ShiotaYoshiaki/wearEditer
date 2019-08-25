import { CHANGE_TO_GRID_VIEW, CHANGE_TO_LIST_VIEW, COMPLETE_LOAD_ITEM_CONTENT_LIST, OPEN_ITEM_DETAIL_MODAL, CLOSE_ITEM_DETAIL_MODAL } from "../../constants/actionTypes";
import { HOW_TO_DISPLAY } from "../../constants/parameter";

const initialState = {
  howToDisplay: HOW_TO_DISPLAY.LIST,
  modal: {
    isOpen: false,
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
        list: action.action.payload,
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

    default:
      return state;
  }
}
