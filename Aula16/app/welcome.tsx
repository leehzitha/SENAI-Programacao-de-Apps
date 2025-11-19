import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { getAuth } from 'firebase/auth';
import { app } from '../firebaseConfig.js'
import React, { useState } from "react";
import { router } from "expo-router";


const auth = getAuth(app);

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConformPassword] = useState("");

  return (

    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width:'100%'}}>
        <View style={{width: '70%', display: 'flex', flexDirection: 'column', gap: 10}}>
            <Text style={styles.title}>☆</Text>

            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/login')}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "white"}}>Sign In</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/')}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "white"}}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>

  );
  
}

const styles = StyleSheet.create({
  
  title: {
    color: 'brown',
    fontSize: 50,
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
    color: 'orange',
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