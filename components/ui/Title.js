import { Text, StyleSheet } from 'react-native';
import Colors from '../../util/colors';

function Title({children}) { // accepts everything from its parent on Game
    return (
        <Text style={styles.title}>{children}</Text>
    )
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        color: Colors.secondaryLight,
        textAlign: 'center',
        // borderWidth: 2,
        // borderColor: Colors.secondaryLight,
        padding: 10,
        fontFamily: 'OpenSansBold'
    }
})