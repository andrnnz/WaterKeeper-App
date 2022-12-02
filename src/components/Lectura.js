import React, {useState, useEffect} from "react"; 
import { collection, addDoc, getDocs, doc, getDoc, setDoc} from "firebase/firestore"; 

import xd from '../utils/variables';

export const Lectura = () => {
    const {app,db} = xd;

  class User {
    constructor (born, first, last ) {
        this.born = born;
        this.first = first;
        this.last = last;
    }
    toString() {
        return this.born + ', ' + this.first + ', ' + this.last;
    }
  }

  const userConverter = {
    toFirestore: (user) => {
        return {
            born: user.born,
            first: user.first,
            last: user.last
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.born, data.first, data.last);
    }
};

  useEffect(() => {
    const test = async() =>{

      const usersRef = collection(db, "users");

      await setDoc(doc(usersRef, "SP"), {
        born: 1989, first: "Sexo", last: "Perez"});
      await setDoc(doc(usersRef, "AN"), {
        born: 2002, first: "And", last: "Si"});

      try {
        console.log("entro")
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
        const ref = doc(db, "users", "SP").withConverter(userConverter);
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