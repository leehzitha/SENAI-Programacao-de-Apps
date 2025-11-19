import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig.js'
import { useState } from "react";
import { router } from "expo-router";


const auth = getAuth(app);

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConformPassword] = useState("");


  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  }
  return (
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
      <View style={{width: '80%', padding: 20,  boxShadow: '0px 6px 100px rgba(0, 0, 0, 0.1)', borderRadius: 20, display: 'flex', gap: 15}}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Welcome!</Text>
        <TextInput style={styles.inputbar} placeholder="Email"/>
        <TextInput style={styles.inputbar} placeholder="Password" secureTextEntry= {true}/>
        <TouchableOpacity>
          <View>
            <Text style={styles.password}>Forgot Password?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white"}}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={{width: "100%", height: 30, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10%", marginTop: "8%",  marginBottom: "8%"}}>
          <View style={{backgroundColor: "gray", height: "5%", width:"35%"}}></View>
          <Text style={{color: "gray"}}>OR</Text>
          <View style={{backgroundColor: "gray", height: "5%", width:"35%"}}></View>
        </View>
          <TouchableOpacity style={styles.button} onPress={() => router.navigate('/')}>
          <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white"}}>Create an Account</Text>
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