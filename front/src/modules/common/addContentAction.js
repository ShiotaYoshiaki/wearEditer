import { OPEN_ADD_CONTENT_MODAL, CLOSE_ADD_CONTENT_MODAL, MOVE_CONTENT_ADD_MODAL, CHANGE_TAG_NAME_ADD_CONTENT_MODAL, REQUEST_CREATE_TAG_ADD_CONTENT_MODAL, REQUEST_DELETE_TAG_ADD_CONTENT_MODAL } from "../../constants/actionTypes";


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

export function changeTagNameAddContentModal(name) {
  return {
    type: CHANGE_TAG_NAME_ADD_CONTENT_MODAL,
    payload: name,
  };
};

export function createTagAddContentModal(tag) {
  return {
    type: REQUEST_CREATE_TAG_ADD_CONTENT_MODAL,
    payload: tag,
  }
}

export function deleteTagAddContentModal(tag) {
  return {
    type: REQUEST_DELETE_TAG_ADD_CONTENT_MODAL,
    payload: tag,
  }
}
