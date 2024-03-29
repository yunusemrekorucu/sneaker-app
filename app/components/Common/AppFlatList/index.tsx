/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {ActivityIndicator, FlatList as FList, ScrollView, View} from 'react-native';

import {random} from 'lodash';

import Block from '../Block';

import {COLORS} from '@/theme';

const FlatList = ({
  data,
  renderItem,
  usePagination = false,
  loading,
  onEndReached,
  onEndReachedThreshold = 0.8,
  refreshing,
  onRefresh,
  preloader,
  preloaderLength,
  preloaderWidth,
  preloaderHeight,
  preloaderStyle,
  preloaderContainerStyle,
  horizontal = false,
  sticky = false,
  numColumns,
  columnWrapperStyle,
  contentContainerStyle,
  initialScrollIndex,
  scrollEnabled,
  reference,
  ...props
}: any) => {
  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <Block center midle>
        <ActivityIndicator animating color={COLORS.black} size="large" style={{marginTop: 15, marginBottom: 15}} />
      </Block>
    );
  };

  const PreloaderRenderItem = () => <Block preloader height={preloaderHeight} width={preloaderWidth} preloaderStyle={preloaderStyle} style={[{marginBottom: 10}, preloaderContainerStyle]} />;

  return preloader ? (
    <>
      {horizontal ? (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} horizontal style={[preloaderContainerStyle]}>
          {[...Array(preloaderLength)]?.map(() => (
            <PreloaderRenderItem key={`${random(1000)}_preloader_item`} />
          ))}
        </ScrollView>
      ) : (
        <View
          style={[
            {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            },
            preloaderContainerStyle,
          ]}>
          {[...Array(preloaderLength)]?.map(() => (
            <PreloaderRenderItem key={`${random(1000)}_preloader_item`} />
          ))}
        </View>
      )}
    </>
  ) : (
    <FList
      ref={reference}
      data={data && data.length > 0 ? data : []}
      renderItem={renderItem}
      ListFooterComponent={usePagination ? renderFooter : null}
      onEndReached={usePagination ? onEndReached : null}
      onEndReachedThreshold={onEndReachedThreshold}
      initialScrollIndex={initialScrollIndex || 0}
      onRefresh={onRefresh}
      refreshing={refreshing}
      keyExtractor={(_item, index) => 'flat_list_item_' + index}
      contentContainerStyle={contentContainerStyle}
      scrollEnabled={scrollEnabled}
      numColumns={numColumns}
      columnWrapperStyle={columnWrapperStyle}
      removeClippedSubviews
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={horizontal}
      stickyHeaderIndices={sticky ? [0] : null}
      {...props}
    />
  );
};

export default memo(FlatList);
