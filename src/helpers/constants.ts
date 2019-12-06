import { Dimensions } from 'react-native';
import { Appearance } from 'react-native-appearance';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

let isDarkMode = Appearance.getColorScheme() == "dark";
const colors = {
    primary: isDarkMode ? 'black' : 'white',
    secondary: isDarkMode ? 'grey' : 'red',
    backgroundColor: isDarkMode ? '#2C313F' : '#fafafa'
}

const strings = {
    hello: "🤔 hello world",
}

module.exports = {
    windowHeight,
    windowWidth,
    colors,
    strings
}
