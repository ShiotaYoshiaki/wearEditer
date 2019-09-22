import { OPEN_ADD_CONTENT_MODAL, CLOSE_ADD_CONTENT_MODAL, MOVE_CONTENT_ADD_MODAL } from "../../constants/actionTypes";


export function openAddContentModal() {
  return { type: OPEN_ADD_CONTENT_MODAL };
}

export function closeAddContentModal() {
  return { type: CLOSE_ADD_CONTENT_MODAL };
}

export function moveAddContentModal(step) {
  return { 
    type: MOVE_CONTENT_ADD_MODAL,
    payload: step,
  };
}
