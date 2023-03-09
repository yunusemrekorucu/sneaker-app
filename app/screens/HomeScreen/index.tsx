import React from 'react';

import {AppButton, AppIcon, AppInput, AppScreen, Block, Text} from '@/components';
import {ICONS} from '@/utils';

const HomeScreen = () => {
    return (
        <AppScreen>
            <Block>
                <AppInput icon={ICONS.search} placeholder="Looking for shoes" />
                <Block border>
                    <AppButton />
                </Block>
            </Block>
        </AppScreen>
    );
};

export default HomeScreen;
