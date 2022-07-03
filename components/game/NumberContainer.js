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
        borderWidth: 4,
        borderColor: Colors.secondaryLight,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.secondaryLight,
        // textAlign: 'center',
        // borderWidth: 2,
        // borderColor: Colors.secondaryLight,
        // padding: 12
    }
})