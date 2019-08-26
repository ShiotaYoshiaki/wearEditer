import { OPEN_SIDE_TAB, CLOSE_SIDE_TAB } from "../../constants/actionTypes";

export function openSideTab() {
  return { type: OPEN_SIDE_TAB };
}

export function closeSideTab() {
  return { type: CLOSE_SIDE_TAB}
}
