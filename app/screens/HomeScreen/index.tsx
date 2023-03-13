import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

import {AppBottomSheet, AppIcon, AppInput, AppScreen, Block, Text} from '@/components';
import CategoryButton from '@/components/CategoryButton';
import ProductCard from '@/components/ProductCard';
import Routes from '@/navigation/Routes';
import {COLORS} from '@/theme';
import {ICONS} from '@/utils';

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation() as any;

  return (
    <AppScreen scroll>
      <Block row center>
        <Block flex>
          <DropShadow
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.1,
              shadowRadius: 5,
            }}>
            <AppInput icon={<AppIcon name={ICONS.search} color="#6a6a6a" size={21} />} placeholder="Looking for shoes" />
          </DropShadow>
        </Block>
        <Block pressable onPress={() => setVisible(true)} style={[styles.filterButton]}>
          <AppIcon name={ICONS.equalizer} color="#fff" size={18} />
        </Block>
      </Block>
      <Block>
        <Block mt-24>
          <Text fs-16>Select Category</Text>
          <Block row mt-10>
            <CategoryButton primary title="All Shoes" />
            <CategoryButton title="Outdoor" />
            <CategoryButton title="Tennis" />
          </Block>
        </Block>
        <Block mt-12>
          <Block row>
            <Text fs-16>Popular Shoes</Text>
            <Text fs-16>See all</Text>
          </Block>
          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            numColumns={2}
            data={[1, 2]}
            renderItem={() => <ProductCard onPress={() => navigation.navigate(Routes.PRODUCT_DETAIL_SCREEN)} />}
          />
        </Block>
      </Block>
      {/* <AppButton title="detail" onPress={() => navigation.navigate(Routes.PRODUCT_DETAIL_SCREEN)} /> */}
      <AppBottomSheet onClose={() => setVisible(false)} isVisible={visible}>
        <Text>filters</Text>
      </AppBottomSheet>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '90deg'}],
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: COLORS.brightPrimary,
    marginLeft: 12,
  },
});

export default HomeScreen;
