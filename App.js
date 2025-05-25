import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaInicial from './components/TelaInicial';
import TelaHospedagem from './components/TelaHospedagem';
import TelaRestaurantes from './components/TelaRestaurantes';
import TelaPasseios from './components/TelaPasseios';
import { StyleSheet, Text, View } from 'react-native';
import StreetView from './components/StreetView';

// const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown:false}}/>
        <Stack.Screen name="TelaHospedagem" component={TelaHospedagem} />
        <Stack.Screen name="TelaPasseios" component={TelaPasseios} />
        <Stack.Screen name="TelaRestaurantes" component={TelaRestaurantes} />
        {/* <Stack.Screen name="StreetView" component={StreetView} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
