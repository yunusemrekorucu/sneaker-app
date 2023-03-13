import routes from '../../Routes';
import {IScreen} from '../Models/IScreen';

import HomeScreen from '@/screens/HomeScreen';
import ProductDetailScreen from '@/screens/ProductDetailScreen';

const Screens = [
  {
    title: null,
    name: routes.HOME_SCREEN,
    component: HomeScreen,
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
