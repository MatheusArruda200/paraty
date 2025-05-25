import React from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function TelaRestaurantes(props) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>Bares e Restaurantes</Text>
      <Text style={{marginBottom: 20, textAlign: 'center'}}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
      </Text>
      <View style={styles.cards}>
        <Image
          source={require('../../assets/imagens/restaurantes/restaurante01.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
        <Text style={[styles.text, {marginBottom: 5}]}>Armazén Mar</Text>
        <Text>Localização: Rod Rio-Santos</Text>
      </View>
      <View style={styles.cards}>
        <Image
          source={require('../../assets/imagens/restaurantes/restaurante02.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
        <Text style={[styles.text, {marginBottom: 5}]}>Bendita's Restaurante</Text>
        <Text>Localização: Centro Histórico</Text>
      </View>
      <View style={styles.cards}>
        <Image
          source={require('../../assets/imagens/restaurantes/restaurante03.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
        <Text style={[styles.text, {marginBottom: 5}]}>Sereia do Mar PIZZA-BAR</Text>
        <Text>Localização: Praia do Jabaquara</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e3e4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  cards: {
    backgroundColor: '#fff',
    width: 320,
    marginBottom: 5,
    padding:10,
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
  }
});