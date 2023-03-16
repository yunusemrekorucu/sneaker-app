import {ICONS} from '../../utils/icon-enums';
import Routes from '../Routes';
import CartStack from '../stacks/CartStack';
import FavoriteStack from '../stacks/FavoriteStack';
import HomeStack from '../stacks/HomeStack';

export const BottomTabItemList = [
  {
    label: 'HomePage',
    icon: ICONS.Home,
    name: Routes.HOME_STACK,
    component: HomeStack,
    headerShown: false,
  },
  {
    label: 'My Cart',
    icon: ICONS.Cart,
    name: Routes.MY_CART_STACK,
    component: CartStack,
    headerShown: false,
  },
  {
    label: 'Favorite',
    icon: ICONS.Heart,
    name: Routes.FAVORITE_STACK,
    component: FavoriteStack,
    headerShown: false,
  },
];
