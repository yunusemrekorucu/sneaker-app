import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import welcomePage from '@/assets/images/welcome-page-image.png';
import welcomePage2 from '@/assets/images/welcome-page-image2.png';
import welcomePage3 from '@/assets/images/welcome-page-image3.png';
import {AppButton, AppFlatList, AppImageBackground, Block, Text} from '@/components';
import Routes from '@/navigation/Routes';

const WelcomePage = () => {
    const navigation: StackNavigationProp<any> = useNavigation();
    const [step, setStep] = useState<any>(1);
    const flat = useRef<never>(null);

    const data = [
        {
            id: 1,
            header: 'WELCOME TO NIKE',
            backgroundImage: welcomePage,
        },
        {
            id: 2,
            bigTitle: 'Let’s Start Journey With Nike',
            title: 'Smart, Gorgeous & Fashionable Collection Explor Now',
            backgroundImage: welcomePage2,
        },
        {
            id: 3,
            title: 'There Are Many Beautiful And Attractive Plants To Your Room',
            bigTitle: 'You Have the Power To',
            backgroundImage: welcomePage3,
        },
    ];

    const stepStyle = useAnimatedStyle(() => {
        return {};
    });

    const StepPage = ({item}: any) => {
        return (
            <Block style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#1483C2'}}>
                <AppImageBackground style={{width: '100%', height: '100%'}} source={item.backgroundImage}>
                    <>
                        <Block flex center style={{paddingVertical: '34%'}}>
                            <Text fs-30 w-200 white styles={{textAlign: 'center', fontWeight: '700'}}>
                                {item?.header}
                            </Text>
                        </Block>
                        <Block mb-200 center px-40>
                            <Text white fs-30 t-center bold>
                                {item?.bigTitle}
                            </Text>
                            <Text white fs-16 t-center mt-10>
                                {item?.title}
                            </Text>
                        </Block>
                    </>
                </AppImageBackground>
            </Block>
        );
    };

    return (
        <Block flex>
            <AppFlatList scrollEnabled={false} reference={flat} pagingEnabled horizontal renderItem={StepPage} data={data} />
            <Block style={{position: 'absolute', bottom: 50, left: 20, right: 20}}>
                <Block middle center px-20 mb-50>
                    <Block row h-4 w-106>
                        <Animated.View style={[styles.block, stepStyle, {flex: 1}]} />
                        <Animated.View style={[styles.block, stepStyle, {marginHorizontal: 8}]} />
                        <Animated.View style={[styles.block, stepStyle]} />
                        <Block />
                    </Block>
                </Block>
                <AppButton
                    bg-white
                    absolute
                    onPress={() => {
                        if (step > 2) {
                            navigation.replace(Routes.AUTH_STACK);
                        } else {
                            setStep(step + 1);
                        }

                        flat.current.scrollToIndex({
                            animated: true,
                            index: step === 3 ? 2 : step,
                        });
                    }}
                    titleColor={'black'}
                    title={step === 1 ? 'Get Started' : 'Next'}
                />
            </Block>
        </Block>
    );
};

const styles = StyleSheet.create({
    block: {
        width: 26,
        borderWidth: 2,
        height: 4,
        borderRadius: 12,
    },
});

export default WelcomePage;
