import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { ProgressChart } from "react-native-chart-kit";

import { spacing, fontSizes } from "../utils/sizes";
import { colors } from "../utils/colors";

import { Logo } from "../components/Logo";

import { Progreso } from "../components/Progreso";

const MyProgressChart = () => {
  return (
    <>
      <Text style={styles.header}>Progress Chart</Text>
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

export const Analisis = ({met}) => {
  return (
    <View style={styles.container}>
      <Logo/>
      <View style={styles.containerMeta}>
        <Text style={styles.subtitle}> Meta de consumo hoy: </Text>
        <Text style={styles.subtitle}> {met} </Text>
        <Text style={styles.subtitle}> Lts. </Text>
      </View>
      <Progreso/>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMeta: {
    flexDirection: "row",
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
    backgroundColor: colors.white,
  },
  subtitle: {
    paddingTop: spacing.lg,
    fontSize: spacing.lg,
    color: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
});