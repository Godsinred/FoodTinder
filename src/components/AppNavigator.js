import { createStackNavigator } from 'react-navigation';
import MainContainer from './MainContainer/MainContainer';
import MatchList from './MatchList';

const AppNavigator = createStackNavigator({
  MainContainer: { screen: MainContainer },
  MatchList: { screen: MatchList },
});

export default AppNavigator;
