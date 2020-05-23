import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
