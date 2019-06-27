import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import '~/config/StatusBarConfig';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
