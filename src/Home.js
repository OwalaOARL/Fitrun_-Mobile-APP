import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [userName, setUserName] = useState('Rashini');
  const [exerciseCount, setExerciseCount] = useState(0);

  const fetchExerciseData = async () => {
    try {
      const response = await axios.get('https://wger.de/api/v2/exercise/?format=json');
      const exerciseData = response.data.results.map((exercise) => ({
        id: exercise.id,
        name: exercise.name,
        description: exercise.description ? exercise.description.replace(/<[^>]*>/g, '') : 'No description available.',
        image: `kettlebell.jpg`, // Constructing image URL based on exercise ID
      }));
      setExercises(exerciseData);
      setExerciseCount(exerciseData.length); // Set the count of exercises
    } catch (error) {
      console.error('Error fetching exercise data:', error);
      Alert.alert('Error', 'Failed to fetch exercise data. Please check your connection and try again.');
    }
  };

  useEffect(() => {
    fetchExerciseData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profilePic}>
          <Text style={styles.profileInitial}>{userName.charAt(0)}</Text>
        </View>
        <Text style={styles.greetingText}>Hi {userName}</Text>
      </View>

      {/* Exercise Count Section */}
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Total Exercises: {exerciseCount}</Text>
        <TouchableOpacity style={styles.refreshButton} onPress={fetchExerciseData}>
          <Text style={styles.refreshButtonText}>Refresh</Text>
        </TouchableOpacity>
      </View>

      {/* Exercise List Section */}
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseTitle}>Fitness Exercises</Text>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.exerciseCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.exerciseImage}
                resizeMode="cover"
                onError={(e) => {
                  // Fallback to a placeholder image if the image fails to load
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseDescription}>{item.description}</Text>
              
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
    paddingTop: 50,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#7F3DFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileInitial: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  refreshButton: {
    backgroundColor: '#7F3DFF',
    padding: 10,
    borderRadius: 5,
  },
  refreshButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  exerciseContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  exerciseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7F3DFF',
    marginBottom: 10,
  },
  exerciseCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  exerciseImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  exerciseDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default Home;
