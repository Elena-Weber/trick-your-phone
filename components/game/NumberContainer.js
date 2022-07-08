import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../util/colors';

function NumberContainer({children}) { // accepts everything from its parent on Game
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.secondaryLight,
        padding: 8,
        marginHorizontal: 130,
        margin: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryDark
    },
    text: {
        fontSize: 36,
        fontFamily: 'OpenSansBold',
        color: Colors.white
    }
})