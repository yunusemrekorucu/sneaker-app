import React from 'react';

import {Block, Text} from '../Common';

import {COLORS} from '@/theme';

const CategoryButton = ({primary, item}: any) => {
  return (
    <Block bg-white py-10 px-4 w-110 mr-10 center middle rounded-6 style={{backgroundColor: item.isSelected === 'primary' ? COLORS.brightPrimary : COLORS.white}}>
      <Text styles={{color: primary && 'white'}}>{item.categoryName}</Text>
    </Block>
  );
};

export default CategoryButton;
