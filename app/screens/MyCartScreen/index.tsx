import React from 'react';

import Shoes from '@/assets/images/row-shoes.png';
import {AppFlatList, AppImage, AppScreen, Block, Swipeable, Text} from '@/components';
import {COLORS} from '@/theme';

const MyCartScreen = () => {
  return (
    <AppScreen>
      <AppFlatList
        ListHeaderComponent={() => (
          <Block mb-20>
            <Text fs-16 medium>
              3 Item
            </Text>
          </Block>
        )}
        data={[1, 2, 3]}
        renderItem={() => (
          <Swipeable
            leftItems={[
              {
                text: '1',
                textColor: COLORS.white,
                icon: {
                  name: 'Plus',
                  size: 24,
                  color: COLORS.white,
                },
                icon2: {
                  name: '',
                  size: 24,
                  color: COLORS.white,
                },
                background: COLORS.brightPrimary,
              },
            ]}
            rightItems={[
              {
                text: '',
                textColor: COLORS.white,
                icon: {
                  name: 'Trash',
                  size: 28,
                  color: COLORS.white,
                },
                background: 'red',
              },
            ]}>
            <Block row center h-104 rounded-12 bg-white mb-20>
              <Block ml-10 w-87 h-85 rounded-12 bg-lightGray middle center>
                <AppImage url={Shoes} width={'80%'} height={'80%'} />
              </Block>
              <Block ml-20>
                <Text fs-16 mb-6>
                  Nike Club Max
                </Text>
                <Text fs-16 medium>
                  $584.95
                </Text>
              </Block>
            </Block>
          </Swipeable>
        )}
      />
    </AppScreen>
  );
};

export default MyCartScreen;
