import React from 'react';
import { View, Text, Button } from 'react-native';

function SegundaTela({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Segunda Tela</Text>
      <Button
        title="Ir para a Terceira Tela"
        onPress={() => navigation.navigate('TerceiraTela')}
      />
    </View>
  );
}

export default SegundaTela;
