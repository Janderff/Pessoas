import { createStackNavigator, createAppContainer} from 'react-navigation';

import PeoplePages from  './src/screens/PeoplePages';
import PeopleDetailPages from './src/screens/PeopleDetailPages';


const AppNavigator = createStackNavigator({
  
  Home: PeoplePages,
  PeopleDetail: PeopleDetailPages,
   
  },
  {
    defaultNavigationOptions:{

    title: 'Pessoas!',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor: '#426ef4',
      borderBottomWidth: 1,
      borderBottomColor: 'c5c5c5',
       marginBottom: 20
    },
    headerTitleStyle:{
      fontSize: 30,
      color: '#fff',
      fontWeight: 'normal',
      textAlign: 'center',
      flexGrow: 1
    }
  }
  });

export default createAppContainer(AppNavigator);
