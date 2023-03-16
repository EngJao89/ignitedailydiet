
import { Container, Subtitle, HeaderTitle, HeaderSection} from './styles';
import { useTheme } from 'styled-components/native';
import { Plus } from 'phosphor-react-native';
import { Header } from '@components/Header';
import { HomeStatistic } from '@components/HomeStatistic';
import { ButtonIcon } from '@components/ButtonIcon';


export function Home() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header />
      <HomeStatistic/>
      <Subtitle>Refeições</Subtitle>
      <ButtonIcon 
        icon={<Plus size={18} color={COLORS.WHITE} />}
        hasIcon={true} 
        title='Nova refeição'
      />

      <HeaderSection>
        <HeaderTitle>Dieta</HeaderTitle>
      </HeaderSection>
    </Container>
  );
}