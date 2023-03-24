import { useCallback, useState } from "react";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import  StorageMeals, {MealsType} from '@storage/Meals';

import { Boll } from "@components/ButtonChecked/styles";
import { 
  Chip, 
  Container, 
  Subtitle, 
  TextBase, 
  Title 
} from "./styles";

import { CardMeals } from "@components/CardMeals";
import { ButtonIcon } from "@components/ButtonIcon";
import {ModalContent} from '@components/ModalContent';

type RouteParams = {
  id:string;
}

export function EditMeals() {
  const navigation = useNavigation();
  const route = useRoute();
  const { COLORS } = useTheme();  

  const { id } = route.params as RouteParams;
  const [data, setData] = useState<MealsType>();
  const [modalVisible, setModalVisible] = useState(false);

  async function fetchMeals() {
    const meal = await StorageMeals.findOne(id)
    setData(meal)
  }

  function handleEdit() {
    navigation.navigate('meals', { id })
  }

  const closeModal = (status: boolean) => {
    setModalVisible(status);
  };

  useFocusEffect(useCallback(()=>{
    fetchMeals();
  }, []))


  return (
    <CardMeals
    title="Refeição"
    color={ data?.isDiet ? 'GREEN_LIGHT' : 'RED_LIGHT'}
    >
    <Container>
      <Title>
        {data?.name}
      </Title>
      <TextBase>
        {data?.description}
      </TextBase>
      <Subtitle>
        Data e hora
      </Subtitle>
      <TextBase>
        {data?.date} às {data?.time}
      </TextBase>
      <Chip>
        <Boll color={data?.isDiet ? 'GREEN_DARK' : 'RED_DARK' }></Boll>
        <TextBase>{data?.isDiet ? 'dentro da dieta' : 'fora da dieta' }</TextBase>
      </Chip>
    </Container>
    <ButtonIcon 
      icon={<PencilSimpleLine size={18} color={COLORS.WHITE} />}
      hasIcon={true} 
      title='Editar refeição'
      onPress={handleEdit}
    />
    <ButtonIcon 
      icon={<Trash size={18} color={COLORS.GRAY_2} />}
      hasIcon={true} 
      title='Excluir refeição'
      dark={false}
      onPress={()=> setModalVisible(true)} 
    />
    <ModalContent modalVisible={modalVisible} closeModal={closeModal} />
    </CardMeals>
  )
}