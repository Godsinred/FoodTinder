import { createStackNavigator } from 'react-navigation';
import MainContainer from './MainContainer/MainContainer';
import MatchList from './MatchList';
import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  MainContainer: { screen: MainContainer },
  MatchList: { screen: MatchList },
});

export default AppNavigator;
