import { View, StyleSheet } from 'react-native';

import Colors from '../../util/colors';

function Card({children}) { // accepts buttons from its child component in Start.js
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
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primaryDark,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})