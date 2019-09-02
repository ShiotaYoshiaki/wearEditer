import { TAGGING_IMAGE_REQUEST, OPEN_EDIT_TAG_MODAL, CLOSE_EDIT_TAG_MODAL } from "../../constants/actionTypes";


export function openEditTagModal(param) {
  return { type: OPEN_EDIT_TAG_MODAL, param };
}

export function closeEditTagModal() {
  return { type: CLOSE_EDIT_TAG_MODAL };
}

export function taggingImage(param) {
  return { type: TAGGING_IMAGE_REQUEST, param };
}

