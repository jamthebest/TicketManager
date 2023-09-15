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

interface QrCode {
    img: string;
    code: string;
}

export default (options?: UseMutationOptions<QrCode, unknown, Params>) => {
    const queryClient = useQueryClient();
    const getQrCode = useMutation<QrCode, unknown, Params>(
        async ({}) => {
            const data = {
                // timezoneId: getUserLocalTimezoneId(),
            };
            const { status, data: newOrderLog } = await axios.request<QrCode>({
                method: 'GET',
                url: `${URLs.GENERATE_TICKET}/`,
                data,
            });
            if (status === 200) {
                queryClient.setQueryData<QrCode | undefined>(
                    [URLs.GENERATE_TICKET],
                    (prev: QrCode) => {
                        console.log({ prev, newOrderLog });
                        if (!prev) {
                            return { ...newOrderLog };
                        }
                        return {
                            img: prev.img,
                            code: prev.code,
                        };
                    }
                );
                return newOrderLog;
                // Toast.show({ text1: 'Order cancellation requested' });
            } else {
                throw new Error();
            }
            return { img: '', code: '' };
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
