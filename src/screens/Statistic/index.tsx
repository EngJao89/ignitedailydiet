import { CardStatistic } from "@components/CardStatistic";
import { HeaderStatistic } from "@components/HeaderStatistic";
import { useTheme } from 'styled-components/native'
import { Container, ContainerStatistic, Page, Title } from "./styles";

export function Statistic() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderStatistic />
      <Page>
        <Title>Estatísticas gerais</Title>
        <CardStatistic 
          title={22}
          subtitle="melhor sequência de pratos dentro da dieta"
          color={COLORS.GRAY_6}
        />
        <CardStatistic 
          title={109}
          subtitle="refeições registradas"
          color={COLORS.GRAY_6}
        />
        <ContainerStatistic >
        <CardStatistic 
          size={48}
          title={99}
          subtitle="refeições dentro da dieta"
          color={COLORS.GREEN_LIGHT}
        />
        <CardStatistic 
          size={48}
          title={10}
          subtitle="refeições fora da dieta"
          color={COLORS.RED_LIGHT}
        />
        </ContainerStatistic>
      </Page>
    </Container>
  )
}