import React from 'react';
import { View, Text, Pressable } from 'react-native';

const Button = ({ name, bgcolor, textcolor, onPress }) => {
  return (
    <View style={{ width: '100%', padding: 10 }}>
      <Pressable
        style={{
          height: 40,
          backgroundColor: bgcolor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}
        onPress={() => onPress()}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            textTransform: 'uppercase',
            color: textcolor,
          }}>
          {name}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
