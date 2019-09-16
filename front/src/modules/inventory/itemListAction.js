import { CHANGE_TO_GRID_VIEW, CHANGE_TO_LIST_VIEW, REQUEST_LOAD_ITEM_CONTENT_LIST, OPEN_ITEM_DETAIL_MODAL, CLOSE_ITEM_DETAIL_MODAL, REQUEST_CHANGE_TO_DISPLAY_ITEM_LIST } from "../../constants/actionTypes";

export function changeToListView() {
    return { type: CHANGE_TO_LIST_VIEW };
}

export function changeToGridView() {
    return { type: CHANGE_TO_GRID_VIEW };
}

export function loadImageContentList() {
    return { type: REQUEST_LOAD_ITEM_CONTENT_LIST };
}

export function openItemDetailModal(itemId) {
    return { type: OPEN_ITEM_DETAIL_MODAL, payload: itemId };
}

export function closeItemDetailModal() {
    return { type: CLOSE_ITEM_DETAIL_MODAL };
}

export function changeToDisplayItemList(column, tag) {
    return {
        type: REQUEST_CHANGE_TO_DISPLAY_ITEM_LIST,
        payload: {
            column,
            tag,
        }
    }
}
