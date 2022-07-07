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
        // borderWidth: 4,
        // borderColor: Colors.secondaryLight,
        padding: 8,
        // marginHorizontal: 135,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 36,
        fontFamily: 'OpenSansBold',
        color: Colors.secondaryLight
    }
})