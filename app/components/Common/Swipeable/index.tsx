import React, {memo} from 'react';
import {Animated, StyleSheet} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {Props, SwipItem} from './swipeable';
import AppIcon from '../AppIcon';

import {Block, Text} from '@/components';

function ISwipeable({leftItems, rightItems, children}: Props) {
  const renderLeftActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <React.Fragment>
        {leftItems?.length > 0 && (
          <React.Fragment>
            {leftItems.map((item: SwipItem, index: number) => (
              <RectButton key={index} onPress={item.onPress} style={[{backgroundColor: item?.background ?? '#388e3c'}, styles.leftAction]}>
                <Animated.View style={[styles.actionText, {transform: [{scale: trans}]}]}>
                  {item?.icon && <AppIcon name={item.icon.name} size={item.icon.size ?? 20} color={item.icon.color} />}
                  <Text styles={item.textColor ? {color: item.textColor, ...item?.titleStyle} : {...item?.titleStyle}}>{item.text}</Text>
                  {item?.icon2 && <AppIcon name={item.icon2.name} size={item.icon2.size ?? 20} color={item.icon2.color} />}
                </Animated.View>
              </RectButton>
            ))}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <React.Fragment>
        {rightItems?.length > 0 && (
          <React.Fragment>
            {rightItems.map((item: SwipItem, index: number) => (
              <RectButton key={index} onPress={item.onPress} style={[{backgroundColor: item?.background ?? 'red'}, styles.rightAction]}>
                <Animated.View style={[styles.actionText, {transform: [{scale: trans}]}]}>
                  <Block middle center style={{height: '100%'}}>
                    {item?.icon && <AppIcon name={item.icon.name} size={item.icon.size ?? 20} color={item.icon.color} />}
                    <Text styles={item.textColor ? {color: item.textColor, ...item?.titleStyle} : {...item?.titleStyle}}>{item.text}</Text>
                  </Block>
                </Animated.View>
              </RectButton>
            ))}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  leftAction: {
    marginRight: 14,
    borderRadius: 12,
    justifyContent: 'center',
    height: 104,
  },
  rightAction: {
    marginLeft: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 104,
  },
  actionText: {
    padding: 10,
    width: 64,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default memo(ISwipeable);
