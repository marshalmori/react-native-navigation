import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Inicio = ({navigation}) => {
  const visitarNosotros = () => {
    navigation.navigate('Nosotros');
  };

  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button title="Nosotros" onPress={() => visitarNosotros()} />
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

export default Inicio;
