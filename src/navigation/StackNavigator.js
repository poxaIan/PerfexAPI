// navigation/StackNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PrimeiraTela from '../screens/PrimeiraTela';
import SegundaTela from '../screens/SegundaTela';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PrimeiraTela" component={PrimeiraTela} />
      <Stack.Screen name="SegundaTela" component={SegundaTela} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
