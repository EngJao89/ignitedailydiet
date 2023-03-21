import { useNavigation } from "@react-navigation/native";
import { Button, Container, Icon, SubTitle, Title } from "./styles";

export function HeaderStatistic() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
<<<<<<< Updated upstream
  };
=======
  }
>>>>>>> Stashed changes

  return (
    <Container>
      <Button onPress={()=>{handleGoBack()}}>
        <Icon/>
      </Button> 
      <Title>90%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}