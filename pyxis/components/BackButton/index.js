import React from 'react';
import { View } from 'react-native';

import PButton from './../PButton';

const BackButton = ({onPress}) => {
  return (
    <View>
      <PButton title="Voltar" onPress={onPress}></PButton>
    </View>
  );
};

export default BackButton;