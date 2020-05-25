import {
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
} from "../actions/types";
import _ from "lodash";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return _.omit(state, payload);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, "id") };
    default:
      return state;
  }
};
