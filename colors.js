// colors codes ANSI
const colorReset = "\x1b[0m";
const colorRed = "\x1b[31m";
const colorGreen = "\x1b[32m";
const colorYellow = "\x1b[33m";
const colorBlue = "\x1b[34m";

const backgroundColorRed = "\x1b[41m";
const backgroundColorGreen = "\x1b[42m";
const backgroundColorYellow = "\x1b[43m";
const backgroundColorBlue = "\x1b[44m";
const backgroundColorReset = "\x1b[0m";

const reset = backgroundColorReset + colorReset;
  
module.exports = {colorReset,colorRed,colorGreen,colorYellow,colorBlue,backgroundColorRed,backgroundColorGreen,
backgroundColorYellow,backgroundColorBlue,backgroundColorReset,reset};