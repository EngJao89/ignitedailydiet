import { useCallback, useState } from 'react';
import { SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import StorageMeals ,{MealsType} from '@storage/Meals';
import { useTheme } from 'styled-components/native';
import { Plus } from 'phosphor-react-native';

import { 
  Container, 
  Subtitle, 
  HeaderTitle, 
  HeaderSection
} from './styles';

import { Header } from '@components/Header';
import { HomeStatistic } from '@components/HomeStatistic';
import { ButtonIcon } from '@components/ButtonIcon'
import { CardSnack } from '@components/CardSnack';

type DataType = {
  title:string
  data:MealsType[]
}

export function Home() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const [data, setData] = useState<DataType[]>([]);


  function handleStatistic() {
    navigation.navigate('statistic')
  };

  function handleNewMeals() {
    navigation.navigate('meals', {id:''})
  };

  function handleEditMeals(id:string) {
    navigation.navigate('editMeals', {id})
  };

  async function fetchMeals() {
    try {
      let meals = await StorageMeals.getAll()
      const data = StorageMeals.indentList(meals, 'date')
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useFocusEffect(useCallback(()=>{
    fetchMeals();
  }, []));

  return (
    <Container>
      <Header />
      <HomeStatistic onPress={()=> handleStatistic()}/>
      <Subtitle>Refeições</Subtitle>
      <ButtonIcon 
        icon={<Plus size={18} color={COLORS.WHITE} />}
        hasIcon={true} 
        title= 'Nova refeição' 
        onPress={() => handleNewMeals()} 
      />

      <SectionList
        sections={data}
        keyExtractor={(item) => item.id }
        renderItem={({ item }) => 
          <CardSnack 
            date={item.date}  
            title={item.name} 
            status={item.isDiet} 
            onPress={() => handleEditMeals(item.id)}
          />
        }
        renderSectionHeader={({ section: { title } }) => (
          <HeaderSection>
            <HeaderTitle>{title}</HeaderTitle>
          </HeaderSection>
        )}
      />
    </Container>
  );
}