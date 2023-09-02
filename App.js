import {
    Button,
    SafeAreaView,
    StatusBar,
    Text,
    View,
} from 'react-native';

export default function App() {
    const onPressBuy = () => {};
    return (
        <SafeAreaView className="bg-gray-800">
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={'default'}
                showHideTransition={'fade'}
            />
            <View className="flex items-center justify-center w-full h-full p-4">
                <Text className="text-zinc-50 mb-3">App de prueba para comprar tickets!!</Text>
                <Button
                    onPress={onPressBuy}
                    title="Comprar ticket"
                    color="#841584"
                    accessibilityLabel="Comprar ticket"
                />
            </View>
        </SafeAreaView>
    );
}
