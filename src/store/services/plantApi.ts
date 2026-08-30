import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Category, Question } from '@/types/plant';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

// endpoints wrap their payload differently - normalise + sort here

type RawCategory = {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: { url: string };
};

type RawQuestion = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};

export const plantApi = createApi({
  reducerPath: 'plantApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/getCategories',
      transformResponse: ({ data }: { data: RawCategory[] }) =>
        [...data]
          .sort((a, b) => a.rank - b.rank)
          .map(({ id, name, title, rank, image }) => ({
            id,
            name,
            title,
            rank,
            imageUrl: image.url,
          })),
    }),
    getQuestions: builder.query<Question[], void>({
      query: () => '/getQuestions',
      transformResponse: (data: RawQuestion[]) =>
        [...data]
          .sort((a, b) => a.order - b.order)
          .map(({ id, title, subtitle, image_uri, uri, order }) => ({
            id,
            title,
            subtitle,
            imageUri: image_uri,
            uri,
            order,
          })),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetQuestionsQuery } = plantApi;
