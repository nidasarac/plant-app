import type { Category, Question } from '@/types/plant';

export type RawCategory = {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: { url: string };
};

export type RawQuestion = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};

// the two endpoints wrap their payload differently - these unwrap and sort so
// screens always get a plain sorted list (kept out of plantApi so they're
// testable without pulling in rtk query)
export const normalizeCategories = ({ data }: { data: RawCategory[] }): Category[] =>
  [...data]
    .sort((a, b) => a.rank - b.rank)
    .map(({ id, name, title, rank, image }) => ({
      id,
      name,
      title,
      rank,
      imageUrl: image.url,
    }));

export const normalizeQuestions = (data: RawQuestion[]): Question[] =>
  [...data]
    .sort((a, b) => a.order - b.order)
    .map(({ id, title, subtitle, image_uri, uri, order }) => ({
      id,
      title,
      subtitle,
      imageUri: image_uri,
      uri,
      order,
    }));
