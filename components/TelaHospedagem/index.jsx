import React from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function TelaHospedagem(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>Pousadas e Hotéis em Paraty
      </Text>
      <Text style={{ marginBottom: 20, textAlign: 'center' }}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.
      </Text>
      <View style={styles.cards}>
        <Image
          source={require('../../assets/imagens/hospedagens/hospedagem01.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
        <Text style={[styles.text, { marginBottom: 5 }]}>Pousada Missanga</Text>
        <Text>Valor médio: R$ 350,00</Text>
        <Text> Localização: Próx. à Av. Roberto Silveira</Text>
      </View>
      <View style={styles.cards}>
        <Image
          source={require('../../assets/imagens/hospedagens/hospedagem02.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
        <Text style={[styles.text, { marginBottom: 5 }]}>Pousada Morro do Forte</Text>
        <Text>Valor médio: R$ 450,00</Text>
        <Text> Localização: Próximo à Praia - Pontal</Text>
      </View>
      <View style={styles.cards}>
        <Image
          source={require('../../assets/imagens/hospedagens/hospedagem03.png')}
          style={[styles.image, { fontWeight: 'bold' }]}
        />
        <Text style={[styles.text, { marginBottom: 5 }]}>Pousada Porto Imperial
        </Text>
        <Text>Valor médio: R$ 550,00</Text>
        <Text> Localização: Centro Histórico</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beceff',
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
  }
});

