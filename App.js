import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import Start from './screens/Start';
import Game from './screens/Game';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  
  let startScreen = <Start onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    startScreen = <Game />
  }

  return (
    <LinearGradient
      colors={['red', 'yellow']}
      style={styles.container} >
        <ImageBackground
          source={{uri: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80'}}
          imageStyle={styles.backgroundImageStyle}
          style={styles.container}
          resizeMode="cover" // so that it always resizes
        >
          <StatusBar style="auto" />
          <Text style={styles.greeting}>Trick your phone</Text>
          {startScreen}
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 // occupies whole screen
  },
  backgroundImageStyle: {
    opacity: 0.15 // = 15%
  },
  greeting: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
