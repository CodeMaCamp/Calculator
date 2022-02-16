let ac = document.getElementById("ac"),
  plusMinus = document.getElementById("plusMinus"),
  percentage = document.getElementById("percentage"),
  divide = document.getElementById("divide"),
  seven = document.getElementById("seven"),
  eight = document.getElementById("eight"),
  nine = document.getElementById("nine"),
  multiply = document.getElementById("multiply"),
  four = document.getElementById("four"),
  five = document.getElementById("five"),
  six = document.getElementById("six"),
  minus = document.getElementById("minus"),
  one = document.getElementById("one"),
  two = document.getElementById("two"),
  three = document.getElementById("three"),
  plus = document.getElementById("plus"),
  zero = document.getElementById("zero"),
  dot = document.getElementById("dot"),
  equal = document.getElementById("equal"),
  display = document.getElementById("res");
let result = null,
  arg = 0,
  arg1 = 0,
  operation = "",
  displayString = "";
let operability = false,dotted = false;
function getResult(number) {
  if ((operation == "+")) {
    result = arg + arg1;
  } if ((operation == "-")) {
    result = arg - arg1;
  } if ((operation == "*")) {
    result = arg * arg1;
  } if ((operation == "/")) {
    result = arg / arg1;
  } if ((operation == "%")) {
    result = number*0.01;
  } if ((operation == "+/-")) {
    result = -number;
  } 
  arg = result;
  return result;
}
function updateDisplay() {
  display.innerHTML = displayString;
}
one.onclick = function () {
  displayString += "1";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
two.onclick = function () {
  displayString += "2";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
three.onclick = function () {
  displayString += "3";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
four.onclick = function () {
  displayString += "4";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
five.onclick = function () {
  displayString += "5";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
six.onclick = function () {
  displayString += "6";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
seven.onclick = function () {
  displayString += "7";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
eight.onclick = function () {
  displayString += "8";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
nine.onclick = function () {
  displayString += "9";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
zero.onclick = function () {
  displayString += "0";
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  updateDisplay();
};
ac.onclick = function(){
  operability = false;
  displayString = "0";
  arg=arg1=0;
  updateDisplay();
  displayString = "";
  dotted =false;
}
plus.onclick = function () {
  operability = true;
  operation = "+";
  displayString = "";
  updateDisplay();
  dotted =false;
};
minus.onclick = function () {
  operability = true;
  operation = "-";
  displayString = "";
  updateDisplay();
  dotted =false;
};
multiply.onclick = function () {
  operability = true;
  operation = "*";
  displayString = "";
  updateDisplay();
  dotted =false;
};
divide.onclick = function () {
  operability = true;
  operation = "/";
  displayString = "";
  updateDisplay();
  dotted =false;
};
plusMinus.onclick = function () {
  operability = true;
  operation = "+/-";
  if (operability) {
    arg1 = getResult(Number(displayString));
  } else {
    arg = getResult(Number(displayString));
  }
  displayString = " "+getResult(Number(displayString));;
  updateDisplay();
  displayString = "";
  dotted =false;
};


dot.onclick = function () {
  if(dotted == false){
    displayString += ".";
  }
  if (operability) {
    arg1 = Number(displayString);
  } else {
    arg = Number(displayString);
  }
  dotted = true;
  updateDisplay();
};

equal.onclick = function () {
  if(operability){
    displayString=arg=getResult(arg);
    updateDisplay();
    arg1 =0;
    displayString = "";
    operation="";
    operability = false;
    dotted =false;
  }
};
