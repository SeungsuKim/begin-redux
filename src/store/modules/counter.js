import { createAction, handleActions } from "redux-actions";

const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  number: 0
};

export default handleActions({
  [INCREMENT]: ({ number }) => ({ number: number + 1 }),
  [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);