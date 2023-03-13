import React from 'react';

import Logo from '@/assets/images/logo.png';
import {AppImage} from '@/components';
import {COLORS} from '@/theme';

export const createNavigationOptions = (props: any) => {
  const {screen} = props;
  const options = {
    // headerRight: () => <HeaderRight {...props} />,
    headerStyle: {color: '#fff'},
    headerTitle: screen.title ? screen.title : () => <AppImage url={Logo} width={135} height={46} />,
    // headerBackTitleVisible: false,
    headerTruncatedBackTitle: '',
    headerBackImageStyle: {},
    headerBackTitleStyle: {
      fontSize: 15,
    },
    headerRightContainerStyle: {},
    headerLeftContainerStyle: {},
    headerTitleStyle: {
      fontSize: 15,
      color: COLORS.white,
    },
  };

  return screen.headerShown ? options : {headerShown: false};
};
