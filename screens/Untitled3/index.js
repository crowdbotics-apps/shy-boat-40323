import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MeetingScreen = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [purpose, setPurpose] = useState('');
  const [objective, setObjective] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevStep}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepCounter}>Step {step}/3</Text>
      </View>
      {step === 1 && <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Enter Meeting Title</Text>
          <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Meeting Title" />
        </View>}
      {step === 2 && <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Enter Meeting Purpose</Text>
          <TextInput style={styles.input} value={purpose} onChangeText={setPurpose} placeholder="Meeting Purpose" />
        </View>}
      {step === 3 && <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Enter Meeting Objective</Text>
          <TextInput style={styles.input} value={objective} onChangeText={setObjective} placeholder="Meeting Objective" />
        </View>}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
        <Text style={styles.nextButtonText}>{step === 3 ? 'Finish' : 'Next'}</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10
  },
  stepCounter: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end'
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default MeetingScreen;