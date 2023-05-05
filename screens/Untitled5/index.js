import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

const MeetingScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [stepCounter, setStepCounter] = useState(1);

  const handlePrevStep = () => {
    if (stepCounter > 1) {
      setStepCounter(stepCounter - 1);
    }
  };

  const handleNextStep = () => {
    if (stepCounter < 3) {
      setStepCounter(stepCounter + 1);
    }
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevStep}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Meeting</Text>
        <TouchableOpacity onPress={handleNextStep}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.stepCounter}>
        <Text style={styles.stepText}>Step {stepCounter} of 3</Text>
      </View>
      {stepCounter === 1 && <View style={styles.calendarContainer}>
          <Calendar onDayPress={day => setSelectedDate(day.dateString)} markedDates={{
        [selectedDate]: {
          selected: true
        }
      }} />
        </View>}
      {stepCounter === 2 && <View style={styles.timeSlotContainer}>
          <Text style={styles.timeSlotText}>Selected Time Slot:</Text>
          <Text style={styles.timeSlot}>10:00 AM - 11:00 AM</Text>
        </View>}
      {stepCounter === 3 && <View style={styles.contributorsContainer}>
          <Text style={styles.contributorsText}>Key Contributors:</Text>
          <View style={styles.contributorsList}>
            <Image source={{
          uri: 'https://dummyimage.com/100x100/000/fff'
        }} style={styles.contributorImage} />
            <Image source={{
          uri: 'https://dummyimage.com/100x100/000/fff'
        }} style={styles.contributorImage} />
            <Image source={{
          uri: 'https://dummyimage.com/100x100/000/fff'
        }} style={styles.contributorImage} />
          </View>
          <Text style={styles.dateText}>Date: 12/31/2021</Text>
        </View>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  stepCounter: {
    alignItems: 'center',
    marginTop: 20
  },
  stepText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeSlotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeSlotText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  timeSlot: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  contributorsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contributorsText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  contributorsList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  contributorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  }
});
export default MeetingScreen;