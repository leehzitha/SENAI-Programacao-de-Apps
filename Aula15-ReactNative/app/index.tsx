import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.square}>
      <Text style={styles.colorBlue}>Hello, world!</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  colorBlue: {
    color: "blue",
    fontSize: 20
  },

  square: {
    height: 300,
    width: 300,
    backgroundColor: "pink",
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  }
})