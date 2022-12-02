import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image} from "react-native";

import { spacing, fontSizes } from "../utils/sizes";
import { colors } from "../utils/colors";

import { Logo } from "../components/Logo";

import { Progreso } from "../components/Progreso";
import { Grafica } from "../components/Grafica";
import { Barras } from "../components/Barras";

import xd from '../utils/variables';
import { doc, onSnapshot, getDoc, collection} from "firebase/firestore";

const {app,db} = xd;


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
  //const [data1, setData1] = useState(null);

  useEffect(()=> onSnapshot(collection(db, "vol"), collection => {
    setGasto(collection.docs.map(doc => doc.data().volumen));
    console.log(gasto);
  }))

  const limite = parseInt(met);
  const data2 = [limite];
  const data1 = gasto;

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
        <Barras datos={data2}/>
        <View style={styles.contGr}>
          <Text style={styles.tGr}> Flujo vs Sónico: </Text>
        </View>
        <Barras datos={data3}/>
        <Image style={styles.imagen} resizeMode='center' source={require('../images/f.jpg')}/>
        <View style={styles.contGr}>
          <Text style={styles.tGr}> Volumen promedio: </Text>
        </View>
        <Grafica datos={(data1)? data1 : null}/>
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