import { CHANGE_TO_GRID_VIEW, CHANGE_TO_LIST_VIEW, COMPLETE_LOAD_ITEM_CONTENT_LIST } from "../../constants/actionTypes";
import { HOW_TO_DISPLAY } from "../../constants/parameter";

const initialState = {
  howToDisplay:  HOW_TO_DISPLAY.LIST,
}

export default function reducer(state=initialState, action) {
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
        itemList: action.action.payload,
      }

    default:
      return state;
  }
}
