import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditMeals } from '@screens/EditMeals';
import { Feedback } from '@screens/Feedback';

import { Home } from '@screens/Home';
import { Meals } from '@screens/Meals';
import { Statistic } from '@screens/Statistic';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return(
    <Navigator 
      initialRouteName='home'
      screenOptions={{ headerShown: false }}
    >
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="statistic"
        component={Statistic}
      />
      <Screen 
        name="meals"
        component={Meals}
      />
      <Screen 
        name="feedback"
        component={Feedback}
      />
      <Screen 
        name="editMeals"
        component={EditMeals}
      />
    </Navigator>
  );
}