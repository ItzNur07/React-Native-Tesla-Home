import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from '../Components/CarItem';

import cars from './cars';

const CartList = () => {
  return (
    <View style={{ width: '100%' }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={cars}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CartList;
