function colorClock(){
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var newHoursColor;
var newMinutesColor;
var newSecondsColor;
var newHoursColorTwo;
var newMinutesColorTwo;
var newSecondsColorTwo;
  
if (seconds < 10) {
  seconds = '0' + seconds;
}
if (minutes < 10) {
  minutes = '0' + minutes;
}
if (hours < 10) {
  hours = '0' + hours;
}

var clockFace = hours + ':' + minutes + ':' + seconds;

  
if (minutes < 60) {
   newMinutesColor = 'f'
  }
  if (minutes < 56) {
   newMinutesColor = 'e'
  }
  if (minutes < 52) {
   newMinutesColor = 'd'
  }
  if (minutes < 48) {
   newMinutesColor = 'c'
  }
  if (minutes < 44) {
   newMinutesColor = 'b'
  }
  if (minutes < 40) {
   newMinutesColor = 'a'
  }
  if (minutes < 36) {
   newMinutesColor = '0'
  }
   if (minutes < 32) {
   newMinutesColor = '1'
  }
  if (minutes < 28) {
   newMinutesColor = '2'
  }
  if (minutes < 24) {
   newMinutesColor = '3'
  }
    if (minutes < 20) {
   newMinutesColor = '4'
  }
  if (minutes < 17) {
   newMinutesColor = '5'
  }
  if (minutes < 14) {
   newMinutesColor = '6'
  }
   if (minutes < 11) {
   newMinutesColor = '7'
  }
  if (minutes < 8) {
   newMinutesColor = '8'
  }
  if (minutes < 4) {
   newMinutesColor = '9'
  }
  if (seconds < 60) {
   newSecondsColor = 'f'
  }
  if (seconds < 57) {
   newSecondsColor = 'e'
  }
  if (seconds < 54) {
   newSecondsColor = 'd'
  }
  if (seconds < 50) {
   newSecondsColor = 'c'
  }
  if (seconds < 46) {
   newSecondsColor = 'b'
  }
  if (minutes < 42) {
   newSecondsColor = 'a'
  }
  if (seconds < 38) {
   newSecondsColor = '0'
  }
  if (seconds < 34) {
   newSecondsColor = '1'
  }
  if (seconds < 30) {
   newSecondsColor = '2'
  }
  if (seconds < 26) {
   newSecondsColor = '3'
  }
  if (seconds < 22) {
   newSecondsColor = '4'
  }
  if (minutes < 18) {
   newSecondsColor = '5'
  }
  if (seconds < 14) {
   newSecondsColor = '6'
  }
  if (seconds < 10) {
   newSecondsColor = '7'
  }
  if (seconds < 8) {
   newSecondsColor = '8'
  }
  if (seconds < 4) {
   newSecondsColor = '9'
  }
   if (hours < 24) {
   newHoursColor = 'f'
  }
  if (hours < 22) {
   newHoursColor = 'e'
  }
  if (hours < 20) {
   newHoursColor = 'd'
  }
  if (hours < 18) {
   newHoursColor = 'c'
  }
  if (hours < 17) {
   newHoursColor = 'b'
  }
  if (hours < 16) {
   newHoursColor = 'a'
  }
  if (hours < 15) {
   newHoursColor = '0'
  }
  if (hours < 14) {
   newHoursColor = '1'
  }
  if (hours < 13) {
   newHoursColor = '2'
  }
  if (hours < 12) {
   newHoursColor = '3'
  }
  if (hours < 11) {
   newHoursColor = '4'
  }
  if (hours < 10) {
   newHoursColor = '5'
  }
  if (hours < 8) {
   newHoursColor = '6'
  }
  if (hours < 6) {
   newHoursColor = '7'
  }
  if (hours < 4) {
   newHoursColor = '8'
  }
  if (hours < 2) {
   newHoursColor = '9'
  }
  if (minutes < 60) {
   newMinutesColorTwo = '9'
  }
  if (minutes < 56) {
   newMinutesColorTwo = '8'
  }
  if (minutes < 52) {
   newMinutesColorTwo = '7'
  }
  if (minutes < 48) {
   newMinutesColorTwo = '6'
  }
  if (minutes < 44) {
   newMinutesColorTwo = '5'
  }
  if (minutes < 40) {
   newMinutesColorTwo = '4'
  }
  if (minutes < 36) {
   newMinutesColorTwo = '3'
  }
   if (minutes < 32) {
   newMinutesColorTwo = '2'
  }
  if (minutes < 28) {
   newMinutesColorTwo = '1'
  }
  if (minutes < 24) {
   newMinutesColorTwo = '0'
  }
    if (minutes < 20) {
   newMinutesColorTwo = 'a'
  }
  if (minutes < 17) {
   newMinutesColorTwo = 'b'
  }
  if (minutes < 14) {
   newMinutesColorTwo = 'c'
  }
   if (minutes < 11) {
   newMinutesColorTwo = 'd'
  }
  if (minutes < 8) {
   newMinutesColorTwo = 'e'
  }
  if (minutes < 4) {
   newMinutesColorTwo = 'f'
  }
  if (seconds < 60) {
   newSecondsColorTwo = '9'
  }
  if (seconds < 57) {
   newSecondsColorTwo = '8'
  }
  if (seconds < 54) {
   newSecondsColorTwo = '7'
  }
  if (seconds < 50) {
   newSecondsColorTwo = '6'
  }
  if (seconds < 46) {
   newSecondsColorTwo = '5'
  }
  if (minutes < 42) {
   newSecondsColorTwo = '4'
  }
  if (seconds < 38) {
   newSecondsColorTwo = '3'
  }
  if (seconds < 34) {
   newSecondsColorTwo = '2'
  }
  if (seconds < 30) {
   newSecondsColorTwo = '1'
  }
  if (seconds < 26) {
   newSecondsColorTwo = '0'
  }
  if (seconds < 22) {
   newSecondsColorTwo = 'a'
  }
  if (minutes < 18) {
   newSecondsColorTwo = 'b'
  }
  if (seconds < 14) {
   newSecondsColorTwo = 'c'
  }
  if (seconds < 10) {
   newSecondsColorTwo = 'd'
  }
  if (seconds < 8) {
   newSecondsColorTwo = 'e'
  }
  if (seconds < 4) {
   newSecondsColorTwo = 'f'
  }
   if (hours < 24) {
   newHoursColorTwo = '9'
  }
  if (hours < 22) {
   newHoursColorTwo = '8'
  }
  if (hours < 20) {
   newHoursColorTwo = '7'
  }
  if (hours < 18) {
   newHoursColorTwo = '6'
  }
  if (hours < 17) {
   newHoursColorTwo = '5'
  }
  if (hours < 16) {
   newHoursColorTwo = '4'
  }
  if (hours < 15) {
   newHoursColorTwo = '3'
  }
  if (hours < 14) {
   newHoursColorTwo = '2'
  }
  if (hours < 13) {
   newHoursColorTwo = '1'
  }
  if (hours < 12) {
   newHoursColorTwo = '0'
  }
  if (hours < 11) {
   newHoursColorTwo = 'a'
  }
  if (hours < 10) {
   newHoursColorTwo = 'b'
  }
  if (hours < 8) {
   newHoursColorTwo = 'c'
  }
  if (hours < 6) {
   newHoursColorTwo = 'd'
  }
  if (hours < 4) {
   newHoursColorTwo = 'e'
  }
  if (hours < 2) {
   newHoursColorTwo = 'f'
  }
  
  
var hexColor = '#' + newSecondsColorTwo + newSecondsColor + newMinutesColorTwo + newMinutesColor + newHoursColorTwo + newHoursColor;
  
var reversColor = '#' + newHoursColor + newHoursColorTwo + newMinutesColor +  newMinutesColorTwo  + newSecondsColor + newSecondsColorTwo;  

var reversColor2 = '#' + newSecondsColor + newMinutesColor + newHoursColor +  newSecondsColorTwo  + newMinutesColorTwo + newSecondsColor;

document.getElementById('clock').innerHTML = clockFace;
  
document.body.style.background = hexColor;
  
document.getElementById('clock').style.color = reversColor;

document.getElementById('text').style.color = reversColor2;
  
  setTimeout(function() {
  colorClock();
}, 1000);
  
}

colorClock();


