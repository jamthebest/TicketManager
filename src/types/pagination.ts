export type PaginatedResponse<T> = {
    page: { lastPage: boolean; from: number; size: number };
    total: { value: number };
    data: T[];
};

export type PaginatedResponseFromDynamo<T> = {
    page: { GSI2PK: string; PK: string; SK: string };
    data: T[];
};

export type PaginatedGroupedResponse<T> = {
    page: { lastPage: boolean; from: number; size: number };
    total: { value: number };
    data: T;
};
