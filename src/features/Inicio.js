import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

import { Logo } from "../components/Logo";

export const Inicio = ({ focusSubject, clearSubject, continuar }) => {
  
  return (
    <View>
      <Logo />
      <View style={styles.containerMeta}>
        <Text style={styles.subtitle}> Meta de consumo hoy: </Text>
        <Text style={styles.subtitle}> {focusSubject} </Text>
        <Text style={styles.subtitle}> Lts. </Text>
      </View>
      <Image style={styles.imagen} resizeMode='center' source={require("../images/fc.jpg")} />
      <View style={styles.botones}>
        <View style={styles.clearSubWrapper}>
          <Button
            title="Otra meta"
            onPress={clearSubject}
            color={colors.blue}
          />
        </View>
        <View style={styles.clearSubWrapper}>
          <Button title="Continuar" color={colors.blue} onPress={continuar}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    height: 450,
    alignSelf: "center",
  },
  containerMeta: {
    flexDirection: "row",
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
    backgroundColor: colors.white,
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
    textAlign: "center",
  },
  subtitle: {
    paddingTop: spacing.lg,
    fontSize: spacing.lg,
    color: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  clearSubWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
    alignItems: 'center', 
    marginHorizontal: spacing.sm, 
    borderRadius: spacing.sm, 
  },
  botones: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
});
