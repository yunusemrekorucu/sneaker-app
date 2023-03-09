import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {random} from 'lodash';

import screens from './screens';

import Dialog from '@/components/Common/Dialog';
import {createNavigationOptions} from '@/navigation/header/DefaultHeader';
import Routes from '@/navigation/Routes';

/**
 * fade animate trasition navigation
 * @param {*} {current, closing}
 */
export const forFade = ({current}: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      {screens.map((screen: any) => (
        <Stack.Screen
          key={`${random(1000)}_main_stack_screen`}
          name={screen.name}
          component={screen.component}
          options={props => ({
            ...screen.options,
            ...createNavigationOptions({screen, ...props}),
          })}
        />
      ))}
      <Stack.Group screenOptions={{presentation: 'transparentModal', headerShown: false}}>
        <Stack.Screen
          name={Routes.ALERT}
          component={Dialog}
          options={{
            cardStyleInterpolator: forFade,
            cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.7)'},
            gestureEnabled: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStack;
