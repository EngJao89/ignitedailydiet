import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Plus } from 'phosphor-react-native';

import { 
  Container, 
  Subtitle, 
  HeaderTitle, 
  HeaderSection 
} from './styles';


import { Header } from '@components/Header';
import { HomeStatistic } from '@components/HomeStatistic';
import { ButtonIcon } from '@components/ButtonIcon';


export function Home() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  function handleStatistic() {
    navigation.navigate('statistic')
  }

  function handleNewMeals() {
    navigation.navigate('meals', {id:''})
  }

  return (
    <Container>
      <Header />
      <HomeStatistic onPress={()=> handleStatistic()}/>
      <Subtitle>Refeições</Subtitle>
      <ButtonIcon 
        icon={<Plus size={18} color={COLORS.WHITE} />}
        hasIcon={true} 
        title= 'Nova refeição' 
        onPress={() => handleNewMeals()} 
      />

      <HeaderSection>
        <HeaderTitle>Dieta</HeaderTitle>
      </HeaderSection>
    </Container>
  );
}