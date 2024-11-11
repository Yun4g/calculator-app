const display = document.querySelector('#display');
let result  = document.querySelector(".result");

function output(input){
    display.value += input;

}

function remove(){
    display.value = " ";
    result.textContent = " ";

}

function calculate(){
     let evaluate =  eval(display.value);
     result.textContent = evaluate
     console.log(result)
}

