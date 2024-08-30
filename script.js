'use strict';

const number =Math.trunc(Math.random() * 20) +1;


let score = 20;


document.querySelector('.check').addEventListener('click', function(){
    let guess = document.querySelector('.guess').value;
    if(!guess){
        document.querySelector('.message').textContent='⛔ No Number';
    }else if(guess < number){
        if(score > 0){
            document.querySelector('.message').textContent='Too low, Try again';
            score--;
            document.querySelector('.score').textContent = score;
        }else{document.querySelector('.message').textContent = 'You have lost the game😭'}
       
    }else if(guess > number){
        if(score > 0){ document.querySelector('.message').textContent='Too High, Try again';
            score--;
            document.querySelector('.score').textContent = score;}else{document.querySelector('.message').textContent = 'You have lost the game'}
       
    }else{document.querySelector('.message').textContent='Correct Number 🎉';
        document.querySelector('.highscore').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector ('.number').textContent = number;
    }
})

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector ('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#837878';
    document.querySelector('.message').textContent= 'Start guessing...';
    document.querySelector('.guess').value=' ';
    number =Math.trunc(Math.random() * 20) +1;

})