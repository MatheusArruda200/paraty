import React from 'react';
import { Link, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaHospedagem from '../TelaHospedagem';
import TelaRestaurantes from '../TelaRestaurantes';
import TelaPasseios from '../TelaPasseios';




export default function TelaInicial(props) {
    return (
        <ScrollView

            style={styles.scrollView}
        >

            <View style={styles.container}>

                <Text style={{ fontSize: 26, color: 'black', marginBottom: 10, fontWeight: 'bold' }}>Paraty</Text>
                <Text style={{ fontSize: 20, color: 'black', marginBottom: 20 }}>Saiba o que visitar em Paraty.</Text>
                <Image
                    source={require('../../assets/imagens/01.png')}
                    style={styles.image}
                />
                {/* <Button
                title="Abrir Menu"
                onPress={() => props.navigation.navigate('StreetView')}
            /> */}
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('TelaRestaurantes')}
                    style={styles.button}
                ><Text style={{color: 'white'}}>Ver Restaurantes</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('TelaPasseios')}
                    style={styles.button}
                ><Text style={{color: 'white'}}>Ver Passeios</Text></TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('TelaHospedagem')}
                    style={styles.button}
                ><Text style={{color: 'white'}}>Ver Hospedagens</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'grey',
        padding: 35,

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#979797',
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        marginTop: '40%'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#372d00',
        padding: 10,
        // borderRadius: 5,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    }
});
