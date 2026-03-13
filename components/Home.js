import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {

  const [nombre, setNombre] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escribe tu nombre</Text>

      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Button
        title="Ir a la segunda pantalla"
        onPress={() => navigation.navigate('Info', { nombre })}
        disabled={nombre.trim().length === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  }
});