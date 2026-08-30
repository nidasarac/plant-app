// normalised shapes the api layer maps both endpoints onto

export type Category = {
  id: number;
  name: string;
  title: string;
  rank: number;
  imageUrl: string;
};

export type Question = {
  id: number;
  title: string;
  subtitle: string;
  imageUri: string;
  uri: string;
  order: number;
};
