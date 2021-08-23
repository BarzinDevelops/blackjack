
// put all the cards in an array object
let pix = 
    {
        spades_2 : "img/cards/2_of_spades.png",
        spades_3 : "img/cards/3_of_spades.png",
        spades_4 : "img/cards/4_of_spades.png",
        spades_5 : "img/cards/5_of_spades.png",
        spades_6 : "img/cards/6_of_spades.png",
        spades_7 : "img/cards/7_of_spades.png",
        spades_8 : "img/cards/8_of_spades.png",
        spades_9 : "img/cards/9_of_spades.png",
        spades_10 : "img/cards/10_of_spades.png",
        spades_jack : "img/cards/jack_of_spades2.png",
        spades_queen : "img/cards/queen_of_spades2.png",
        spades_king : "img/cards/king_of_spades2.png",
        spades_ace : "img/cards/ace_of_spades.png",
        diamonds_4 : "img/cards/4_of_diamonds.png",
        diamonds_3 : "img/cards/3_of_diamonds.png",
        diamonds_5 : "img/cards/5_of_diamonds.png",
        diamonds_6 : "img/cards/6_of_diamonds.png",
        diamonds_2 : "img/cards/2_of_diamonds.png",
        diamonds_7 : "img/cards/7_of_diamonds.png",
        diamonds_8 : "img/cards/8_of_diamonds.png",
        diamonds_9 : "img/cards/9_of_diamonds.png",
        diamonds_10 : "img/cards/10_of_diamonds.png",
        diamonds_jack : "img/cards/jack_of_diamonds2.png",
        diamonds_queen : "img/cards/queen_of_diamonds2.png",
        diamonds_king : "img/cards/king_of_diamonds2.png",
        diamonds_ace : "img/cards/ace_of_diamonds.png",
        clubs_3 : "img/cards/3_of_clubs.png",
        clubs_4 : "img/cards/4_of_clubs.png",
        clubs_5 : "img/cards/5_of_clubs.png",
        clubs_6 : "img/cards/6_of_clubs.png",
        clubs_2 : "img/cards/2_of_clubs.png",
        clubs_7 : "img/cards/7_of_clubs.png",
        clubs_8 : "img/cards/8_of_clubs.png",
        clubs_9 : "img/cards/9_of_clubs.png",
        clubs_10 : "img/cards/10_of_clubs.png",
        clubs_jack : "img/cards/jack_of_clubs2.png",
        clubs_queen : "img/cards/queen_of_clubs2.png",
        clubs_king : "img/cards/king_of_clubs2.png",
        clubs_ace : "img/cards/ace_of_clubs.png",
        hearts_4 : "img/cards/4_of_hearts.png",
        hearts_3 : "img/cards/3_of_hearts.png",
        hearts_5 : "img/cards/5_of_hearts.png",
        hearts_6 : "img/cards/6_of_hearts.png",
        hearts_2 : "img/cards/2_of_hearts.png",
        hearts_7 : "img/cards/7_of_hearts.png",
        hearts_8 : "img/cards/8_of_hearts.png",
        hearts_9 : "img/cards/9_of_hearts.png",
        hearts_10 : "img/cards/10_of_hearts.png",
        hearts_jack : "img/cards/jack_of_hearts2.png",
        hearts_queen : "img/cards/queen_of_hearts2.png",
        hearts_king : "img/cards/king_of_hearts2.png",
        hearts_ace : "img/cards/ace_of_hearts.png"
    };

//make array out of 'pix'-javascript object
const pixArr = Object.entries(pix);



// filter out the src by getting the second array out of the 
// testRand array


/* -------------------------all declarations here--------------------*/
const tableCards = document.getElementById('cards');
const hitBtn = document.getElementById('hit-btn');
const newgameBtn = document.getElementById('newgame-btn');
const passBtn = document.getElementById('pass-btn');
const msg = document.getElementById('message');
let count = 0;
let cardVal = 0;
let cardHolder = '';
let randomCard = '';

/* ---------------------------------------------------------------------*/
newgameBtn.addEventListener('click', function(){
    count = 0;
    cardVal = 0;
    cardHolder = '';
    msg.textContent = "Press HIT to get a card";
})
/* --------------------------all eventListeners here-------------------*/
hitBtn.addEventListener('click', function() {
//get an an random card by using the randomCardPicker() function call
randomCard =  pixArr[randomCardPicker()];

    cardHolder += 
    ` 
        <img class="card" src="${randomCard[1]}">      

    `
    tableCards.innerHTML = cardHolder;

    if(randomCard[0].includes(2)) cardVal +=2;
    else if (randomCard[0].includes(3)) cardVal +=3;
    else if (randomCard[0].includes(4)) cardVal +=4;
    else if (randomCard[0].includes(5)) cardVal +=5;
    else if (randomCard[0].includes(6)) cardVal +=6;
    else if (randomCard[0].includes(7)) cardVal +=7;
    else if (randomCard[0].includes(8)) cardVal +=8;
    else if (randomCard[0].includes(9)) cardVal +=9;
    else if (randomCard[0].includes(10) || 
            randomCard[0].includes('jack') || 
            randomCard[0].includes('quee') ||
            randomCard[0].includes('king') ) cardVal +=10;
    else if (randomCard[0].includes('ace')) cardVal +=11;

    if(cardVal>21){
        msg.textContent = "ooohhhh you've exceeded 21 🤪, so you lost this game. Try a new game!😃"
        
    }else if (cardVal === 21){
        msg.textContent = "YEAAAHHHH you've 🎊🎈🎉BLACKJACK 🎊🎈🎉"
    }
    else{
        msg.textContent = "would you like another card? if Yes, press HIT-button! else press PASS-button."
    }
})

/* ---------------------------------------------------------------------*/


/* ------------------------all Function declarations-----------------*/
function randomCardPicker(){
    let rand = Math.floor(Math.random() * 52);
    return rand;
}

// console.log(randomCard());

/* ----------------------------------------------------------------------*/


//Making possible to start new game by ckicking the 'New game' button.




//Making possible to start new game by ckicking the 'New game' button.






