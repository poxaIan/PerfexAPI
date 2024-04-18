import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PrimeiraTela from '../screens/PrimeiraTela';
import SegundaTela from '../screens/SegundaTela';
import TerceiraTela from '../screens/TerceiraTela';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="PrimeiraTela">
      <Stack.Screen name="PrimeiraTela" component={PrimeiraTela} />
      <Stack.Screen name="SegundaTela" component={SegundaTela} />
      <Stack.Screen name="TerceiraTela" component={TerceiraTela} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
