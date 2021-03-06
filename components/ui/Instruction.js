import { Text, StyleSheet } from 'react-native';
import Colors from '../../util/colors';

function Instruction({children, parentStyle}) { // accepts buttons (=children) and style from its parent component in Start.js
    return ( // parentStyle takes precedence over style here and depends on order of them in [] below
    <Text style={[styles.instruction, parentStyle]}>
        {children}
    </Text>
    )
}

export default Instruction;

const styles = StyleSheet.create({
    instruction: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'open-sans-regular'
    }
})