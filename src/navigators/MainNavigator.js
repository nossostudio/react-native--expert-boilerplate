import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Constants
import Configurations from "../helpers/config";

// Screens
import FirstScreen from "./../screens/FirstScreen";
import Sandbox from "./../screens/Sandbox";

// Helper Functions
function getInitialRoute() {
  const {
    navigation: { sandboxMode, initialRoute }
  } = Configurations;
  return sandboxMode ? "Sandbox" : initialRoute;
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
    Sandbox: {
      screen: Sandbox,
      navigationOptions: {
        title: "Sandbox"
      }
    }
  },
  {
    initialRouteName: getInitialRoute()
  }
);

// Export
export default createAppContainer(MainNavigator);
