import routes from '../../Routes';
import {IScreen} from '../Models/IScreen';

import HomeScreen from '@/screens/HomeScreen';

const Screens = [
    {
        title: 'Home',
        name: routes.HOME_SCREEN,
        component: HomeScreen,
        headerShown: true,
    },
] as Array<IScreen>;

export default Screens;
