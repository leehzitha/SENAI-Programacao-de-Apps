import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebaseConfig.js'
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import Swal from 'sweetalert2';


export default function HomeScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const auth = getAuth(app);
    const minPassword = 6;

    const signUp = async() => {
        if (password.length < minPassword) {
            
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Password must contain at least 6 characters'
            })

            return;

        }
        if (password != confirmPassword) {
            return (Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "Passwords doesn't match!"
            }))
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Account created!'
            });

            return router.navigate('/login')
        }
        catch(e) {

            return (Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email already in use!'
            }))
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
                </View>
                </TouchableOpacity>
                <View style={{display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', marginTop: 10}}>
                    <Text style={{fontSize: 12}}>Already have an account?</Text>
                    {/* <TouchableOpacity onPress={() => router.navigate('/login')}>
                        <View>
                            <Text style={{fontSize: 12, color: 'orange'}}>Sign in</Text>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => console.log('botão clicado!')}>
                        <Link href={'/login'} style={{fontSize: 12, color: 'orange'}}>Sign In</Link>
                    </TouchableOpacity>
                </View>
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