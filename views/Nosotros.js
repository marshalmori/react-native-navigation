import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Nosotros = ({navigation, route}) => {
  const {clienteId} = route.params;

  const visitarInicio = () => {
    navigation.navigate('Inicio');
    // navigation.goBack();
    // navigation.push('Inicio');
  };

  return (
    <View style={styles.contenedor}>
      <Text>{clienteId}</Text>
      <Button title="Ir a Inicio" onPress={() => visitarInicio()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nosotros;
