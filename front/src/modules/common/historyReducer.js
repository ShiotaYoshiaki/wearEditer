import { MOVE_PAGE } from "../../constants/actionTypes";
import { MENU } from "../../constants/parameter";

const initialState = {
  page: MENU.TOP,
  pageHistory: [],
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case MOVE_PAGE:
      const beforePage = state.page;
      const addHistory = state.pageHistory;
      addHistory.push(beforePage);
      return {
        ...state,
        page: action.payload,
        pageHistory: addHistory,
      };

    default:
      return state;
  }
}
