export interface Login {
  user: string;
  password: string;
}

export interface CardProps {
  name: string;
  status: string;
  image: string;
  id?: string;
}

export interface CardListProps {
  persons: CardProps[];
}
