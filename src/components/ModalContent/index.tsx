import { ButtonIcon } from "@components/ButtonIcon";
import { Modal } from "react-native";
import { Container, ModalView, Title, ModalAction } from "./styles";

type Props = {
  modalVisible:boolean
  closeModal: (status:boolean) => void 
}

type RouteParams = {
  id:string;
}


export function ModalContent({ modalVisible, closeModal}: Props) {

  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <Container>
          <ModalView>
            <Title>Deseja realmente excluir o registro da refeição?</Title>
            <ModalAction>
              <ButtonIcon dark={false} title="Cancelar" onPress={() => closeModal(false)}/>
              <ButtonIcon title="Sim, excluir" />
            </ModalAction>
          </ModalView>
        </Container>
      </Modal>
  );
};