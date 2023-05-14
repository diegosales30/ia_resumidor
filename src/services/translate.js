import { createApi } from "@reduxjs/toolkit/dist/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY

export const translateApi = createApi({
  reducerPath: 'translateApi',
  baseQuery: {
    baseUrl: 'https://translation.googleapis.com/language/translate/v2',
    prepareHeaders(headers) {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  },
  endpoints: (builder) => ({
    translateText: builder.query({
      query: ({ source, target, text }) => ({
        url: 'https://translation.googleapis.com/language/translate/v2',
        method: 'POST',
        body: {
          q: text,
          source,
          target,
          key: rapidApiKey,
        },
      }),
    }),
  }),
});

export const { useLazyTranslateTextQuery } = translateApi;
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY

// export const translateApi = createApi({
//   reducerPath: 'translateApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//     prepareHeaders: (headers, { getState }) => {
//       const { source, target, q } = getState().translation;

//       const encodedParams = new URLSearchParams({
//         source,
//         target,
//         q: encodeURIComponent(q),
//       }).toString();

//       headers.set('content-type', 'application/x-www-form-urlencoded');
//       headers.set('Accept-Encoding', 'application/gzip');
//       headers.set('X-RapidAPI-Key', rapidApiKey);
//       headers.set('X-RapidAPI-Host', 'google-translate1.p.rapidapi.com');

//       return {
//         ...headers,
//         body: encodedParams,
//         method: 'POST',
//       };
//     },
//   }),
//   endpoints: (builder) => ({
//     translateText: builder.query({
//       query: (text) => ({ url: 'https://google-translate1.p.rapidapi.com/language/translate/v2', body: { q: text } }),
//     }),
//   }),
// });

// export const { useLazyTranslateTextQuery } = translateApi;

