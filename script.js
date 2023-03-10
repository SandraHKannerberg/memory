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

        let cardOneImg = cardOne.querySelector('img'),
        cardTwoImg = cardTwo.querySelector('img');
        matchedCards(cardOneImg, cardTwoImg)
    }
}


//Adding click-event to all cards
cards.forEach(card => {
    card.addEventListener('click', flipCard)
})