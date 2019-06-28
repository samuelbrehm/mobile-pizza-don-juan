import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signOut: null,
  signUpRequest: ['username', 'email', 'password', 'typeUser'],
  signUpSuccess: ['token'],
  initCheckSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */
const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
});

/* Reducers */
export const successSignIn = (state, { token }) => state.merge({ signedIn: true, token });

export const successSignUp = (state, { token }) => state.merge({ signedIn: true, token });

export const logout = state => state.merge({ signedIn: false, token: null });

export const checkSuccess = state => state.merge({ authChecked: true });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: successSignIn,
  [Types.SIGN_UP_SUCCESS]: successSignUp,
  [Types.SIGN_OUT]: logout,
  [Types.INIT_CHECK_SUCCESS]: checkSuccess,
});
