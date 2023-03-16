import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {AppFlatList, AppScreen, Text} from '@/components';
import ProductCard from '@/components/ProductCard';
import Routes from '@/navigation/Routes';

const FavoriteScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <AppScreen>
      <AppFlatList
        scrollEnabled={true}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        data={[1, 2, 3, 4]}
        renderItem={() => <ProductCard favorite onPress={() => navigation.navigate(Routes.PRODUCT_DETAIL_SCREEN)} />}
      />
    </AppScreen>
  );
};

export default FavoriteScreen;
