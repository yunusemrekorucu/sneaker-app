import React from 'react';
import {StyleSheet} from 'react-native';

import {AppIcon, AppImage, Block, Text} from '../Common';

import ShoesImg from '@/assets/images/shoes.png';
import {COLORS, window} from '@/theme';
import {ICONS} from '@/utils';

const ProductCard = ({onPress, favorite}: any) => {
  return (
    <Block pressable onPress={onPress} style={styles.card}>
      <Block style={styles.heart}>
        <AppIcon name={ICONS.Heart} size={18} color="#000" />
      </Block>
      {favorite ? (
        <Block absolute right-14 bottom-20 row>
          <Block w-12 h-12 rounded-50 bg-primary />
          <Block w-12 h-12 rounded-50 bg-secondary ml-6 />
        </Block>
      ) : (
        <Block style={styles.plus} pressable onPress={() => console.log('sepete eklendi')}>
          <AppIcon name={ICONS.Plus} size={18} color="#fff" />
        </Block>
      )}
      <Block middle flex>
        <Block center>
          <AppImage width={125} height={81} url={ShoesImg} />
        </Block>
        <Block mt-10>
          <Text primary>SELLER</Text>
          <Text mt-4>Nike Jordan</Text>
          <Text mt-4>$752.00</Text>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: 'white',
    width: window.width / 2.4,
    height: window.height / 4,
    marginTop: 10,
    borderRadius: 18,
    overflow: 'hidden',
  },
  heart: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  plus: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: COLORS.brightPrimary,
    borderTopLeftRadius: 18,
    width: 40,
    height: 40,
    bottom: 0,
    right: 0,
    zIndex: 3,
  },
});

export default ProductCard;
