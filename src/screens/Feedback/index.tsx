
import { Container, Logo, Subtitle, Title } from "./styles";
import FeedbackPositive from '@assets/feedbackPositive.png'
import FeedbackNegative from '@assets/feedbackNegative.png'
import { ButtonIcon } from "@components/ButtonIcon";


export function Feedback() {

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
      />
    </Container>
  )
}