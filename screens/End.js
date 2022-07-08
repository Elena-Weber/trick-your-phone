import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../util/colors';
import Title from '../components/ui/Title';
import MainBtn from '../components/ui/MainBtn';

function End({attemptsNumber, userNumber, onNewGame}) {
    return (
        <View style={styles.container}>
            <Title>Game over!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: 'https://www.freevector.com/uploads/vector/preview/4559/FreeVector-Cup-Vector.jpg'}}
                    style={styles.image}>
                </Image>
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
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
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
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 20
    },
    highlightText: {
        fontFamily: 'OpenSansBold',
        color: Colors.primaryDark
    }
})