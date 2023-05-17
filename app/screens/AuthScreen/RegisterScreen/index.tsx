import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {AppButton, AppIcon, AppInput, AppScreen, Block, Text} from '@/components';
import Routes from '@/navigation/Routes';
import {COLORS} from '@/theme';
import {ICONS} from '@/utils';

const RegisterScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <AppScreen customStyle={{backgroundColor: 'white'}}>
      <Block flex>
        <Block pressable w-40 h-40 rounded-50 mt-50 mb-30 middle center bg-lightGray onPress={() => navigation.goBack()}>
          <AppIcon name={ICONS.Arrow} color="#000" size={21} />
        </Block>
        <Block middle>
          <Text t-center fs-32 medium>
            Register Account
          </Text>
          <Text t-center fs-16 px-40 mt-10>
            Fill your details or continue with social media
          </Text>
          <Block mt-40>
            <AppInput animatedPlaceholder="Name Surname" />
          </Block>
          <Block mt-5 mb-5>
            <AppInput animatedPlaceholder="Email Address" />
          </Block>
          <Block>
            <AppInput secureTextEntry={true} type="password" animatedPlaceholder="Password" />
          </Block>
          <Block mt-40>
            <AppButton bg-primary title="Sign Up" />
            <AppButton border titleColor={COLORS.black} mt-10 icon={<AppIcon name={ICONS.google} size={24} color={'#000'} />} title="Sign Up with Google" />
          </Block>
        </Block>
      </Block>
      <Block absolute row middle center style={{bottom: 30, width: '110%'}}>
        <Text>Already Have Account? </Text>
        <Block pressable onPress={() => navigation.navigate(Routes.LOGIN_SCREEN)}>
          <Text medium>Log In</Text>
        </Block>
      </Block>
    </AppScreen>
  );
};

export default RegisterScreen;
