import React, { useState } from "react";
import { View, Text, StyleSheet, Image} from "react-native";

import { spacing, fontSizes } from "../utils/sizes";
import { colors } from "../utils/colors";

import { Logo } from "../components/Logo";

import { Progreso } from "../components/Progreso";
import { Grafica } from "../components/Grafica";
import { Barras } from "../components/Barras";

import xd from '../utils/variables';
import { doc, onSnapshot, getDoc} from "firebase/firestore";

const {app,db} = xd;


const data1 = [0, 0.2, 0.23, 0.34, 0.5, 0.51, 0.54, 0.6, 0.65, 0.64, 0.71, 0.8, 0.9, 1];
const data3 = [0.2, 0.4];

const userConverter = {
  toFirestore: (user) => {
      return {
        volumen: user.volumen,
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return (data.volumen);
  }
};

export const Analisis = ({met}) => {

  const [gasto, setGasto] = useState(null);

  const Getdos = () => {
    const unsub = onSnapshot(doc(db, "vol", "unico"), (doc) => {
      console.log("Current data: ", doc.data());
  });
  }

  const limite = parseInt(met);
  const data2 = [limite];


  return (
    <View style={styles.container}>
      <Logo/>
      <View style={styles.containerMeta}>
        <Text style={styles.subtitle}> Meta de consumo hoy: </Text>
        <Text style={styles.subtitle}> {met} </Text>
        <Text style={styles.subtitle}> Lts. </Text>
      </View>
      <View style={styles.pro}>
        <Progreso/>
        <Getdos/>
        <Barras datos={data2}/>
        <View style={styles.contGr}>
          <Text style={styles.tGr}> Flujo vs Sónico: </Text>
        </View>
        <Barras datos={data3}/>
        <Image style={styles.imagen} resizeMode='center' source={require('../images/f.jpg')}/>
        <View style={styles.contGr}>
          <Text style={styles.tGr}> Volumen promedio: </Text>
        </View>
        <Grafica datos={data1}/>
        <Image style={styles.imagen} resizeMode='center' source={require('../images/f.jpg')}/>
      </View>
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
    paddingTop: spacing.md,
    fontSize: spacing.lg,
    color: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  imagen: {
    height: 10,
    alignSelf: "center",
  },
  pro: {
    flexDirection: 'center',
  },
  contGr: {
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  tGr: {
    padding: spacing.md,
    fontSize: spacing.md,
    color: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
});