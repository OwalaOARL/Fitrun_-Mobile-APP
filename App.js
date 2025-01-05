import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from "react";
import Start from "./src/start";
import Login from "./src/login";
import SignIn from "./src/SignIn";
import Home from "./src/Home"; // Import the Start component

export default function App() {
  return <Start />; // Render the Start component
}


