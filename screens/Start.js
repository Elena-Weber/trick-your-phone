import { TextInput, View, StyleSheet } from 'react-native';
import MainBtn from '../components/MainBtn';

function Start() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <MainBtn>Reset</MainBtn>
            <MainBtn>Confirm</MainBtn>
        </View>
    )
}

export default Start;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        padding: 20,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        elevation: 5, // shadow for Android, from 0 to ...
        shadowColor: 'black', // shadow for iPhone, 4 attributes
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
});