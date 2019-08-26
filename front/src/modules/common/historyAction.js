import { MOVE_PAGE } from "../../constants/actionTypes";

export function movePage(page) {
  return { type: MOVE_PAGE, payload: page };
}