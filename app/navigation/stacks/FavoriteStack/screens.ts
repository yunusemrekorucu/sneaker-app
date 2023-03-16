import routes from '../../Routes';
import {IScreen} from '../Models/IScreen';

import {FavoriteScreen, ProductDetailScreen} from '@/screens';

const Screens = [
  {
    title: 'Favorite',
    name: routes.FAVORITE_SCREEN,
    component: FavoriteScreen,
    headerShown: true,
  },
  {
    title: 'Sneaker Shop',
    name: routes.PRODUCT_DETAIL_SCREEN,
    component: ProductDetailScreen,
    headerShown: true,
  },
] as Array<IScreen>;

export default Screens;
