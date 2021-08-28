import { EVENT_LOADED, EVENT_FAIL } from "../action/event";

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EVENT_LOADED:
      return {
        ...state,
        events: payload
      };
    case EVENT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
