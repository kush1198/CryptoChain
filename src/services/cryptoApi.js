import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
       'x-rapidapi-key': 'a14c5097f9mshcbe63021a3dc0e7p1bcc14jsn833931940b97'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createReq = (url) => ({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) =>  createReq(`/coins?limit=${count}`)
            }),
            getCryptoDetails: builder.query({
                query: (coinId) =>  createReq(`/coin/${coinId}`)
            }),
            getCryptoHistory: builder.query({
                query: ({coinId,timePeriod}) =>  createReq(`/coin/${coinId}/history/${timePeriod}`)
            })
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi