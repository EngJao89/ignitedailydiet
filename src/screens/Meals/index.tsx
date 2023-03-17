import { TouchableOpacity, View, Keyboard, Platform} from 'react-native';

import { ButtonCheck } from "@components/ButtonChecked";
import { ButtonIcon } from "@components/ButtonIcon";
import { CardMeals } from "@components/CardMeals";
import { Input } from "@components/Input";
import { Title } from "@components/Input/styles";
import { Container } from "./styles";

type TypeMode = 'date' | 'time' 
type RouteParams = {
  id:string;
}

export function Meals() {

  return (
    <CardMeals
      title="Nova refeição"
      color="GRAY_5"
      space="space-between"
    >

      <Input
        title="Nome"
      />

      <Input
        title="Descrição"
        multiline = {true}
        numberOfLines = {7}
        textAlignVertical="top"
      />

      <Container width={100} direction='row'>
        <Container width={48} direction='column'>
          <TouchableOpacity onPress={()=> ('')}>
            <View pointerEvents="none">
              <Input
                title="Data"
                numberOfLines = {1}
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </Container>
        <Container width={48} direction='column'>
          <TouchableOpacity onPress={()=> ('')}>
            <View pointerEvents="none">
              <Input
                title="Hora"
                numberOfLines = {1}
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </Container>
      </Container>
      <Title>Está dentro da dieta?</Title>
        <Container width={100} direction='row'>
          <Container width={48} direction='column'>
            <ButtonCheck
              title="Sim"
              color="GREEN_DARK"
              backgroundColor="GREEN_LIGHT"
              active={false}
            />
          </Container>

          <Container width={48} direction='column'>
            <ButtonCheck
              title="Não"
              color="RED_DARK"
              backgroundColor="RED_LIGHT" 
              active={false}        
            />
          </Container>
        </Container>
      <ButtonIcon title="Cadastrar refeição" />
    </CardMeals>
  )
}