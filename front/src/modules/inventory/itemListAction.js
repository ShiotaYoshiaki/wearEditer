import { CHANGE_TO_GRID_VIEW, CHANGE_TO_LIST_VIEW, REQUEST_LOAD_ITEM_CONTENT_LIST } from "../../constants/actionTypes";

export function changeToListView() {
    return { type: CHANGE_TO_LIST_VIEW };
}

export function changeToGridView() {
    return { type: CHANGE_TO_GRID_VIEW };
}

export function loadImageContentList() {
    return { type: REQUEST_LOAD_ITEM_CONTENT_LIST };
}