import { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text, SafeAreaView, View } from 'react-native';
import Start from './screens/Start';
import End from './screens/End';
import Game from './screens/Game';
import Colors from './util/colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [attemptsNumber, setAttemptsNumber] = useState(0);
  const [loaded] = useFonts({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (!loaded) {
    return null;
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
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <LinearGradient
        colors={[Colors.primaryDark, Colors.white]}
        style={styles.container} >
          <ImageBackground
            source={require('./assets/bg.jpg')}
            imageStyle={styles.backgroundImageStyle}
            style={styles.container}
            resizeMode="cover" // so that it always resizes
          >
            {/* there is time, battery and etc there */}
            <StatusBar style="light" />
            <SafeAreaView style={styles.container}>
              <Text style={styles.greeting}>Trick your phone <Entypo name="mobile" size={30} color="white" /></Text>
              {startScreen}
            </SafeAreaView>
          </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 // occupies whole screen
  },
  backgroundImageStyle: {
    opacity: 0.20 // = 20%
  },
  greeting: {
    marginTop: 90,
    marginHorizontal: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 31,
    fontWeight: 'bold',
    color: Colors.white,
    borderColor: Colors.primaryLight,
    borderWidth: 3,
    padding: 10,
    backgroundColor: Colors.primaryDark,
    fontFamily: 'OpenSansBold'
  }
})