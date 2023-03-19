import { useNavigation } from '@react-navigation/native';
import { Container, Logo, Subtitle, Title } from "./styles";
import FeedbackPositive from '@assets/feedbackPositive.png'
import FeedbackNegative from '@assets/feedbackNegative.png'
import { ButtonIcon } from "@components/ButtonIcon";


export function Feedback() {
  const navigation = useNavigation();

  function handleGoHome(){
    navigation.navigate('home')
  };

  return(
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>
        {
          'Você continua dentro da dieta. Muito bem!'
        }
      </Subtitle>
      <Logo source={FeedbackPositive } />
      <ButtonIcon 
        title="Ir para a página inicial"
        onPress={() => handleGoHome()}
      />
    </Container>
  )
}