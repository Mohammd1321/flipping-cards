'use strict';

let arr = ['koala','dog','fish','panda','tiger'];

const cards = document.querySelectorAll('.cards');

const backCard = document.querySelectorAll('.theback');

const imageList = [...arr, ...arr].sort(() => Math.round(Math.random()) ? 1 : -1);

const congrats = document.querySelector('.congrats');


while(imageList.length){
  cards.forEach(card => {
    card.classList.add(imageList.splice(0,1));
  })
}

backCard.forEach(back => {
  back.style.backgroundImage = `url(${back.parentElement.classList[1]}.jpg)`;
})


let match = [];

let win = [];

cards.forEach(card => {
  card.addEventListener('click',function(e) {
    card.classList.add('rotate');
    match.push(e.currentTarget.classList[1]);
    card.style.pointerEvents = 'none';
    if(match[0] !== match[1] && match.length > 1) {
      for(let i of match) {
        document.querySelectorAll(`.${i}`).forEach(notMatch => {
          setTimeout(() => {
            notMatch.classList.remove('rotate');
            notMatch.style.pointerEvents = '';
          },500)
        })
      }
      match = [];
    } else if(match[0] == match[1] && match.length > 1) {
      win.push(match[0],match[1]);
      match = [];
      if(win.length == cards.length) {
        congrats.textContent = 'you have won the game';
      }
    }
  })
})





