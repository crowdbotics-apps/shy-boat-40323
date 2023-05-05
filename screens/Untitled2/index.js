import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcome}>Welcome, John Doe</Text>
        <TouchableOpacity style={styles.scoreContainer} onPress={() => navigation.navigate('My Score')}>
          <Text style={styles.score}>Score: 80%</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('To-do')}>
          <Text style={styles.buttonText}>Meeting To-do's</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feedback')}>
          <Text style={styles.buttonText}>Give Meeting Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule Meeting')}>
          <Text style={styles.buttonText}>Schedule a Meeting</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shareContainer}>
        <Text style={styles.shareText}>Share via:</Text>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <Image source={require('../assets/facebook.png')} style={styles.socialMediaIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaButton}>
            <Image source={require('../assets/instagram.png')} style={styles.socialMediaIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaButton}>
            <Image source={require('../assets/linkedin.png')} style={styles.socialMediaIcon} />
          </TouchableOpacity>
        </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 'auto'
  },
  scoreContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    marginBottom: 30
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shareText: {
    fontSize: 16,
    marginRight: 10
  },
  socialMediaContainer: {
    flexDirection: 'row'
  },
  socialMediaButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginRight: 10
  },
  socialMediaIcon: {
    width: 20,
    height: 20
  }
});
export default ScreenComponent;