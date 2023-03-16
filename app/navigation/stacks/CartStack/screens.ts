import routes from '../../Routes';
import {IScreen} from '../Models/IScreen';

import {MyCartScreen} from '@/screens';

const Screens = [
  {
    title: 'My Cart',
    name: routes.FAVORITE_SCREEN,
    component: MyCartScreen,
    headerShown: true,
  },
] as Array<IScreen>;

export default Screens;
