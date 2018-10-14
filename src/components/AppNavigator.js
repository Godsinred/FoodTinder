import { createStackNavigator } from 'react-navigation';
import MainContainer from './MainContainer/MainContainer';

import MatchList from './MatchList';
import HomeScreen from './HomeScreen';
import SwipeList from './SwipeList/SwipeList'

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  MainContainer: { screen: MainContainer },
  SwipeList: { screen: SwipeList },
});

export default AppNavigator;
