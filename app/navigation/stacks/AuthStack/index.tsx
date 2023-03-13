import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import screens from './screens';
import {createNavigationOptions} from '../../header/DefaultHeader';
import {IScreen} from '../Models/IScreen';

const Stack = createStackNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator>
      {screens.map((screen: IScreen, index: number) => (
        <Stack.Screen key={index} name={screen.name} component={screen.component} options={props => createNavigationOptions({screen, ...props})} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
