import { OPEN_SETTING, OPEN_SIDE_TAB, REQUEST_ACCOUNT_INFO, CLOSE_SETTING } from "../../constants/actionTypes";

export function openSideTab(TEST) {
  return { type: OPEN_SIDE_TAB, payload: TEST };
}

export function openSetting() {
  return { type: OPEN_SETTING };
}

export function closeSetting() {
  return { type: CLOSE_SETTING };
}

export function loadAccountInfo() {
  return { type: REQUEST_ACCOUNT_INFO };
}
