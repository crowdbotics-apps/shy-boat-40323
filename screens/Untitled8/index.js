import { Pressable } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
const meetings = [{
  id: '1',
  title: 'Meeting 1',
  date: '2021-10-01',
  time: '10:00 AM',
  experience: 'Good'
}, {
  id: '2',
  title: 'Meeting 2',
  date: '2021-10-05',
  time: '2:00 PM',
  experience: 'Excellent'
}, {
  id: '3',
  title: 'Meeting 3',
  date: '2021-10-10',
  time: '3:30 PM',
  experience: 'Average'
}, {
  id: '4',
  title: 'Meeting 4',
  date: '2021-10-15',
  time: '11:00 AM',
  experience: 'Poor'
}, {
  id: '5',
  title: 'Meeting 5',
  date: '2021-10-20',
  time: '9:00 AM',
  experience: 'Good'
}];

const MeetingScreen = ({
  navigation
}) => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.meetingContainer}>
      <Pressable onPress={() => {
      navigation.navigate("Untitled9");
    }}><View style={styles.meetingInfo}>
        <Text style={styles.meetingTitle}>{item.title}</Text>
        <Text style={styles.meetingDateTime}>{item.date} at {item.time}</Text>
      </View></Pressable>
      <View style={styles.experienceContainer}>
        <Text style={styles.experienceQuestion}>How was your experience?</Text>
        <Text style={styles.experienceAnswer}>{item.experience}</Text>
      </View>
    </TouchableOpacity>;

  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back-arrow.png')} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>My Meetings</Text>
        <View style={styles.headerPlaceholder} />
      </View>
      <FlatList data={meetings} renderItem={renderItem} keyExtractor={item => item.id} style={styles.meetingsList} />
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
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#F5F5F5'
  },
  backArrow: {
    width: 20,
    height: 20
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headerPlaceholder: {
    width: 20,
    height: 20
  },
  meetingsList: {
    paddingHorizontal: 20
  },
  meetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },
  meetingInfo: {
    flex: 1
  },
  meetingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  meetingDateTime: {
    fontSize: 14,
    color: '#A5A5A5'
  },
  experienceContainer: {
    alignItems: 'flex-end'
  },
  experienceQuestion: {
    fontSize: 14,
    color: '#A5A5A5',
    marginBottom: 5
  },
  experienceAnswer: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default MeetingScreen;