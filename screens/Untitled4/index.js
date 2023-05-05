import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MeetingScreen = ({
  navigation
}) => {
  const [topic, setTopic] = useState('');
  const [length, setLength] = useState('');
  const [file, setFile] = useState(null);
  const [steps, setSteps] = useState(0);

  const handleTopicChange = text => {
    setTopic(text);
  };

  const handleLengthChange = text => {
    setLength(text);
  };

  const handleFileUpload = file => {
    setFile(file);
  };

  const handleStepIncrement = () => {
    setSteps(steps + 1);
  };

  const handleStepDecrement = () => {
    setSteps(steps - 1);
  };

  return <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Create Meeting</Text>
      <Pressable onPress={() => {
      navigation.navigate("Untitled5");
    }}><View style={styles.form}>
        <Text style={styles.label}>Topic</Text>
        <TextInput style={styles.input} onChangeText={handleTopicChange} value={topic} placeholder="Enter topic" />
        <Text style={styles.label}>Length (minutes)</Text>
        <TextInput style={styles.input} onChangeText={handleLengthChange} value={length} placeholder="Enter length" keyboardType="numeric" />
        <Text style={styles.label}>File</Text>
        <TouchableOpacity style={styles.fileUpload} onPress={() => handleFileUpload()}>
          <Text style={styles.fileUploadText}>Upload file</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Steps</Text>
        <View style={styles.steps}>
          <TouchableOpacity style={styles.stepButton} onPress={() => handleStepDecrement()}>
            <Text style={styles.stepButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.stepCount}>{steps}</Text>
          <TouchableOpacity style={styles.stepButton} onPress={() => handleStepIncrement()}>
            <Text style={styles.stepButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create Meeting</Text>
        </TouchableOpacity>
      </View></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  backButton: {
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30
  },
  form: {
    flex: 1
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  fileUpload: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  fileUploadText: {
    fontSize: 18,
    color: '#007AFF'
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  stepButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10
  },
  stepButtonText: {
    fontSize: 18,
    color: '#007AFF'
  },
  stepCount: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  createButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center'
  },
  createButtonText: {
    fontSize: 18,
    color: '#fff'
  }
});
export default MeetingScreen;