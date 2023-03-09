import routes from '../../Routes';
import {IScreen} from '../Models/IScreen';

import {ForgotPasswordScreen, LoginScreen, RegisterScreen} from '@/screens';

const Screens = [
    {
        title: 'Login',
        name: routes.LOGIN_SCREEN,
        component: LoginScreen,
        headerShown: false,
    },
    {
        title: 'Register',
        name: routes.REGISTER_SCREEN,
        component: RegisterScreen,
        headerShown: false,
    },
    {
        title: 'Forgot Password',
        name: routes.FORGOT_PASSWORD_SCREEN,
        component: ForgotPasswordScreen,
        headerShown: false,
    },
] as Array<IScreen>;

export default Screens;
