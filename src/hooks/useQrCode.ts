import {
    useMutation,
    UseMutationOptions,
    useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
// import Toast from 'react-native-toast-message';
import { URLs } from '../api/urls';
// import { getUserLocalTimezoneId } from '~utils';
// import { queryClient } from '../../App';

interface Params {}

export default (options?: UseMutationOptions<void, unknown, Params>) => {
    const queryClient = useQueryClient();
    const getQrCode = useMutation<void, unknown, Params>(
        async ({}) => {
            const data = {
                // timezoneId: getUserLocalTimezoneId(),
            };
            const { status, data: newOrderLog } = await axios.request<any>({
                method: 'POST',
                url: `${URLs.GENERATE_TICKET}/`,
                data,
            });
            if (status === 200) {
                queryClient.setQueryData([URLs.GENERATE_TICKET], (response) => {
                    if (!response) {
                        return undefined;
                    }
                    return response;
                });
                // Toast.show({ text1: 'Order cancellation requested' });
            } else {
                throw new Error();
            }
        },
        {
            ...options,
            onError: (e) => {
                console.log('error', e);
                // Toast.show({ text1: 'Unable to cancel the order' });
            },
        }
    );

    return getQrCode;
};
