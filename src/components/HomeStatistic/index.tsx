import { useCallback, useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, SubTitle, Title, IconArrow } from "./styles";

export function HomeStatistic(rest: TouchableOpacityProps) {
  const [data, setData] = useState(0)
  const [isDiet, setIsDiet] = useState(true) 

  return (
    <Container {...rest}  isDiet={isDiet}>
      <IconArrow />
      <Title>90%</Title>
      <SubTitle> das refeiçoes dentro da dieta</SubTitle>
    </Container>
  )
}