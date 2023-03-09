import {BottomTabNavigation} from '../../bottom-tab/BottomTabNavigation';
import Routes from '../../Routes';
import AuthStack from '../AuthStack';
import HomeStack from '../HomeStack';

import {SplashScreen, WelcomePage} from '@/screens';

const Screens = [
  {
    name: Routes.SPLASH_SCREEN,
    component: SplashScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: Routes.WELCOME_SCREEN,
    component: WelcomePage,
    options: {
      headerShown: false,
    },
  },
  {
    name: Routes.AUTH_STACK,
    component: AuthStack,
    options: {
      headerShown: true,
    },
  },
  {
    name: Routes.HOME_STACK,
    component: HomeStack,
    options: {
      headerShown: true,
    },
  },
  {
    name: Routes.MAIN_TABS_ROOT,
    component: BottomTabNavigation,
    options: {
      headerShown: true,
    },
  },
];

export default Screens;
