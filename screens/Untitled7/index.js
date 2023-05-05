import { Pressable } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
const meetings = [{
  id: '1',
  title: 'Meeting 1',
  time: '10:00 AM',
  location: 'Room A'
}, {
  id: '2',
  title: 'Meeting 2',
  time: '11:00 AM',
  location: 'Room B'
}, {
  id: '3',
  title: 'Meeting 3',
  time: '12:00 PM',
  location: 'Room C'
}, {
  id: '4',
  title: 'Meeting 4',
  time: '01:00 PM',
  location: 'Room D'
}, {
  id: '5',
  title: 'Meeting 5',
  time: '02:00 PM',
  location: 'Room E'
}];

const MeetingScreen = ({
  navigation
}) => {
  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("Untitled8");
    }}><View style={styles.header}>
        <Text style={styles.title}>Meetings</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/close.png')} style={styles.closeIcon} />
        </TouchableOpacity>
      </View></Pressable>
      <FlatList data={meetings} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Pressable onPress={() => {
      navigation.navigate("Untitled10");
    }}><View style={styles.meetingContainer}>
            <Text style={styles.meetingTitle}>{item.title}</Text>
            <Text style={styles.meetingTime}>{item.time}</Text>
            <Text style={styles.meetingLocation}>{item.location}</Text>
          </View></Pressable>} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  closeIcon: {
    width: 20,
    height: 20
  },
  meetingContainer: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  meetingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  meetingTime: {
    fontSize: 16,
    marginBottom: 5
  },
  meetingLocation: {
    fontSize: 16
  }
});
export default MeetingScreen;