import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import FirstScreen from './../screens/FirstScreen'

const MainNavigator = createStackNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {
        header: null
      }
    }
  }
)

export default createAppContainer(MainNavigator)
