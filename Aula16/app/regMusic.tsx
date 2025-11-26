import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app, db } from '../firebaseConfig.js'
import { useState } from "react";
import { router } from "expo-router";
import { addDoc, collection, getDocs, query, serverTimestamp } from "firebase/firestore";


const auth = getAuth(app);

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [singer, setSinger] = useState("");
  const [coverURL, setCover] = useState("");
  const [rate, setRate] = useState('');


    async function registerMusic() {
      try {
        if (!name || !singer || !rate) {
          console.log('Preencha SongName, singer e rate');
          return;
        }

        const song = {
          name,
          singer,
          coverURL,
          rate,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        };

        await addDoc(collection(db, 'songs'), song);
        console.log("Song Added!");
        
      }

      catch (err) {
        console.log("Error: ", err);
      }
    }

  return (
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
      <View style={{width: '80%', padding: 20,  boxShadow: '0px 6px 100px rgba(0, 0, 0, 0.1)', borderRadius: 20, display: 'flex', gap: 15}}>
        <Text style={styles.title}>Add Song</Text>
        <TextInput style={styles.inputbar} placeholder="Song Name" onChangeText={setName}/>
        <TextInput style={styles.inputbar} placeholder="Singer / Band"  onChangeText={setSinger}/>
        <TextInput style={styles.inputbar} placeholder="Album cover"  onChangeText={setCover}/>
        <TextInput style={styles.inputbar} placeholder="Rate 1 - 5" keyboardType="numeric" onChangeText={setRate}/>
        <TouchableOpacity style={styles.button} onPress={registerMusic}>
          <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white"}}>Add Song</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
  
}

const styles = StyleSheet.create({
  
  title: {
    color: 'brown',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: "10%",
    marginBottom: "10%"
  },

  subtitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 700,

  },

  inputbar: {
    backgroundColor: '#f2f5f3',
    padding: 10,
    borderRadius: 10,
    color: 'gray',
    width: '100%',
  },

  password: {
    color: 'brown',
    fontSize: 13,
    textDecorationLine: 'underline',
    textAlign: 'center',

  },

  //oi

  button: {
    color: 'white',
    backgroundColor: 'brown',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    width: '100%',
    fontSize: 20
  }

  })