import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Focus } from './src/features/Focus';
import { Inicio } from './src/features/Inicio';
import { Analisis } from './src/features/Analisis';

import Progreso from './src/components/Progreso';

import {colors} from './src/utils/colors';

const Stack = createNativeStackNavigator();

function App() {
  
  const [currentSubject, setCurrentSubject] = useState(null);

  function DetailsScreen() {
    return (
      <View style={styles.container}>
        <Analisis met={currentSubject}/>
      </View>
    );
  }

  function HomeScreen({navigation}) {
    
    let screen = <Focus addSubject={setCurrentSubject} />;

      if (currentSubject) {
      screen = (
        <Inicio
          focusSubject={currentSubject}
          clearSubject={() => setCurrentSubject(null)}
          continuar={() => navigation.navigate('Details')}
        />
      );
    } 

    return(
    <SafeAreaView style={styles.container}>
      {screen}
    </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.blue,
  },
});

export default App;
