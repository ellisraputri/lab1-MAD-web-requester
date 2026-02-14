import { Image } from 'expo-image';
import { useState } from 'react';
import { Platform, View, StyleSheet, Button, TextInput } from 'react-native';


export default function HomeScreen() {
  const [text, onChangeText] = useState("Enter URL");
  
  return (
    <View style={styles.containerColumn}>
      <View style={styles.containerRow}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <Button 
          title = "Click me"
          onPress={() => alert("stop pressing my button!")}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 40,
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    justifyContent: "center",
    backgroundColor: "white",
  }
});
