import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Alert } from 'react-native';
import Colors from '../util/colors';

import MainBtn from '../components/ui/MainBtn';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import Instruction from '../components/ui/Instruction';

function Start({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Oops! Invalid number!',
        'The number should be between 1 and 99. Please, try again.',
        [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.container}>
      <Title style={styles.greeting}>Trick your phone</Title>
      <Card>
        <Instruction>Enter your number from 1 to 100</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <MainBtn onPress={resetInputHandler}  >Reset</MainBtn>
          </View>
          <View style={styles.button}>
            <MainBtn onPress={confirmInputHandler}  >Confirm</MainBtn>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100, 
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondaryLight,
    borderBottomWidth: 2,
    color: Colors.secondaryLight,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  greeting: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});