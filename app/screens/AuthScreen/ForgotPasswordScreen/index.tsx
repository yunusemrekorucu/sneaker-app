import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {AppButton, AppIcon, AppInput, AppScreen, Block, Text} from '@/components';
import {ICONS} from '@/utils';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation() as any;
    return (
        <AppScreen>
            <Block pressable w-40 h-40 rounded-50 mt-50 middle center bg-lightGray onPress={() => navigation.goBack()}>
                <AppIcon name={ICONS.chevronLeft} color="#000" size={18} />
            </Block>
            <Block flex pt-30>
                <Text t-center fs-32 medium>
                    Forgot Password
                </Text>
                <Text t-center fs-16 px-40 mt-10>
                    Enter your Email account to reset your password
                </Text>
                <Block mt-20>
                    <AppInput secureTextEntry={true} type="password" animatedPlaceholder="Password" />
                </Block>
                <Block mt-40>
                    <AppButton bg-primary title="Reset Password" />
                </Block>
            </Block>
        </AppScreen>
    );
};

export default ForgotPasswordScreen;
