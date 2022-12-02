import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Alert } from "react-native";
import { NativeBaseProvider, Input } from "native-base";

import { spacing, fontSizes } from "../utils/sizes";
import { colors } from "../utils/colors";

import { Logo } from "../components/Logo";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);

  function confirmInput() {
    const chosenNumber = parseInt(subject); 

    if (isNaN(chosenNumber) || chosenNumber <= 0 ){
      Alert.alert('¡Cantidad Inválida!', 'Tu consumo tiene que ser mayor a 0.', [{text: 'Ok', style: 'default', onPress: setSubject(null)}])
      return; 
    }
    addSubject(subject);
  }

  return (
    <View style={styles.container}>
      <Logo/>
      <View style={styles.inputContainer}>
        <NativeBaseProvider>
          <Input maxLength={3} size="xl" placeholder="Meta de consumo hídrico"
            color={colors.white}
            style={styles.textInput}
            onChangeText={setSubject}
            value={subject}
            keyboardType='number-pad'
          />
        </NativeBaseProvider>
        <View style={styles.button}>
          <Button
            title="¡Vamos!"
            onPress={() => confirmInput(subject)}
            color={colors.white}
          />
        </View>
      </View>
      <Image style={styles.image} resizeMode='center' source={require('../images/fdos.jpg')}/>
      <Text style={styles.item}> Cuando lo hagas, declara tu meta en litros. </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    flex: 0.4,
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "Top",
    flexDirection: "row",
  },
  meta: {
    flexDirection: "row",
    paddingTop: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: "center",
  },
  title: {
    paddingTop: spacing.lg,
    fontSize: spacing.xl,
    color: colors.white,
    fontWeight: "bold",
  },
  image: {
    height: 500,
    alignSelf: 'center',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    padding: spacing.lg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

});
