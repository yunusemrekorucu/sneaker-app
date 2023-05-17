import React, {memo, useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {images} from '@/assets/images';
import {AppImage, Block} from '@/components';
import Routes from '@/navigation/Routes';
import {window} from '@/theme';

const SplashScreen = () => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const progress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress.current, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      //   const navigationName = Routes.WELCOME_SCREEN;
      const navigationName = Routes.WELCOME_SCREEN;
      navigation.replace(navigationName);
    }, 2000);
  }, []);

  return (
    <Block flex>
      <AppImage style={{flex: 1, width: window.width, height: window.height}} url={images.splashScreen} />
    </Block>
  );
};

export default memo(SplashScreen);
