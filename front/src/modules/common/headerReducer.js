import { OPEN_SETTING } from "../../constants/actionTypes";

const initialState = {
  state: 0,
  content: {},
}

export default function reducer(state = initialState, action) {
  const result = { ...state };
  const content = result.content;
  switch (action.type) {
    case OPEN_SETTING:
      content.isSettingOpen = true;
      return {
        ...state,
        content,
      };

    // case OPEN_SIDE_TAB:
    //   content.isSideOpen = true;
    //   return {
    //     ...state,
    //     content,
    //   };

    default:
      return state;
  }
}
