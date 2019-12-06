import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Constants
import { navigationConfigs } from '../helpers/config'

// Screens
import FirstScreen from './../screens/FirstScreen'
import Sandbox from './../screens/Sandbox'

// Helper Functions
function getInitialRoute () {
  const { sandboxMode, initialRoute } = navigationConfigs
  return sandboxMode ? 'Sandbox' : initialRoute
}

// Constructor
const MainNavigator = createStackNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {
        header: null
      }
    },
    Sandbox: { //Sandbox is a screen for playing with JS, you may set it as main screen on config.js
      screen: Sandbox,
      navigationOptions: {
        title: 'Sandbox'
      }
    }
  },
  {
    initialRouteName: getInitialRoute()
  }
)

// Export
export default createAppContainer(MainNavigator)
