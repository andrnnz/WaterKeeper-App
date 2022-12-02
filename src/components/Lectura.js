import React, {useState, useEffect} from "react"; 
import { collection, addDoc, getDocs, doc, getDoc, setDoc} from "firebase/firestore"; 

import xd from '../utils/variables';

export const Lectura = () => {
    const {app,db} = xd;

  class volumen {
    constructor (Vol_Flujo, Vol_Sonico) {
        this.Vol_Flujo = Vol_Flujo;
        this.Vol_Sonico = Vol_Sonico;
    }
    toString() {
        return 'Sensor de Flujo: ' + this.Vol_Flujo + ', Sensor Sónico: ' + this.Vol_Sonico;
    }
  }

  const userConverter = {
    toFirestore: (user) => {
        return {
          Vol_Flujo: user.Vol_Flujo,
          Vol_Sonico: user.Vol_Sonico,
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new volumen(data.Vol_Flujo, data.Vol_Sonico);
    }
};

  useEffect(() => {
    const test = async() =>{

      const usersRef = collection(db, "vol");

      await setDoc(doc(usersRef, "pruebaf"), {
        Vol_Flujo: 0.2, Vol_Sonico: "0.21"});

      try {
        console.log("entro")
        const querySnapshot = await getDocs(collection(db, "vol"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
        const ref = doc(db, "vol", "pruebaf").withConverter(userConverter);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          // Convert to City object
          const city = docSnap.data();
          // Use a City instance method
          console.log(city.toString());
        } else {
          console.log("No such document!");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    test()
  },[])
}