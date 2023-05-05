import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalTime, setTotalTime] = useState(30);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Step {currentStep}</Text>
        <Text style={styles.time}>{totalTime} min</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/placeholder-image.png')} style={styles.image} />
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextStep}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 18,
    color: '#999'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666'
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;