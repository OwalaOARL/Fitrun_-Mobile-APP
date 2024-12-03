import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Start = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>With Fitrun</Text>
        <Text style={styles.subtitle}>
          We always want you to stay fit at every stage of your life!
        </Text>
      </View>

      {/* Illustration Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/fit.jpg")} // Correct path to the local image
          style={styles.image}
        />
      </View>

      {/* Button Section */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>

      {/* Sign In Text */}
      <Text style={styles.signInText}>
        Already have an account? <Text style={styles.signInLink}>Sign in</Text>
      </Text>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F1F39",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#6E6E6E",
  },
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInText: {
    fontSize: 14,
    color: "#6E6E6E",
  },
  signInLink: {
    color: "#6C63FF",
    fontWeight: "bold",
  },
});
