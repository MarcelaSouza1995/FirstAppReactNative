import { View, Image } from 'react-native';

import FavoritosStyle from './Favoritos.styles';
import Background from '../../Components/Background/Background';
import CardList from '../../Components/CardList/CardList';
import Loading from '../../Components/Loading/Loading';
import ImageFavoritos from '../../Images/Favoritos.png';
import { useMyContext } from '../../State/State';

const Favoritos = () => {
  const { favoritos } = useMyContext();
  const { view, imageTitle } = FavoritosStyle;

  return (
    <View style={view}>
      <Background />
      <Image source={ImageFavoritos} style={imageTitle} />
      {favoritos ? (
        <CardList persons={favoritos} screen="Favoritos" />
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default Favoritos;
