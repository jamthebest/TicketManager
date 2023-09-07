import { Button, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryConfig } from './src/api/config';
import Main from './src/main';
// import useQrCode from './src/hooks/useQrCode';

export const queryClient = new QueryClient(queryConfig);

export default function App() {
    // const { mutate: getQrCode, isLoading } = useQrCode();
    const onPressBuy = () => {
        // getQrCode();
    };
    // console.log('isLoading', isLoading);
    return (
        <QueryClientProvider client={queryClient}>
            <Main />
        </QueryClientProvider>
    );
}
