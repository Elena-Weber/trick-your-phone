import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import Start from './screens/Start';
import End from './screens/End';
import Game from './screens/Game';
import Colors from './util/colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [attemptsNumber, setAttemptsNumber] = useState(0);

  const [loaded] = useFonts({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  });
  
  if (!loaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  
  function gameOverHandler(numberOfAttempts) {
    setGameOver(true);
    setAttemptsNumber(numberOfAttempts);
  }

  function newGameHandler() {
    setUserNumber(null);
    setAttemptsNumber(0);
  }

  let startScreen = <Start onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    startScreen = <Game
      userNumber={userNumber}
      onGameOver={gameOverHandler}
    />
  }

  if (gameOver && userNumber) {
    startScreen = <End
      attemptsNumber={attemptsNumber}
      userNumber={userNumber}
      onNewGame={newGameHandler}
    />
  }

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.container} >
        <ImageBackground
          source={{uri: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80'}}
          imageStyle={styles.backgroundImageStyle}
          style={styles.container}
          resizeMode="cover" // so that it always resizes
        >
          <StatusBar style="auto" />
          <SafeAreaView style={styles.container}>
            {/* <Text style={styles.greeting}>Trick your phone</Text> */}
            {startScreen}
          </SafeAreaView>
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
  // greeting: {
  //   marginTop: 100,
  //   textAlign: 'center',
  //   fontSize: 30,
  //   fontWeight: 'bold'
  // }
});
