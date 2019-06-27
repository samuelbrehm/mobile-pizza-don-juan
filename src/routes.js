import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SignInUp from '~/pages/SignInUp';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignInUp,
    Main,
  }),
);

export default Routes;
