import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Stay on Top of Your Fitness Goals</Text>
        <Text style={styles.subTitle}>Quick Overview of Your Activities</Text>
      </View>

      {/* Dashboard Cards */}
      <View style={styles.cardContainer}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Workouts Completed</Text>
          <Text style={styles.cardContent}>15</Text>
        </View>
        
        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Daily Calories Burnt</Text>
          <Text style={styles.cardContent}>350 kcal</Text>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Distance Run</Text>
          <Text style={styles.cardContent}>25 km</Text>
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Active Days</Text>
          <Text style={styles.cardContent}>10</Text>
        </View>

        {/* Card 5 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Water Intake</Text>
          <Text style={styles.cardContent}>2.5 L</Text>
        </View>

        {/* Card 6 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Steps Taken</Text>
          <Text style={styles.cardContent}>12,000</Text>
        </View>
      </View>

      {/* "Add More" Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add More Activities</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F0E6FF", // Light purple background
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6C63FF", // Violet color
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    color: "#8B80F9", // Lighter violet color
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: "100%", // Ensure full width for cards
    flexWrap: "wrap", // Wrap cards on smaller screens
    paddingHorizontal: 20,
  },
  card: {
    width: "30%",
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#6C63FF", // Violet for the button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
  },
  footerButton: {
    backgroundColor: "#FF5C5C", // Red for logout
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  footerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Dashboard;
