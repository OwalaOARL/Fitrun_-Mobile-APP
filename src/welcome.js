import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>With Fitrun</Text>
      <Text style={styles.subtitle}>
        We always want you to stay fit at every stage of your life!
      </Text>

      <Image
        source={require("../assets/fitrun-image.png")} // Replace with your actual image file path
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text
          style={styles.signInText}
          onPress={() => navigation.navigate("Login")}
        >
          Sign in
        </Text>
      </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F1FA",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C2C54",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    color: "#8E8E93",
    fontSize: 14,
  },
  signInText: {
    color: "#6C63FF",
    fontWeight: "bold",
  },
});
