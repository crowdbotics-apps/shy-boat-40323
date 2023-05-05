import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MeetingScreen = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const [totalTime, setTotalTime] = useState(60);
  const [meetingObjective, setMeetingObjective] = useState('Discuss project progress');

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("Untitled11");
    }}><View style={styles.header}>
        <Text style={styles.headerText}>Meeting Progress</Text>
      </View></Pressable>
      <View style={styles.content}>
        <View style={styles.stepContainer}>
          <Text style={styles.stepText}>Step {currentStep}</Text>
          <Text style={styles.timeText}>{totalTime} min</Text>
        </View>
        <View style={styles.objectiveContainer}>
          <Text style={styles.objectiveText}>{meetingObjective}</Text>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#4a148c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  stepText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 10
  },
  timeText: {
    fontSize: 24,
    color: '#aaa'
  },
  objectiveContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20
  },
  objectiveText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  nextButton: {
    backgroundColor: '#4a148c',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
export default MeetingScreen;