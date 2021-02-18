/*******************
 * YOUR CODE HERE! *
 *******************/
function yell (str) {
  output = str + "!"
  return output

}

function getFirstCharacter (str) {
  output = str [0]
  return output

}

function getLastCharacter (str) {
  output = str[str.length-1]
  return output

}

function getOneCharacter (str,num1) {
  output = str[num1]
  return output

}

function getTwoCharacters (str, num1 , num2) {
  output = str[num1] + str[num2]
  return output

}

function makeCapitalized (str) {
  output = str.toUpperCase()
  return output

}

function yellLouder (str) {
  output = str.toUpperCase() + "!!!"
  return output

}

function getInitials (str) {
  const fullName = str.split(" ");
  const initials = fullName.shift().charAt(0) + "." + fullName.pop().charAt(0) + ".";
  return initials.toUpperCase();

}



/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
