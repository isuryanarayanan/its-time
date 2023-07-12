import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';

const App = () => {
  useKeepAwake(); // Prevent device from sleeping

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      // Get the current time
      const currentTime = new Date().toLocaleTimeString();

      // Update the component state
      setTime(currentTime);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, []);

  const [time, setTime] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default App;

//import { StatusBar } from "expo-status-bar";
//import { StyleSheet, Text, View } from "react-native";

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
		//backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  //},
//});

//export default function App() {
  //return (
    //<>
      //<View style={styles.container}>
        //<Text>Open up App.tsx to start working on your app!</Text>
        //<StatusBar style="auto" />
      //</View>
    //</>
  //);
//}
