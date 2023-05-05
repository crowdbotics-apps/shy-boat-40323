import { Pressable } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
const data = [{
  id: '1',
  title: 'Upcoming Meeting Review 1',
  date: 'June 1, 2021',
  time: '10:00 AM',
  image: require('../assets/meeting1.jpg')
}, {
  id: '2',
  title: 'Upcoming Meeting Review 2',
  date: 'June 3, 2021',
  time: '2:00 PM',
  image: require('../assets/meeting2.jpg')
}, {
  id: '3',
  title: 'Upcoming Meeting Review 3',
  date: 'June 5, 2021',
  time: '4:00 PM',
  image: require('../assets/meeting3.jpg')
}];

const ScreenComponent = ({
  navigation
}) => {
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Pressable onPress={() => {
      navigation.navigate("Untitled7");
    }}><Text style={styles.screenTitle}>Upcoming Meetings</Text></Pressable>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity style={styles.meetingContainer}>
            <Image source={item.image} style={styles.meetingImage} />
            <View style={styles.meetingInfo}>
              <Text style={styles.meetingTitle}>{item.title}</Text>
              <Text style={styles.meetingDateTime}>{item.date} at {item.time}</Text>
            </View>
          </TouchableOpacity>} />
      <Text style={styles.aiTitle}>Post-meeting Preps AIs</Text>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity style={styles.aiContainer}>
            <Text style={styles.aiText}>{item.title}</Text>
          </TouchableOpacity>} />
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
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20
  },
  meetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  meetingImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  meetingInfo: {
    flex: 1
  },
  meetingTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  meetingDateTime: {
    fontSize: 16,
    color: '#666'
  },
  aiTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20
  },
  aiContainer: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 10
  },
  aiText: {
    fontSize: 18
  }
});
export default ScreenComponent;