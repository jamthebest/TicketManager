import { QueryKey } from '@tanstack/react-query';
import EnvironmentVariables from '../constants/environmentVariables';
import axios from 'axios';

const QUERY_RETRY_LIMIT = 2;
const MUTATION_RETRY_LIMIT = 2;

interface QueryArgs {
    queryKey: QueryKey;
}
/**
 * @function defaultQueryFn
 * @see https://tanstack.com/query/docs/guides/default-query-function
 * @param queryKey - the endpoint query key to use for the request
 * @example
 * ```
 *  useQuery(['/posts'], ...);
 * ```
 */
const defaultQueryFn = async ({ queryKey }: QueryArgs) => {
    const { data } = await axios.get(
        `${EnvironmentVariables.API_URL}/v1/${queryKey[0]}`
    );
    return data;
};

/**
 * React-Query default config
 * @see Query Options: https://tanstack.com/query/docs/reference/useQuery
 * @see Mutation Options: https://tanstack.com/query/docs/reference/useMutation
 */
export const queryConfig = {
    defaultOptions: {
        queries: {
            retry: QUERY_RETRY_LIMIT,
            queryFn: defaultQueryFn,
        },
        mutations: {
            retry: MUTATION_RETRY_LIMIT,
        },
    },
};
