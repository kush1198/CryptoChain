import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'a14c5097f9mshcbe63021a3dc0e7p1bcc14jsn833931940b97'
}

const createReq = (url) => ({url,headers:cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createReq(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi