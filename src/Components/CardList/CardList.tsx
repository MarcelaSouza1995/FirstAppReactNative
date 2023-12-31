import { ScrollView, View } from 'react-native';

import CardLIstStyles from './CardList.styles';
import { CardListProps } from '../../Interfaces/interfaces';
import { useMyContext } from '../../State/State';
import Button from '../Button/Button';
import Card from '../Card/Card';

const CardList = (props: CardListProps) => {
  const { persons, screen } = props;
  const { view, button } = CardLIstStyles;
  const { setPage, page } = useMyContext();
  return (
    <ScrollView>
      <View style={view}>
        {chunk(persons, 2).map((row, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            {row.map((person, index) => (
              <Card key={index} person={person} />
            ))}
          </View>
        ))}
      </View>
      {screen === 'Home' && (
        <Button
          title="Load more"
          onPress={() => setPage(page + 1)}
          textStyle={button}
        />
      )}
    </ScrollView>
  );
};

// Função para dividir os cards em linhas de acordo com o número de colunas
const chunk = (arr, size) => {
  return arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    [],
  );
};
export default CardList;
