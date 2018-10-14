import { createStackNavigator } from 'react-navigation';
import MainContainer from './MainContainer/MainContainer';
import SwipeList from './SwipeList/SwipeList'

const AppNavigator = createStackNavigator({
  MainContainer: { screen: MainContainer },
  SwipeList: { screen: SwipeList },
});

export default AppNavigator;
