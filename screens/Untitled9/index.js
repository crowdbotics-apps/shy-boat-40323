import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MeetingScreen = () => {
  return <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/back-arrow.png')} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Meeting Suggestions</Text>
      <Text style={styles.message}>Here are some ways to improve your meetings:</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>Your Score:</Text>
        <Text style={styles.scoreNumber}>8/10</Text>
      </View>
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestion}>1. Start and end on time</Text>
        <Text style={styles.suggestion}>2. Have a clear agenda</Text>
        <Text style={styles.suggestion}>3. Encourage participation</Text>
        <Text style={styles.suggestion}>4. Assign action items</Text>
        <Text style={styles.suggestion}>5. Follow up after the meeting</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  backArrow: {
    width: 30,
    height: 30,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  message: {
    fontSize: 18,
    marginBottom: 20
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10
  },
  scoreNumber: {
    fontSize: 18
  },
  suggestionsContainer: {
    flex: 1
  },
  suggestion: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default MeetingScreen;