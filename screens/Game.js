import { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import MainBtn from '../components/ui/MainBtn';

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}

let minLimit = 1;
let maxLimit = 100;

function Game({userNumber}) { // equals props.userNumber
    const initialGuess = generateRandomBetween(minLimit, maxLimit, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) { // less than or greater than
        if ((direction === 'less' && currentGuess < userNumber) ||
        (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Are you sure?', 'Is this really your number?', [{text: 'Try again!', style: 'cancel'}]);
            return;
        }

        if (direction === 'less') {
            maxLimit = currentGuess;
        } else {
            minLimit = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(minLimit, maxLimit, currentGuess);
        setCurrentGuess(newRandomNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>
                Opponent's Guess
            </Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <View>
                <Text>
                    Higher or lower?
                </Text>
                <View>
                    <MainBtn onPress={nextGuessHandler.bind(this, 'less')}>-</MainBtn>
                    <MainBtn onPress={nextGuessHandler.bind(this, 'greater')}>+</MainBtn>
                </View>
            </View>
        </View>
    )
};

export default Game;

const styles = StyleSheet.create({
    screen: {
        flex: 1, // takes all available space
        padding: 20
    }
})