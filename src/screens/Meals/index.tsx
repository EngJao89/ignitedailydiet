import { ButtonCheck } from "@components/ButtonChecked";
import { ButtonIcon } from "@components/ButtonIcon";
import { CardMeals } from "@components/CardMeals";
import { Container } from "./styles";
import React, { useCallback, useState } from "react";

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