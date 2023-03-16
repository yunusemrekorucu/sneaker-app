import React from 'react';

import BigShoesImg from '@/assets/images/big-shoes.png';
import MiniShoes from '@/assets/images/mini-shoes.png';
import {AppButton, AppFlatList, AppIcon, AppImage, AppScreen, Block, Text} from '@/components';
import {useStyledTag} from '@/hooks';
import {COLORS, window} from '@/theme';
import {ICONS} from '@/utils';

const ProductDetailScreen = () => {
  const MiniImageBox = useStyledTag(Block, 'h-60 w-60 rounded-10 center middle bg-white p-4 mr-12');
  return (
    <AppScreen scroll>
      <Block style={{width: window.width / 1.6}}>
        <Text fs-26 medium>
          Nike Air Max 270 Essential
        </Text>
        <Text fs-16 light>
          Men’s Shoes
        </Text>
        <Text fs-24 medium>
          $179.39
        </Text>
      </Block>
      <Block center middle h-180>
        <AppImage url={BigShoesImg} width={'100%'} height={'100%'} />
      </Block>
      <Block mt-40 row>
        {new Array(5).fill(
          <MiniImageBox>
            <AppImage url={MiniShoes} width={'100%'} height={'100%'} />
          </MiniImageBox>,
        )}
      </Block>
      <Block>
        <Text text-lightGray mt-30 fs-14 styles={{lineHeight: 24}}>
          The Max Air 270 unit delivers unrivaled, all-day comfort. The sleek, running-inspired design roots you to everything Nike...
        </Text>
        <Text styles={{textAlign: 'right'}} primary mt-20>
          Read More
        </Text>
      </Block>
      <Block row center h-50 justify-between mt-30 px-20>
        <AppButton bg-white rounded-50 w-50 center mr-10 middle h-50 icon={<AppIcon name={ICONS.heart} color="#000" size={24} />} />
        <AppButton
          style={{height: '100%', flex: 0.8, backgroundColor: COLORS.brightPrimary, borderRadius: 12}}
          icon={<AppIcon name={ICONS.shoppingBag} color="#fff" size={24} />}
          title="Add to Cart"
          titleColor="#fff"
        />
      </Block>
    </AppScreen>
  );
};

export default ProductDetailScreen;
