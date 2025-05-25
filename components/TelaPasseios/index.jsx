import React from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function TelaPasseios(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>Passeios em Paraty</Text>
      <Text style={{ marginBottom: 20, textAlign: 'center' }}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja dois exemplos:
      </Text>
      <View style={styles.cards}>
        <Text style={[styles.text, { marginBottom: 5 }]}>Tirolesa</Text>
        <Image
          source={require('../../assets/imagens/passeios/passeio01.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
      </View>
      <View style={styles.cards}>
        <Text style={[styles.text, { marginBottom: 5 }]}>Rafting
</Text>
        <Image
          source={require('../../assets/imagens/passeios/passeio02.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
      </View>
      <View style={styles.cards}>
        <Text style={[styles.text, { marginBottom: 5 }]}>Canoagem no mangue
</Text>
        <Image
          source={require('../../assets/imagens/passeios/passeio03.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9fac0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  cards: {
    backgroundColor: '#fff',
    width: 320,
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: '#979797',
    borderWidth: 1,
  },
  image: {
    width: 300,
    height: 80,
    marginBottom: 5
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});