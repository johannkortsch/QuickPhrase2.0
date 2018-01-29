import { TabNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
import EnglishPhrases from '../Containers/EnglishPhrases'
import GermanPhrases from '../Containers/GermanPhrases'
import { Icon } from 'react-native-elements';

import styles from './Styles/NavigationStyles'

/*
export const Tabs = TabNavigator({
    EnglishPhrases: {
      screen: EnglishPhrases,
      navigationOptions: {
        tabBarLabel: 'English',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    GermanPhrases: {
      screen: German,
      navigationOptions: {
        tabBarLabel: 'German',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  });
  */


// Manifest of possible screens
const PrimaryNav = StackNavigator({
  EnglishPhrases: { screen: EnglishPhrases },
  GermanPhrases: { screen: GermanPhrases }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'EnglishPhrases',
  navigationOptions: {
    headerStyle: styles.header
  }
})
export default PrimaryNav


