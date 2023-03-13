import React, {FC, useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';

import {AppIcon, Block} from '@/components';
import {useTheme} from '@/hooks';
import {COLORS, FONTS} from '@/theme';
import {ICONS} from '@/utils';

const BackButton = ({props, navigation}: any) =>
  props.canGoBack ? (
    <Block style={{height: 44, width: 44, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginLeft: 20}} pressable onPress={() => navigation.goBack()}>
      <AppIcon name={ICONS.chevronLeft} size={26} color={'#000'} />
    </Block>
  ) : (
    <Block style={{alignItems: 'center', justifyContent: 'center', marginLeft: 20}} pressable onPress={() => console.log('open drawer')}>
      <AppIcon name={ICONS.hamburger} size={21} color={COLORS.brightPrimary} />
    </Block>
  );

const RightButton = ({navigation}: any) => (
  <Block style={{height: 44, width: 44, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginRight: 20}} pressable onPress={() => console.log('sepetim')}>
    <AppIcon name={ICONS.shoppingBag} size={24} color={'#000'} />
  </Block>
);

export const Header: FC<any> = ({navigationOptions, navigation}) => {
  const {colors} = useTheme();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false, // applied here
      headerStyle: {
        backgroundColor: colors.lightGray,
        alignItems: 'center',
      },
      headerTitleStyle: {
        ...FONTS.title,
        color: colors.black,
      },
      headerTitleAlign: 'center',
      headerLeft: (props: any) => <BackButton navigation={navigation} props={props} />,
      headerRight: (props: any) => <RightButton navigation={navigation} props={props} />,
      ...navigationOptions,
    });
  }, [navigation, colors, navigationOptions]);

  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
    </>
  );
};
