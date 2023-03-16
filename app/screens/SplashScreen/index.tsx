import React, {memo, useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import ISplashScreen from '@/assets/images/splash-screen.png';
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
      const navigationName = Routes.MAIN_TABS_ROOT;
      navigation.replace(navigationName);
    }, 2000);
  }, []);

  return (
    <Block flex>
      <AppImage style={{flex: 1, width: window.width, height: window.height}} url={ISplashScreen} />
    </Block>
  );
};

const styles = StyleSheet.create({});

export default memo(SplashScreen);
