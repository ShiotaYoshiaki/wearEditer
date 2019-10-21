import { OPEN_SNACK_BAR, CLOSE_SNACK_BAR } from "../../constants/actionTypes";


export function openSnackBar() {
  return { type: OPEN_SNACK_BAR };
}

export function closeSnackBar() {
  return { type: CLOSE_SNACK_BAR };
}
