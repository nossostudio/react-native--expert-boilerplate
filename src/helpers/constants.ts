import { Dimensions } from 'react-native';
import { Appearance } from 'react-native-appearance';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const headerHeight = windowHeight / 2
const minHeaderHeight =  Math.min(headerHeight * 0.7, 200)
function pad(num) {
    return ("0" + num).slice(-2);
}
function hhmmss(secs) {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function hmmss(secs) {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60;
    return `${hours}:${pad(minutes)}:${pad(secs)}`; //No padding for hours
}

function hms(secs) {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60;
    return `${hours}:${minutes}:${secs}`; //No padding at all
}


function hhmm(secs) {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60;
    return `${hours}:${pad(minutes)}`; //No zero padding for hours
}
let isDarkMode = Appearance.getColorScheme() == "dark";
const colors = {
    primary: '#2348D4',
    secondary: 'pink',
    chart: {
        restingTime: 'lightgray',
        productionTime: '#2348D4'
    },
    sectionList: {
        title: isDarkMode ? '#B2B6BC' : '#1D1D1D'
    },
    listItem: {
        productionTime: isDarkMode ? '#B2B6BC' : '#616161',
        restingTime: isDarkMode ? 'gray' : '#c2c2c2',
        day: isDarkMode ? '#B2B6BC' : '#616161',
        backgroundColor: isDarkMode ? '#414759' : '#EBEBEB89'
    },
    backgroundColor: isDarkMode ? '#2C313F' : '#fafafa'
}

const headerStrings = {
    productionTimeRunningText: "🤔 Produzindo",
    productionTimeSoFarText: "",
    restingTimeRunningText: "🙆 Descansando"
}

const validateTime = (time) => {
    let splitted = time.split(':');
    let hour = +splitted[0];
    let min = +splitted[1];
    let second = +splitted[2];
    let fullTime = `${hour}:${min}:${second}`;
    let minutesTime = `${min}:${second}`;
    let secondTime = `${second}`;
    return `${hour > 0 ? fullTime : (min > 0 ? minutesTime : secondTime)}`;
}

module.exports = {
    windowHeight,
    windowWidth,
    headerHeight,
    minHeaderHeight,
    hhmmss,
    hmmss,
    hms,
    hhmm,
    colors,
    headerStrings,
    validateTime,
    minSecondsToShowLabel: 3600,
}
