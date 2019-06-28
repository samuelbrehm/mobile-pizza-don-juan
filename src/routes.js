import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SignInUp from '~/pages/SignInUp';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignInUp,
        Main,
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignInUp',
      },
    ),
  );
}
