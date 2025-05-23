import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={{
          uri: "https://i.pinimg.com/736x/1d/29/50/1d29502f092f0af43d5347469b89791e.jpg",
        }}
        style={styles.foto}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="marapopode@gmail.com"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="*********"
        placeholderTextColor="#000"
      />

      <TouchableOpacity style={styles.loginBoton}>
        <Text style={styles.loginTextoBoton}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Crear Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#065cab",
    alignItems: "center",
    paddingTop: 50,
  },
  foto: {
    width: "90%",
    height: undefined,
    aspectRatio: 10,
    marginVertical: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
    color: "#000",
  },
  loginBoton: {
    backgroundColor: "#d90429",
    paddingVertical: 12,
    borderRadius: 3,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  loginTextoBoton: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
    color: "#fff",
    textDecorationLine: "underline",
  },
});
