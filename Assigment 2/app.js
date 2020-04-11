var first_number = parseInt(prompt("Please enter first number:"));
var operation = prompt("Please enter mathematical operation: +, -, *, / :");
var second_number = parseInt(prompt("Please enter second number:"));

  if(isNaN(first_number) || isNaN(second_number)){
    alert("Please try again")
    }else {
    if(operation == "+"){
      add (first_number, second_number);
    } else if (operation == "-"){
      sub (first_number, second_number);
    } else if (operation == "*"){
      mult (first_number, second_number);
    } else if (operation == "/"){
      div (first_number, second_number);
    } else{
      alert("Wrong operation sign")
    }
  }

function add (first_number, second_number) {
  let result = first_number + second_number;
  alert(result);
};
function sub (first_number, second_number){
  var result = first_number - second_number;
  alert(result);
};
function mult (first_number, second_number){
  var result = first_number * second_number;
  alert(result);
};
function div (first_number, second_number){
  var result = first_number / second_number;
  alert(result);
};