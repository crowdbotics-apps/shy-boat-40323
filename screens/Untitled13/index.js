import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcome}>Welcome, John Doe!</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Give Meeting Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Meeting Scores</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    marginBottom: 40
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default ScreenComponent;