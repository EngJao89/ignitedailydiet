
import { Container, Subtitle, HeaderTitle, HeaderSection} from './styles';
import { Header } from '@components/Header';
import { HomeStatistic } from '@components/HomeStatistic';


export function Home() {
  return (
    <Container>
      <Header />
      <HomeStatistic/>
      <Subtitle>Refeições</Subtitle>

      <HeaderSection>
        <HeaderTitle>Dieta</HeaderTitle>
      </HeaderSection>
    </Container>
  );
}