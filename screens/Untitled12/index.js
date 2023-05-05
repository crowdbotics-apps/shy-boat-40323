import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MeetingScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meeting Progress</Text>
        <Text style={styles.stepText}>Step 2 of 5</Text>
      </View>
      <View style={styles.topicsContainer}>
        <Text style={styles.topicsTitle}>Topics Discussed</Text>
        <View style={styles.topic}>
          <Image source={require('../assets/topic1.png')} style={styles.topicImage} />
          <Text style={styles.topicText}>Introduction to AI</Text>
        </View>
        <View style={styles.topic}>
          <Image source={require('../assets/topic2.png')} style={styles.topicImage} />
          <Text style={styles.topicText}>User Testing Techniques</Text>
        </View>
        <View style={styles.topic}>
          <Image source={require('../assets/topic3.png')} style={styles.topicImage} />
          <Text style={styles.topicText}>AI in Business</Text>
        </View>
      </View>
      <View style={styles.stepsContainer}>
        <Text style={styles.stepsTitle}>Steps</Text>
        <View style={styles.step}>
          <Text style={styles.stepText}>Step 1</Text>
          <Text style={styles.stepDescription}>Introduction to AI</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepText}>Step 2</Text>
          <Text style={styles.stepDescription}>User Testing Techniques</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepText}>Step 3</Text>
          <Text style={styles.stepDescription}>AI in Business</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepText}>Step 4</Text>
          <Text style={styles.stepDescription}>AI in Healthcare</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepText}>Step 5</Text>
          <Text style={styles.stepDescription}>Conclusion</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  stepText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  topicsContainer: {
    marginBottom: 30
  },
  topicsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  topic: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  topicImage: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  topicText: {
    fontSize: 16
  },
  stepsContainer: {
    marginBottom: 30
  },
  stepsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  stepDescription: {
    fontSize: 16,
    marginLeft: 10
  }
});
export default MeetingScreen;