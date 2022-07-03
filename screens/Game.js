import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';

function Game() {
    return (
        <View style={styles.screen}>
            <Title>
                Opponent's Guess
            </Title>
            <View>
                <Text>
                    Higher or lower?
                </Text>
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