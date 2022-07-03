import { Text, View, Pressable, StyleSheet } from 'react-native';
import Colors from '../../util/colors';

function MainBtn({children, onPress}) {
    return (
        <View style={styles.buttonsViewContainer} >
            <Pressable
                onPress={onPress}
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonsPressableContainer] : styles.buttonsPressableContainer}
                android_ripple={{color: Colors.primary}}
            >
                <Text style={Colors.primary}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default MainBtn;

const styles = StyleSheet.create({
    buttonsViewContainer: {
        borderRadius: 10,
        margin: 5,
        overflow: 'hidden',
        // textAlign: 'center',
        // justifyContent: 'center'
    },
    buttonsPressableContainer: {
        backgroundColor: Colors.primaryLight,
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 3, // shadow for Android, from 0 to ...
        shadowColor: 'black', // shadow for iPhone, 4 attributes
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.25,
    },
    buttonText: {
        color: 'black',
        // textAlign: 'center',
        // justifyContent: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});