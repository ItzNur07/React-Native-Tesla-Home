import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StatusBar,
} from 'react-native';
import CartList from './Components/CarList';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <View>
      <Navbar />
      <CartList />
      <StatusBar style="auto" />
    </View>
  );
}
