import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../util/colors';
import Title from '../components/ui/Title';
import MainBtn from '../components/ui/MainBtn';

function End() {
    return (
        <View style={styles.container}>
            <Title>Game over!</Title>
            <View style={styles.imageContainer}>
                <Image source={{uri: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZSUyMG92ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}}  style={styles.image}></Image>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>X</Text> attempts to guess your number, and it's <Text style={styles.highlightText}>Y</Text>!</Text>
            <View>
                <MainBtn>New Game</MainBtn>
            </View>
        </View>
    )
}

export default End;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: Colors.primaryLight,
        overflow: 'hidden',
        margin: 39
    },
    image: {
        width: "100%",
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlightText: {
        fontFamily: 'OpenSansBold',
        color: Colors.primaryDark
    }
})