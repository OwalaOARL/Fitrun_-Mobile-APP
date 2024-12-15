import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Start from "./src/start"; // Import the Start component
import Login from "./src/login";
import Dashboard from './src/dashboard';
import SignIn from './src/SignIn';

export default function App() {
  return <Dashboard/>; // Render the Start component
}
