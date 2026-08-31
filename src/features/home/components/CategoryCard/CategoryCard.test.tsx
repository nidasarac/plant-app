import { render, screen } from '@testing-library/react-native';

import type { Category } from '@/types/plant';

import CategoryCard from './CategoryCard';

const category: Category = {
  id: 1,
  name: 'fern',
  title: 'Ferns',
  rank: 0,
  imageUrl: 'https://cdn.example/fern.png',
};

describe('CategoryCard', () => {
  it('shows the title', async () => {
    await render(<CategoryCard category={category} />);
    expect(screen.getByText('Ferns')).toBeTruthy();
  });

  it('uses the category image url', async () => {
    await render(<CategoryCard category={category} />);
    expect(screen.getByTestId('category-image').props.source).toEqual({
      uri: 'https://cdn.example/fern.png',
    });
  });
});
