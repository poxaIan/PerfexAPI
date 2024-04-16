// screens/PrimeiraTela.js
import React from 'react';
import {View, Button} from 'react-native';

function PrimeiraTela({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Ir para a Segunda Tela"
        onPress={() => navigation.navigate('SegundaTela')}
      />
    </View>
  );
}

export default PrimeiraTela;
