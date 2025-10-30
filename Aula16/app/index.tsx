import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
        <View style={{padding: 20, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: 20, display: 'flex', gap: 15}}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Welcome!</Text>
            <TextInput style={styles.inputbar} placeholder="User"/>
        </View>

    </View>
  );
  
}

const styles = StyleSheet.create({
  colorBlue: {
    color: "blue",
    fontSize: 20,
  },

  square: {
    height: 300,
    width: 300,
    backgroundColor: "pink",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: 'orange',
    fontSize: 22,
    fontWeight: 700,
    textAlign: 'center',
  },

  subtitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 700,

  },

  inputbar: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  }
  
})