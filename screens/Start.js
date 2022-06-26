import { TextInput, View, StyleSheet } from 'react-native';
import MainBtn from '../components/MainBtn';

function Start() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" autoCapitalize='none' autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <MainBtn>Reset</MainBtn>
                </View>
                <View style={styles.button}>
                    <MainBtn>Confirm</MainBtn>
                </View>
            </View>
        </View>
    )
}

export default Start;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 20,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        elevation: 5, // shadow for Android, from 0 to ...
        shadowColor: 'black', // shadow for iPhone, 4 attributes
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        height: 50,
        fontSize: 30,
        color: 'red',
        marginVertical: 5,
        fontWeight: 'bold',
        width: 150,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    }
});