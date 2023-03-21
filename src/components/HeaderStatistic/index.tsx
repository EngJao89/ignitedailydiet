import { Button, Container, Icon, SubTitle, Title } from "./styles";

export function HeaderStatistic() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  };

  return (
    <Container>
      <Button>
        <Icon/>
      </Button> 
      <Title>90%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}