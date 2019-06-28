import { call, put } from 'redux-saga/effects';

import { AsyncStorage } from 'react-native';

import api from '~/services/api';
import NavigationService from '~/services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@Pizza:token');

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    const user = yield call(api.post, 'user', { email, password });

    console.tron.log(`User depois da consulta ${user.data.typeUser}`);

    if (user.data.typeUser === 'client') {
      yield call([AsyncStorage, 'setItem'], '@Pizza:token', response.data.token);

      yield put(AuthActions.signInSuccess(response.data.token));

      NavigationService.navigate('Main');
    } else {
      console.tron.log('User not permission');
    }

    // Fazer o navigation
  } catch (err) {
    console.tron.log(err);
  }
}

export function* signUp({
  username, email, password, typeUser,
}) {
  try {
    const response = yield call(api.post, 'users', {
      username,
      email,
      password,
      typeUser,
    });

    yield call([AsyncStorage, 'setItem'], '@Pizza:token', response.data.token.token);

    yield put(AuthActions.signUpSuccess(response.data.token.token));
    // Fazer o navigation
  } catch (err) {
    console.tron.log(err);
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
  // Fazer navigations para login
}
