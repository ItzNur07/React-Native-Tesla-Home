import React from 'react';
import { View, Text, Image } from 'react-native';

const logo = require('../assets/images/logo.png');
const menu = require('../assets/images/menu.png');

const Navbar = () => {
  return (
    <View
      style={{
        width: '100%',
        top: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 100,
        paddingHorizontal:20,
      }}>
      <Image
        style={{ width:100, height: 10}}
        source={logo}
        resizeMethod="contain"
      />
      <Image
        style={{ width: 20, height: 20 }}
        source={menu}
        resizeMethod="contain"
      />
    </View>
  );
};

export default Navbar;
