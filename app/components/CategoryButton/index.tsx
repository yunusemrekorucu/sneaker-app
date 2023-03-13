import React from 'react';

import {Block, Text} from '../Common';

import {COLORS} from '@/theme';

const CategoryButton = ({title, primary}: any) => {
  return (
    <Block bg-white py-10 px-4 w-110 mr-10 center middle rounded-6 style={{backgroundColor: primary ? COLORS.brightPrimary : COLORS.white}}>
      <Text styles={{color: primary && 'white'}}>{title}</Text>
    </Block>
  );
};

export default CategoryButton;
