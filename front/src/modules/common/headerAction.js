import { OPEN_SETTING, OPEN_SIDE_MENU } from "../../constants/actionTypes";

export function openSideMenu(TEST) {
  return { type: OPEN_SIDE_MENU, payload: TEST };
}

export function openSetting() {
  return { type: OPEN_SETTING };
}
