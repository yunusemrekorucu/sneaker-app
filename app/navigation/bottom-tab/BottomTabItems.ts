import {ICONS} from '../../utils/icon-enums';
import Routes from '../Routes';
import HomeStack from '../stacks/HomeStack';

import {FavoriteScreen, MyCartScreen} from '@/screens';

export const BottomTabItemList = [
  {
    label: 'HomePage',
    icon: ICONS.notification,
    name: Routes.HOME_STACK,
    component: HomeStack,
    headerShown: false,
  },
  {
    label: 'My Cart',
    icon: ICONS.notification,
    name: Routes.MY_CART_SCREEN,
    component: MyCartScreen,
    headerShown: false,
  },
  {
    label: 'Favorite',
    icon: ICONS.notification,
    name: Routes.FAVORITE_SCREEN,
    component: FavoriteScreen,
    headerShown: false,
  },
];
