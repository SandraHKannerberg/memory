const cards = document.querySelectorAll('.card');

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) {
    //getting user clicked card
    let clickedCard = e.target; 
   
    if(clickedCard !== cardOne && ! disableDeck) {
        clickedCard.classList.add('flip');

        if(!cardOne) {
            //return the cardOne value to the clicked card
            return cardOne = clickedCard;
        }

        cardTwo = clickedCard;
        disableDeck = true;

        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        matchedCards(cardOneImg, cardTwoImg)
    }
}

function matchedCards(img1, img2) {
    if (img1 === img2) {
        matchedCard++;

        if(matchedCard == 8) {
            setTimeout(() => {
                return shuffleCard()
            }, 1000);
        }

        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; 
        return disableDeck = false;
    }

    //If two cards not matched. Add shake class after 400ms
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = ""; //Both cards value set to blank
        disableDeck = false;
    }, 1200);
    
}

function shuffleCard() {
    matchedCard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    
    cards.forEach((card, index) => {
        card.classList.remove('flip');
        let imgTag = card.querySelector("img");
        imgTag.src = `/assets/img-${arr[index]}.png`
        card.addEventListener('click', flipCard)
    })
}

shuffleCard();

//Adding click-event to all cards
cards.forEach(card => {
    card.addEventListener('click', flipCard)
})