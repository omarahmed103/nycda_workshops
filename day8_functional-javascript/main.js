// function trimUserInput(string){
//     var userValues = {
//         calculation: string[0],
//         number1: parseInt(string[1]),
//         number2: parseInt(string[2])
//     }

//     return userValues;
// }

// function calculate(userinput){
//    var userObject = trimUserInput(userinput)
//     if (userObject.calculation == "add")
//         return (userObject.number1 + userObject.number2)
//     else if (userObject.calculation == "subtract")
//         return (userObject.number1 - userObject.number2)
//     else if (userObject.calculation == "multiply")
//         return (userObject.number1 * userObject.number2)
//     else if (userObject.calculation == "divide")
//         return (userObject.number1 / userObject.number2)
//     else
//         return ` Please enter only add, subtract, multiply or divide 
//         followed by two numbers and space in between each input. 
//         For example "add 5 5"`
// }
// let userInput 
// let calculationArray = ["add", "subtract", "multiply", "divide"]
// while(true){ 
//     userInput = prompt("Please enter the calculation type and two numbers")
//     userInput = userInput.split(' ')
//     //document.write(userInput[0])
//      for (index = 0; index < calculationArray.length; index++){ 
//          if (userInput[0] === calculationArray[index]){
//             //document.write(" user input is equal")
//          break;
//          }
//      }
//  }
// //userInput = userInput.split(' ')
// //document.write(userInput[0])
// //document.write(calculate(userInput))



function addNumbers() {
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    var x = +y + +z;
    document.getElementById("demo").innerHTML = x;
  }

  function subtractNumbers() {
    var y = document.getElementById("txt3").value;
    var z = document.getElementById("txt4").value;
    var x = +y - +z;
    document.getElementById("demo1").innerHTML = x;
  }

  function multiplyNumbers() {
    var y = document.getElementById("txt5").value;
    var z = document.getElementById("txt6").value;
    var x = +y * +z;
    document.getElementById("demo2").innerHTML = x;
  }

  function divideNumbers() {
    // var y = document.getElementById("txt7").value;
    // var z = document.getElementById("txt8").value;
    // var x = +y * +z;
    // document.getElementById("demo2").innerHTML = x;
    alert("Do it yourself");
  }



  

  