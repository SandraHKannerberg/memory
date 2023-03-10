const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;

function flipCard(e) {
    //getting user clicked card
    let clickedCard = e.target; 
   
    if(clickedCard !== cardOne) {
        clickedCard.classList.add('flip');

        if(!cardOne) {
            //return the cardOne value to the clicked card
            return cardOne = clickedCard;
        }

        cardTwo = clickedCard;

        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        matchedCards(cardOneImg, cardTwoImg)
    }
}

function matchedCards(img1, img2) {
    if (img1 === img2) {
        return console.log("It is a match");
    }

    //If two cards not matched. Add shake class after 400ms
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    
}

//Adding click-event to all cards
cards.forEach(card => {
    card.addEventListener('click', flipCard)
})