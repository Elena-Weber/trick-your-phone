import { Text, View } from 'react-native';

function MainBtn({children}) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

export default MainBtn;