import React, {FC} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Host} from 'react-native-portalize';

import {BottomTabContainer} from './BottomTabContainer';
import {BottomTabItemList} from './BottomTabItems';

const Tab = createBottomTabNavigator() as any;

export const BottomTabNavigation: FC<any> = () => {
  return (
    <Host>
      <Tab.Navigator tabBar={(props: any) => <BottomTabContainer {...props} />}>
        {BottomTabItemList.map((item: any) => (
          <Tab.Screen key={item.name} options={{headerShown: item.headerShown}} name={item.name} component={item.component} />
        ))}
      </Tab.Navigator>
    </Host>
  );
};
