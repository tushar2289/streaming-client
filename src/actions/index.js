import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
import history from "../history";

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const createStream = (payload) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...payload, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });

  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch, getState) => {
  const stream = getState().streams[id];

  if (stream) {
    dispatch({
      type: FETCH_STREAM,
      payload: stream,
    });
    return;
  }

  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, payload) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, payload);

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });

  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
  history.push("/");
};
