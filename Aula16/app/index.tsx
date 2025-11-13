import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebaseConfig.js'
import { useEffect, useState } from "react";


export default function HomeScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const auth = getAuth(app);

    const signUp = () => {
        if(password == confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
        }
    }
    useEffect(() => {
        console.log(email, password, confirmPassword)
    }, [email, password, confirmPassword])

    return (
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
            <View style={{width: '80%', padding: 20,  boxShadow: '0px 6px 100px rgba(0, 0, 0, 0.1)', borderRadius: 20, display: 'flex', gap: 10}}>
                <Text style={styles.title}>Create Account</Text>
                <TextInput style={styles.inputbar} placeholder="Username" onChangeText={(value) => setEmail(value)}/>
                <TextInput style={styles.inputbar} placeholder="Password" secureTextEntry= {true} onChangeText={(value) => setPassword(value)}/>
                <TextInput style={styles.inputbar} placeholder="Confirm your password" secureTextEntry= {true} onChangeText={(value) => setConfirmPassword(value)}/>
                <TouchableOpacity style={styles.button} onPress={() => signUp()}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "white"}}>Register</Text>
                </View></TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
  
    title: {
    color: 'orange',
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: "10%"
    },

    subtitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 700

    },

    inputbar: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    color: 'gray',
    width: '100%'

    },

    password: {
    color: 'orange',
    fontSize: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: "8%"

    },

    button: {
    color: 'white',
    backgroundColor: 'orange',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    width: '100%',
    fontSize: 20,
    marginTop: "10%"
    }

    })