import {
  normalizeCategories,
  normalizeQuestions,
  type RawCategory,
  type RawQuestion,
} from './normalize';

describe('normalizeCategories', () => {
  const raw: RawCategory[] = [
    { id: 2, name: 'succulent', title: 'Succulents', rank: 1, image: { url: 'b.png' } },
    { id: 1, name: 'fern', title: 'Ferns', rank: 0, image: { url: 'a.png' } },
  ];

  it('unwraps the data key, sorts by rank and flattens image.url', () => {
    expect(normalizeCategories({ data: raw })).toEqual([
      { id: 1, name: 'fern', title: 'Ferns', rank: 0, imageUrl: 'a.png' },
      { id: 2, name: 'succulent', title: 'Succulents', rank: 1, imageUrl: 'b.png' },
    ]);
  });

  it('does not mutate the input', () => {
    normalizeCategories({ data: raw });
    expect(raw[0].id).toBe(2);
  });
});

describe('normalizeQuestions', () => {
  const raw: RawQuestion[] = [
    { id: 5, title: 'Second', subtitle: 'b', image_uri: 'two.png', uri: 'https://x/2', order: 2 },
    { id: 4, title: 'First', subtitle: 'a', image_uri: 'one.png', uri: 'https://x/1', order: 1 },
  ];

  it('sorts a bare array by order and renames image_uri', () => {
    expect(normalizeQuestions(raw)).toEqual([
      { id: 4, title: 'First', subtitle: 'a', imageUri: 'one.png', uri: 'https://x/1', order: 1 },
      { id: 5, title: 'Second', subtitle: 'b', imageUri: 'two.png', uri: 'https://x/2', order: 2 },
    ]);
  });
});
