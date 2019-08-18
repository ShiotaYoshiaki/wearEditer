import { INCREMENT, DECREMENT } from "../constants/actionTypes";

export function increment(TEST) {
  return { type: INCREMENT, payload: TEST };
}

export function decrement() {
  return { type: DECREMENT };
}






