import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  Dimensions,
} from 'react-native';
//import custom components
import Button from './Button';


const CarItem = ({ car }) => {
  return (
    <View>
      {/*car container start */}
      <View style={{ width: '100%', height: Dimensions.get('window').height }}>
        <ImageBackground
          source={car.image}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            justifyContent: 'center',
          }}
          resizeMode="cover"></ImageBackground>
        {/*car container head title start */}
        <View style={{ marginTop: '30%', alignItems: 'center' }}>
          <Text style={{ fontSize: 40, fontWeight: '500' }}>{car.name}</Text>
          <Text style={{ fontSize: 16, color: '#5c5e62' }}>
            {car.tagline}{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              {car.taglineCTA}
            </Text>
          </Text>
        </View>
        {/*car container head title end */}
        {/*button start */}
        <View style={{ position: 'absolute', bottom: 50, width: '100%' }}>
          <Button
            name="Custom Order"
            bgcolor="#171a20cc"
            textcolor="#ffffff"
            onPress={() => Alert.alert('Custom Order Pressed!')}
          />
          <Button
            name="Existing Inventory"
            bgcolor="#ffffffa9"
            textcolor="#171a20"
            onPress={() => Alert.alert('Existing Inventory Pressed!')}
          />
        </View>
        {/*button end */}
      </View>
      {/*car container end */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CarItem;
