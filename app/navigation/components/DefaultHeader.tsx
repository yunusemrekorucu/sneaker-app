import React, {FC, useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';

import {AppButton, AppIcon} from '@/components';
import {useTheme} from '@/hooks';
import {COLORS, FONTS} from '@/theme';
import {ICONS} from '@/utils';

const BackButton = ({props, navigation}: any) =>
    props.canGoBack && <AppButton bg-primary ml-10 w-40 h-40 type="icon" onPress={() => navigation.goBack()} icon={<AppIcon name={ICONS.chevronLeft} size={32} color={'#ffffff'} />} />;

export const Header: FC<any> = ({navigationOptions, navigation}) => {
    const {colors} = useTheme();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                // backgroundColor: colors.headerBackgroundColor,
            },
            headerTitleStyle: {
                ...FONTS.title,
                color: colors.headerColor,
            },
            headerTitleAlign: 'center',
            headerLeft: (props: any) => <BackButton props={props} navigation={navigation} />,
            ...navigationOptions,
        });
    }, [navigation, colors, navigationOptions]);

    return (
        <>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
        </>
    );
};
