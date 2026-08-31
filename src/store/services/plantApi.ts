import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Category, Question } from '@/types/plant';

import { normalizeCategories, normalizeQuestions } from './normalize';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export const plantApi = createApi({
  reducerPath: 'plantApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/getCategories',
      transformResponse: normalizeCategories,
    }),
    getQuestions: builder.query<Question[], void>({
      query: () => '/getQuestions',
      transformResponse: normalizeQuestions,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetQuestionsQuery } = plantApi;
