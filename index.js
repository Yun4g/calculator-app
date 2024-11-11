const display = document.querySelector('#display');
let result  = document.querySelector(".result");
let buttons = document.querySelectorAll('button');


for (let i = 0; i < buttons.length; i++) {
      
    buttons[i].addEventListener('click', ()=>{
        let buttonText = buttons[i].textContent;
        if (buttonText !== ' = ' && buttonText !== 'AC'  ) {
        display.value += buttonText;
        console.log(display.value);
        }
    })
    
}

function remove(){
    display.value = "";
     result.textContent = " ";
}

function calculate(){
          let evaluate =  eval(display.value);
          result.textContent = evaluate
          console.log(result)
     }



   



















// function output(input){
//     display.value += input;

// }

// function remove(){
//     display.value = "";
//     result.textContent = " ";

// }

// function calculate(){
//      let evaluate =  eval(display.value);
//      result.textContent = evaluate
//      console.log(result)
// }

