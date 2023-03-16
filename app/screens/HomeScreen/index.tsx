import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

import Banner from '@/assets/images/banner.png';
import {AppBottomSheet, AppFlatList, AppIcon, AppImage, AppInput, AppScreen, Block, Text} from '@/components';
import CategoryButton from '@/components/CategoryButton';
import ProductCard from '@/components/ProductCard';
import Routes from '@/navigation/Routes';
import {COLORS} from '@/theme';
import {ICONS} from '@/utils';

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation() as any;

  const categorys = [
    {
      id: 1,
      categoryName: 'All Shoes',
      isSelected: true,
    },
    {
      id: 2,
      categoryName: 'Outdoor',
      isSelected: false,
    },
    {
      id: 3,
      categoryName: 'Tennis',
      isSelected: false,
    },
    {
      id: 4,
      categoryName: 'Tennis',
      isSelected: false,
    },
    {
      id: 5,
      categoryName: 'Tennis',
      isSelected: false,
    },
  ];

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
          <AppIcon name={ICONS.Filter} color="#fff" size={24} />
        </Block>
      </Block>
      <Block>
        <Block mt-24>
          <Text fs-16>Select Category</Text>
          {/* //TODO: Horizontal Scroll */}
          <Block mt-20>
            <AppFlatList horizontal scrollEnabled={false} data={categorys} renderItem={CategoryButton} />
          </Block>
        </Block>
        <Block mt-20>
          <Block row justify-between center>
            <Text fs-16>Popular Shoes</Text>
            <Text fs-13 primary>
              See all
            </Text>
          </Block>

          <AppFlatList
            scrollEnabled={false}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            numColumns={2}
            data={[1, 2]}
            renderItem={() => <ProductCard onPress={() => navigation.navigate(Routes.PRODUCT_DETAIL_SCREEN)} />}
          />
        </Block>
        <Block mt-20>
          <Block row justify-between center>
            <Text fs-16>New Arrivals</Text>
            <Text fs-13 primary>
              See all
            </Text>
          </Block>
          <Block mt-10>
            <AppImage url={Banner} width={'100%'} height={115} />
          </Block>
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
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: COLORS.brightPrimary,
    marginLeft: 12,
  },
});

export default HomeScreen;
