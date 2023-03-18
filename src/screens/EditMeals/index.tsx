import { useState } from "react";
import { CardMeals } from "@components/CardMeals";
import { ButtonIcon } from "@components/ButtonIcon";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components";
import {ModalContent} from '@components/ModalContent'

type RouteParams = {
  id:string;
}


export function EditMeals() {
  const { COLORS } = useTheme()
  const [modalVisible, setModalVisible] = useState(false);


  const closeModal = (status: boolean) => {
    setModalVisible(status);
  };


  return (
    <CardMeals
    title="Refeição"
    color={'GREEN_LIGHT'}
    >
    <ButtonIcon 
      icon={<PencilSimpleLine size={18} color={COLORS.WHITE} />}
      hasIcon={true} 
      title='Editar refeição'
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