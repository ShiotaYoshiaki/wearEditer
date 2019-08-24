import { OPEN_SETTING, OPEN_SIDE_MENU, REQUEST_ACCOUNT_INFO } from "../../constants/actionTypes";

export function openSideMenu(TEST) {
  return { type: OPEN_SIDE_MENU, payload: TEST };
}

export function openSetting() {
  return { type: OPEN_SETTING };
}

export function loadAccountInfo() {
  return { type: REQUEST_ACCOUNT_INFO };
}
