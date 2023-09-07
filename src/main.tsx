import { Button, SafeAreaView, StatusBar, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useQrCode from './hooks/useQrCode';

export default function Main() {
    const { mutate: getQrCode, isLoading } = useQrCode();
    const onPressBuy = () => {
        getQrCode({});
    };
    console.log('isLoading', isLoading);
    return (
        <SafeAreaView style={[tw`bg-gray-800`]}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={'default'}
                showHideTransition={'fade'}
            />
            <View
                style={tw`flex items-center justify-center w-full h-full p-4`}
            >
                <Text style={tw`text-white mb-3`}>
                    App de prueba para comprar tickets!!
                </Text>
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
