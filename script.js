let number1 = Math.floor(Math.random() *100);
let number2 = Math.floor(Math.random() *100 );
let numbersSummed = number1 + number2;
 let result = `${numbersSummed}`;

document.body.innerHTML += `<article> Level 1: The equation is: ${number1} + ${number2}</article>`;
document.querySelector('#button-1').onclick = guess;

function guess() {
  let guessedAnswer = document.querySelector('#number').value; //This returns an empty string result when ran. Why???
  if (guessedAnswer === result){
    console.log('Right');
    document.body.innerHTML += `<article> <h2> You're right, congratulations! You can move on to the next level </h2></article><hr>`;
    nextLevel();
  } else {
document.body.innerHTML += `<article> <h4> You're wrong, please try again! The result was ${result} </h4></article><hr>`; 
  refresh();
  }
  console.log(result);
} 

function guess2() {
  let guessedAnswer = document.querySelector('#number').value; //This returns an empty string result when ran. Why???
  if (guessedAnswer === result){
    console.log('Right');
    document.body.innerHTML += `<article> <h2> You're right, congratulations!</h2></article><hr>`;
    refresh();
  } else {
document.body.innerHTML += `<article> <h4> You're wrong, please try again! The result was ${result}</h4></article><hr>`; 
  refresh2();
  }
  console.log(guessedAnswer);
} 

document.querySelector("#button-2").onclick = refresh;

function refresh (){
  let number1 = Math.floor(Math.random() *100);
  let number2 = Math.floor(Math.random() *100 );
  numbersSummed = number1 + number2;
  result = `${numbersSummed}`;
    document.body.innerHTML += `<article> Level 1: The equation is: ${number1} + ${number2}</article>`;
  document.querySelector('#button-1').onclick = guess;
  document.querySelector("#button-2").onclick = refresh;
  document.querySelector('#button-3').onclick = nextLevel;
}

function refresh2 (){
  let number1 = Math.floor(Math.random() *10);
  let number2 = Math.floor(Math.random() *1000);
  numbersSummed = number1 * number2;
  result = `${numbersSummed}`;
    document.body.innerHTML += `<article> Level 2: The equation is: ${number1} * ${number2}</article>`;
  document.querySelector('#button-1').onclick = guess2;
  document.querySelector("#button-2").onclick = refresh2;
  document.querySelector('#button-3').onclick = nextLevel;
}


document.querySelector('#button-3').onclick = nextLevel;

function nextLevel (){
  let number1 = Math.floor(Math.random() *10);
  let number2 = Math.floor(Math.random() *100);
  numbersSummed = number1 * number2;
  result = `${numbersSummed}`;
    document.body.innerHTML += `<article> Level 2: The equation is: ${number1} * ${number2}</article>`;
  document.querySelector('#button-1').onclick = guess2;
  document.querySelector("#button-2").onclick = refresh2;
  document.querySelector('#button-3').onclick = nextLevel;
}
