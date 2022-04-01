import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import tw from "twrnc"
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

  );
}


