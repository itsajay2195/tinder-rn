import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import tw from "twrnc"
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';


export default function App() {
  return (
    <NavigationContainer>
     
      <AuthProvider> 
      
        <StackNavigator />
      </AuthProvider>
  
    </NavigationContainer>

  );
}


// {/*HOC - Passes out the core auth stuff to the */}
// {/*HOC - Children */}
//  {/*HOC - Higher order component */}
// {/*parent*/}