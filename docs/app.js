
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

/* -------------------------all declarations here--------------------*/
const tableCards = document.getElementById('cards');
const hitBtn = document.getElementById('hit-btn');
const newgameBtn = document.getElementById('newgame-btn');
const msg = document.getElementById('message');
const res = document.getElementById('result');
let nextCard ='';
let cardVal = 0;
let cardHolder = '';
let randomCard1 = '';
let randomCard2 = '';
let hitStatus = false;
const resText = `Total cardvalue: `
res.textContent = resText + cardVal;
hitBtn.style.display = 'none';
/* --------------------------all eventListeners here-------------------*/

hitBtn.addEventListener('click', function() {
    //call the renderGame function to check the cardvalues before rendering anything first!
    hitStatus = true;
    renderGame(hitStatus);

    
})
newgameBtn.addEventListener('click', function(){

    msg.style.backgroundColor = ""
    cardHolder = '';
    cardVal = 0;
    msg.textContent = "";
    hitBtn.style.display = "inline";
    res.style.color = 'aqua';

    // filter out the src of the card, by getting it out of the pixArr array by using 
    // randomCardPicker() function you give a random index position of the array (pixArr)
    randomCard1 =  pixArr[randomCardPicker()];
    cardVal = calcCardValue(randomCard1)
    randomCard2 = pixArr[randomCardPicker()];
    cardVal = calcCardValue(randomCard2)
    res.textContent = resText + cardVal;
    cardHolder += 
    ` 
        <img class="card" src="${randomCard1[1]}"> 
        <img class="card" src="${randomCard2[1]}">     
    `
    tableCards.innerHTML = cardHolder;
    hitStatus = false;
    renderGame(hitStatus);
})

/* ------------------------all Function declarations-----------------*/
function randomCardPicker(hitStatus){
    let rand = Math.floor(Math.random() * 52);
    return rand;
}
function renderGame(hitStatus){

    if(cardVal < 21 && hitStatus){
        msg.textContent = "Press HIT-button for new card!"
        nextCard = pixArr[randomCardPicker()];
        cardHolder += `<img class="card" src="${nextCard[1]}">`
        tableCards.innerHTML = cardHolder;
        cardVal = calcCardValue(nextCard)

        res.textContent = resText + cardVal;
    } else if (cardVal < 21 && !hitStatus) {
        msg.style.backgroundColor = 'none' ;
        msg.textContent = "Press HIT-button for new card!"
    }
    if(cardVal>21){
        
        msg.textContent = "🤪You Lost🤪!! Give it a new try😃"
        res.textContent = resText + cardVal;
        res.style.color = 'red';
        hitBtn.style.display = "none";
        msg.style.backgroundColor = 'red' ;
    }       

    if (cardVal === 21 && !hitStatus){
        msg.style.backgroundColor = 'coral' ;
        msg.textContent = "♠️♦️♣️♥️ BLACKJACK ♠️♦️♣️♥️"
        res.textContent = resText + cardVal;
        hitBtn.style.display = "none";
        console.log(hitStatus)

    } else if (cardVal === 21 && hitStatus){
        msg.textContent = "🎊🎈🎉 Congrats, You have 21 🎊🎈🎉"
        msg.style.backgroundColor = 'blue' ;
        res.textContent = resText + cardVal;
        hitBtn.style.display = "none";
    }
   


}

// Here we check the randomly chosen array wich is passed in here (randomCard), then check its first-index value
// which is the name of the card (e.g. spades_2 or diamond_king). If it includes the string "2/3/queen/etc.."
// it will get the correct value and this value will be assigned to cardVal variable and returned so 
// we can evaluate the random cards total values and so continue the game accordingly.
function calcCardValue(randomCard){

    if(randomCard[0].includes(2)) return cardVal +=2;
    else if (randomCard[0].includes(3)) return cardVal +=3;
    else if (randomCard[0].includes(4)) return cardVal +=4;
    else if (randomCard[0].includes(5)) return cardVal +=5;
    else if (randomCard[0].includes(6)) return cardVal +=6;
    else if (randomCard[0].includes(7)) return cardVal +=7;
    else if (randomCard[0].includes(8)) return cardVal +=8;
    else if (randomCard[0].includes(9)) return cardVal +=9;
    else if (randomCard[0].includes(10) || 
            randomCard[0].includes('jack') || 
            randomCard[0].includes('quee') ||
            randomCard[0].includes('king') ) return cardVal +=10;
    else if (randomCard[0].includes('ace')) return cardVal +=11;
}
/* ----------------------------------------------------------------------*/








