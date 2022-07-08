import { View, StyleSheet } from 'react-native';
import Colors from '../../util/colors';

function Card({children}) { // accepts buttons from its parent component in Start.js
    return (
    <View style={styles.inputContainer}>
        {children}
    </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 30,
        padding: 20,
        backgroundColor: Colors.primaryDark,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})