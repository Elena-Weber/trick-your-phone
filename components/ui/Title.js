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
        fontSize: 25,
        color: Colors.white,
        textAlign: 'center',
        padding: 2,
        fontFamily: 'OpenSansBold'
    }
})