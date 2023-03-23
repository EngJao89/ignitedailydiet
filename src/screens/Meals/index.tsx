import { useState } from "react";
import { TouchableOpacity, View, Keyboard, Platform} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import StorageMeals, { MealsType } from "@storage/Meals";

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
  const navigation = useNavigation()
  const route = useRoute();

  const [isDiet, setIsDiet] = useState(true);
  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [description, setDescrition] = useState('');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { id } = route.params as RouteParams;

  function handleSaveMeals() {
    const newid: string = new Date().toISOString().replace(/[^a-zA-Z0-9 ]/g, '')

    let newMeals = {id: newid, name, description, date, time, isDiet}
    StorageMeals.created(newMeals)
    navigation.navigate('feedback', {isDiet})
  }

  function showDateTimePicker(type: TypeMode ) {
    if(type === 'date') setDatePicker(true);
    else setTimePicker(true);
  };

  function onDateTimeSelected(event:any, value:any) {
    if(datePicker === true) {
      let datestring = new Date(value)
      setDate(`${datestring.getDate()}/${(datestring.getMonth()+1)}/${datestring.getFullYear()}`);
      setDatePicker(false);
    }else {
      let datestring = new Date(value)
      setTime(`${datestring.getHours()}:${String(datestring.getMinutes()).padStart(2, "0")}`);
      setTimePicker(false);
    }
    
  };

  return (
    <CardMeals
      title="Nova refeição"
      color="GRAY_5"
      space="space-between"
    >

      {(datePicker || timePicker) &&
        (
          <DateTimePicker
            value={datePicker ? new Date() : new Date(Date.now())}
            mode={datePicker ? 'date' : 'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateTimeSelected}
          />
        )
      }

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
            <TouchableOpacity onPress={()=> showDateTimePicker('date')}>
              <View pointerEvents="none">
                <Input
                  title="Data"
                  numberOfLines = {1}
                  editable={false}
                  defaultValue={date}
                  value={date}
                />
              </View>
            </TouchableOpacity>
          </Container>
          <Container width={48} direction='column'>
            <TouchableOpacity onPress={()=> showDateTimePicker('time')}>
              <View pointerEvents="none">
                <Input
                    title="Hora"
                    numberOfLines = {1}
                    editable={false}
                    value={time}
                    defaultValue={time}
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
        <ButtonIcon 
          title="Cadastrar refeição" 
          onPress={()=> handleSaveMeals()}
        />
    </CardMeals>
  )
}