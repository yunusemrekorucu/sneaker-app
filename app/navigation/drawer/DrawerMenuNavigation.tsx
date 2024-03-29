import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerMenuItemList} from './DrawerMenuItems';

const Drawer = createDrawerNavigator();

export const DrawerMenuNavigaiton = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        {DrawerMenuItemList.map((item: any) => (
          <Drawer.Screen key={item.label} options={{headerShown: item.headerShown}} name={item.label} component={item.component} />
        ))}
      </Drawer.Navigator>
    </>
  );
};
