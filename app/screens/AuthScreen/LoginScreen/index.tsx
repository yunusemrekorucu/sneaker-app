import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import {AppButton, AppIcon, AppInput, AppScreen, Block, Text} from '@/components';
import Routes from '@/navigation/Routes';
import {COLORS} from '@/theme';
import {ICONS} from '@/utils';

const LoginScreen = () => {
    const [loader, setLoader] = useState(false);
    const navigation = useNavigation() as any;

    const handleLogin = () => {
        setLoader(true);
        setTimeout(() => {
            navigation.replace(Routes.MAIN_TABS_ROOT);
            setLoader(false);
        }, 3000);
    };

    return (
        <AppScreen>
            <Block flex middle>
                <Text t-center fs-32 medium>
                    Hello Again!
                </Text>
                <Text t-center fs-16 px-40 mt-10>
                    Fill your details or continue with social media
                </Text>
                <Block mt-40>
                    <AppInput animatedPlaceholder="Email Address" />
                </Block>
                <Block mt-20>
                    <AppInput secureTextEntry={true} type="password" animatedPlaceholder="Password" />
                    <Block pressable right onPress={() => navigation.navigate(Routes.FORGOT_PASSWORD_SCREEN)}>
                        <Text md mt-6>
                            Recovery Password
                        </Text>
                    </Block>
                </Block>
                <Block mt-40>
                    <AppButton loading={loader} onPress={() => handleLogin()} bg-primary title="Sign In" />
                    <AppButton border titleColor={COLORS.black} mt-10 icon={<AppIcon name={ICONS.google} size={24} color={'#000'} />} title="Sign In with Google" />
                </Block>
            </Block>
            <Block absolute row middle center style={{bottom: 30, width: '110%'}}>
                <Text>New User? </Text>
                <Block pressable onPress={() => navigation.navigate(Routes.REGISTER_SCREEN)}>
                    <Text medium>Create Account</Text>
                </Block>
            </Block>
        </AppScreen>
    );
};

export default LoginScreen;
