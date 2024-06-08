const display = document.querySelector('#display');


function output(input){
    display.value += input;


}

function remove(){
    display.value = " ";


}

function calculate(){
     display.value =  eval(display.value);
}