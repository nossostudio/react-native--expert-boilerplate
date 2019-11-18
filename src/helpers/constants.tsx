import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const headerHeight = windowHeight/2

function pad(num) {
    return ("0"+num).slice(-2);
}
function hhmmss(secs) {
  var minutes = Math.floor(secs / 60);
  secs = secs%60;
  var hours = Math.floor(minutes/60)
  minutes = minutes%60;
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function hhmm(secs) {
    var minutes = Math.floor(secs / 60);
    secs = secs%60;
    var hours = Math.floor(minutes/60)
    minutes = minutes%60;
    return `${hours}:${pad(minutes)}`; //No zero padding for hours
  }


const colors = {
    primary: '#2348D4',
    secondary: 'pink',
    black: 'black',
    chart: {
        restingTime: 'lightgray'
    }
}

module.exports = {
    windowHeight,
    windowWidth,
    headerHeight,
    hhmmss,
    hhmm,
    colors
}
