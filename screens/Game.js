import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import MainBtn from '../components/ui/MainBtn';
import Card from '../components/ui/Card';
import Instruction from '../components/ui/Instruction';
import GuessLogItem from '../components/game/GuessLogItem';

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

function Game({userNumber, onGameOver}) { // equals props.userNumber
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [attemptsNumber, setAttemptsNumber] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(attemptsNumber.length);
        }
    }, [currentGuess, userNumber, onGameOver]); // monitors these 3 things

    useEffect(() => {
        minLimit = 1;
        maxLimit = 100;
    }, []) // if array is empty, it works only on first page load

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
        setAttemptsNumber(prevAttemptsNumber => [newRandomNumber, ...prevAttemptsNumber]);
    }

    const guessAttemptsListLength = attemptsNumber.length;

    return (
        <View style={styles.screen}>
            <Title>
                Your Phone's Guess is:
            </Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <Instruction parentStyle={styles.instructionText}>
                    Greater or less?
                </Instruction>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <MainBtn onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={27} color="white" />
                        </MainBtn>
                    </View>
                    <View style={styles.button}>
                        <MainBtn onPress={nextGuessHandler.bind(this, 'less')}>
                            <Ionicons name="md-remove" size={26} color="white" />
                        </MainBtn>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {attemptsNumber.map(attempt => <Text key={attempt}>{attempt}</Text>)} */}
                <FlatList
                    data={attemptsNumber}
                    keyExtractor={(item) => item}
                    renderItem={(itemData) => <GuessLogItem attemptNumber={guessAttemptsListLength - itemData.index} guess={itemData.item} />}
                />
            </View>
        </View>
    )
};

export default Game;

const styles = StyleSheet.create({
    screen: {
        flex: 1, // takes all available space
        padding: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 10
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})