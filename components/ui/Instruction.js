import { Text, StyleSheet } from 'react-native';

import Colors from '../../util/colors';

function Instruction({children, parentStyle}) { // accepts buttons (=children) from its child component in Start.js and style from there too
    return ( // parentStyle takes precedence over style here and depends on order of them in [] below
    <Text style={[styles.instruction, parentStyle]}>
        {children}
    </Text>
    )
}

export default Instruction;

const styles = StyleSheet.create({
    instruction: {
        color: Colors.primaryLight,
        textAlign: 'center',
        fontSize: 28
    }
})