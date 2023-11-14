import { View } from 'react-native';

import FavoritosStyle from './Favoritos.styles';
import CardList from '../../Components/CardList/CardList';
import Header from '../../Components/Header/Header';
import Loading from '../../Components/Loading/Loading';
import { useMyContext } from '../../State/State';

const Favoritos = () => {
  const { favoritos } = useMyContext();
  const { view } = FavoritosStyle;
  //console.log(favoritos);

  return (
    <View style={view}>
      <Header />
      {favoritos ? (
        <CardList persons={favoritos} screen="Favoritos" />
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default Favoritos;
