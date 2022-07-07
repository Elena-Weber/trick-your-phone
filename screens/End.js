import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../util/colors';
import Title from '../components/ui/Title';
import MainBtn from '../components/ui/MainBtn';

function End({attemptsNumber, userNumber, onNewGame}) {
    return (
        <View style={styles.container}>
            <Title>Game over!</Title>
            <View style={styles.imageContainer}>
                <Image source={{uri: 'https://images.unsplash.com/photo-1637635753380-20bf6f46ede0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}  style={styles.image}></Image>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{attemptsNumber}</Text> attempts to guess your number, and it's <Text style={styles.highlightText}>{userNumber}</Text>!</Text>
            <View>
                <MainBtn onPress={onNewGame}>New Game</MainBtn>
            </View>
        </View>
    )
}

export default End;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 240,
        height: 250,
        borderRadius: 120,
        borderWidth: 1,
        borderColor: Colors.primaryLight,
        overflow: 'hidden',
        margin: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20
    },
    highlightText: {
        fontFamily: 'OpenSansBold',
        color: Colors.primaryDark
    }
})