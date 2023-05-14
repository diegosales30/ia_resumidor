import { configureStore, createSlice } from "@reduxjs/toolkit";

import { articleApi } from "./article";
import { translateApi } from "./translate";

const translateSlice = createSlice({
  name: "translate",
  initialState: "en-pt", // valor padrão: inglês -> português
  reducers: {
    setTranslate: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTranslate } = translateSlice.actions;

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [translateApi.reducerPath]: translateApi.reducer,
    translate: translateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, translateApi.middleware),
});