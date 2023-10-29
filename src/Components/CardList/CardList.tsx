import { ScrollView } from 'react-native';

import { CardListProps } from '../../Interfaces/interfaces';
import Card from '../Card/Card';

const CardList = (props: CardListProps) => {
  const { persons } = props;

  return (
    <ScrollView>
      {persons.map(({ id, name, image, status }) => (
        <Card key={id} name={name} image={image} status={status} />
      ))}
    </ScrollView>
  );
};
export default CardList;
