import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import FirstScreen from './../screens/FirstScreen'
import Sandbox from './../screens/Sandbox'

const MainNavigator = createStackNavigator(
  {
  	FirstScreen: {
  		screen: FirstScreen,
  		navigationOptions: {
  			header: null
  		}
  	},
    Sandbox: {
      screen: Sandbox,
      navigationOptions: {
      	title: "Sandbox"
      }
    }
  },
  {
  	initialRouteName: 'Sandbox'
  }
)

export default createAppContainer(MainNavigator)
