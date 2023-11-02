export interface Login {
  user: string;
  password: string;
}

export interface CardProps {
  person: person;
}

export interface person {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: origin;
  location: location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  isFavorite: boolean;
}

export interface location {
  name: string;
  url: string;
}

export interface origin {
  name: string;
  url: string;
}
export interface CardListProps {
  persons: CardProps[];
}
