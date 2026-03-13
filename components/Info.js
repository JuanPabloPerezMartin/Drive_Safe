import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Info({ navigation, route }) {
  const { nombre } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>
        Bienvenido {nombre} al
      </Text>

      <Text style={styles.texto}>
        Instituto Tecnológico Superior de Valladolid
      </Text>

      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  texto: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  }
});