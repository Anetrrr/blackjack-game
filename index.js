let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

function startGame(){
    renderGame()
}
function renderGame() {
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true

} else {
    message = "You're out of the game!"
    isAlive = false

}
cardEl.textContent = "Cards: " + firstCard + " |" + " " + secondCard
sumEl.textContent = "Sum: " + sum;    
messageEl.textContent = message;
}
function newCard() {
    let card = 4
    sum += card
    renderGame();
    cardEl.textContent = "Cards: " + firstCard + " |" + " " + secondCard + " | " + card
    sumEl.textContent = "Sum: " + sum; 
    
}
 