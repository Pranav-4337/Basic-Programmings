function Calculation(){
    
    const num=parseFloat(document.getElementById('calc').value);
    const num2=parseFloat(document.getElementById('calc2').value);
    const out=document.getElementById('out');
    const ope=document.getElementById('oper').value;

    if (num ==='' || num2===''){
         alert('Enter A Number');
         return;

    }

    if (isNaN(num) || isNaN(num2)) {
        alert('Enter Numeric Values');
        return;
    }

    let result;
    switch(ope){
        case 'add':
            result=num+num2;
            break;
        
        case 'sub':
            result=num-num2;
            break;
        
        case 'mul':
            result=num*num2;
            break;
        
        case 'div':
            if (num2 !== 0) {
                result = num / num2;
            } else {
                alert('Cannot divide by zero!');
                return;
            }
            break;
        
    }
   document.getElementById('out').innerHTML=`${result}`
}

function eveod(){
    const num=parseFloat(document.getElementById('eveod').value);
    if(num===''){
        alert('Enter A Number');
        return;
    } 
    if(isNaN(num)){
        alert('Enter Numeric Values');
        return;
    }
    document.getElementById('even').innerHTML=`${num%2===0?'Even':'Odd'}`
}

function interest(){
   
    const num=parseFloat(document.getElementById('pri').value);
    const num2=parseFloat(document.getElementById('rate').value);
    const num3=parseFloat(document.getElementById('time').value);
    if (isNaN(num) || isNaN(num2) || isNaN(num3)) {
        alert('Enter Numeric Values');
        return;
    }
    if (num ==='' || num2==='' || num3===''){
        alert('Enter A Number');
        return;

   }
    // const interst =(num*num2*num3)/100;
    document.getElementById('into').innerHTML=` ${(num*num2*num3)/100}`;
}

function tempa(){
    const num=parseFloat(document.getElementById('temp').value);
    const conv=document.getElementById('convert').value;
    if(isNaN(num)){
        alert('Enter Numeric Values');
        return;
    }
    if(num===''){
        alert('Enter A Number');
        return;
    } 
    let result;
    switch(conv){
        case 'cel':
            result=(num*9/5)+32;
            break;
        case 'far':
            result=(num-32)*5/9;
            break;
    }
    document.getElementById("temper").innerHTML=`${result}`
}

// function place() {
//     const select = document.getElementById('convert');
//     const input = document.getElementById('temp');
//     const selectedOption = select.value;
//     if (selectedOption === 'cel') {
//       input.placeholder = 'Enter temperature in Celsius';
//     } else if (selectedOption === 'far') {
//       input.placeholder = 'Enter temperature in Fahrenheit';
//     }
// }
// document.addEventListener('DOMContentLoaded', place);
// document.getElementById('convert').onchange = place;

function rand(){
    const num=parseFloat(document.getElementById('min').value);
    const num2=parseFloat(document.getElementById('max').value);
    if(isNaN(num) || isNaN(num2)){
        alert('Enter Numeric Values');
        return;
    }
    if (num ===''){
        alert('Enter A Number');
        return;

   }
    if (num>num2){
        alert('Min Value Should Be Less Than Max Value');
        return;
    }
    let result=Math.floor(Math.random()*(num2-num+1))+num;
    document.getElementById("randa").innerHTML=`${result}`
}

function aray(){
    const num=parseFloat(document.getElementById('size').value);
    if(isNaN(num)){
        alert ('Enter Numerical Values');
        return;
    }
    if (num ===''){
        alert('Enter A Number');
        return;

   }
    const num2=[];
    for( let i=0;i<num;i++){
        // const num2=+document.getElementById('ele').value;
        const elem=parseFloat(prompt('Enter Elements'));
        num2.push(elem);
    }
    document.getElementById('arasum').innerHTML=`Array:[${num2.join(',')}]`;
    let sum=0;
    for(let i=0;i<num;i++){
        sum+=num2[i];
    }
    document.getElementById('ara').innerHTML=`${sum}`;
}

function palin(){
    const char=document.getElementById('pali').value;
    const char2=char.toLowerCase('').split('').reverse().join('');
    result=char.toLowerCase()===char2?'Is A Palindrome':'Is NOT A Palindrome';
    document.getElementById("pal").innerHTML=`${result}`;
}

function facto(){
    const num=parseFloat(document.getElementById('fact').value);
    if (num ===''){
        alert('Enter Number');
        return;

   }
    if(isNaN(num)){
        alert('Enter Numeric Values');
        return;
    }
    let result=1;
    if(num===0){
        document.getElementById('facti').innerHTML=(`${1}`);   
    }

    for(let i=1;i<=num;i++){
        result*=i;
    }
    document.getElementById('facti').innerHTML=(`${result}`);
}

function stri(){
    const str=document.getElementById('str').value;
    const str2=str.split('').reverse().join('');
    document.getElementById('strn').innerHTML=`${str2}`
}






// let guesses = [];
// let numberToGuess = Math.floor(Math.random() * 100) + 1;
// let guessCount = 0;

// function guess() {
//     const userGuess = parseFloat(document.getElementById('numb').value);
    
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         document.getElementById('gunu').innerHTML = 'Please enter a number between 1 and 100';
//         return;
//     }

//     guesses.push(userGuess);
//     guessCount++;

//     if (guessCount >= 7) {
//         alert('You have reached 7 guesses. The game will restart');
//         resetGame();
//         return;
//     }

//     if (userGuess < numberToGuess) {
//         document.getElementById('gunu').innerHTML = 'Guess higher!';
//     } else if (userGuess > numberToGuess) {
//         document.getElementById('gunu').innerHTML = 'Guess lower!';
//     } else {
//         document.getElementById('gunu').innerHTML = `Congratulations! You guessed it right in ${guessCount} attempts. The number was ${numberToGuess}`;
//         resetGame();
//         return;
//     }

//     document.getElementById('numb').value = '';
//     document.getElementById('prenum').innerText = `Previous guesses: ${guesses.join(', ')}`;
// }

// function resetGame() {
//     numberToGuess = Math.floor(Math.random() * 100) + 1;
//     guessCount = 0;
//     guesses = [];
//     document.getElementById('gunu').innerHTML = '';
//     document.getElementById('prenum').innerText = '';
//     document.getElementById('numb').value = '';
// }


function fizz(){
    const num=parseFloat(document.getElementById('fiz').value);
    if(isNaN(num)){
        alert('Enter Numeric Values');
        return;
    }
    if (num ===''){
        alert('Enter A Number');
        return;

   }
    
    if(num%3==0 && num%5==0){
        document.getElementById('buzz').innerHTML=`FizzBuzz`
    }
    else if(num%3==0){
        document.getElementById('buzz').innerHTML=`Fizz`
    }
    else if(num%5==0){
        document.getElementById('buzz').innerHTML=`Buzz`
    }
    else{
        document.getElementById('buzz').innerHTML=`${num}`
    }
}

function toggleMode() {
    var currentMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    var newMode = currentMode === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setMode(newMode);
    localStorage.setItem('theme', newMode); // Save the selected mode to localStorage
    localStorage.setItem('theme', newMode);
    console.log("Mode saved to localStorage: " + newMode);
}

function setMode(mode) {
    var body = document.body;
    var icon = document.getElementById('mode-icon');
    

    if (body.classList.contains(mode)) {
            
        return;
    }

    if (mode==='dark-mode') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        
        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var savedMode = localStorage.getItem('theme') || 'light-mode'; // Default to light mode if none is saved
    if (savedMode) {
        setMode(savedMode);
    } else {
        // If no saved mode, default to light mode
        setMode('light-mode');
    }
});

function table() {
    const num=parseFloat(document.getElementById("number").value);
    if (num ==='' ){
        alert('Enter A Number');
        return;

   }if(isNaN(num)){
    alert('Enter Numeric Values');
    return;
}
   let op='';
   for(let i=1;i<11;i++){
       
        op+=`<p>${num} x ${i} = ${num*i}</p>`;
    } 
    document.getElementById('toutput').innerHTML=`${op}`;
   
}
