/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

function generateWinningNumber() {
    let random =  Math.random(100) * 100
    return Math.ceil(random)
}


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
 }

class Game {
    constructor() {
        let num;
        if(typeof num === 'number') {
            this.playersGuess = num;
        } else {
            this.playersGuess = null;
        }
        this.pastGuesses = [];
        this.winningNumber = 0;
    }
    difference() {
        let diff = this.playersGuess - this.winningNumber;
        return Math.abs(diff)
    }
    isLower() {
        return this.playersGuess > this.winningNumber ? false : true;
    }
    playersGuessSubmission(num) {
        if(typeof num !== 'number' || num < 1 || num > 100) {
            throw 'That is an invalid guess.'
        } else {
            this.playersGuess = num;
        }
        return this.checkGuess()
    }
    checkGuess() {
        debugger;
        if (this.pastGuesses.includes(this.playersGuess)) {
            return 'You have already guessed that number.';
        } else {
            this.pastGuesses.push(this.playersGuess)
        }
        if(this.playersGuess === this.winningNumber) {
            return 'You Win!'
        }
        if(this.pastGuesses.length > 4) {
            return 'You Lose.'
        }
        if(this.difference() < 10) {
            let apost = "'"
            return `You${apost}re burning up!`
        }
        if(this.difference() < 25) {
            let apost = "'"
            return `You${apost}re lukewarm.`
        }
        if(this.difference() < 50) {
            let apost = "'"
            return `You${apost}re a bit chilly.`
        }
        if(this.difference() < 100) {
            let apost = "'"
            return `You${apost}re ice cold!`
        }
    }
    provideHint() {
        let arr = [0, generateWinningNumber(), generateWinningNumber()]
        return shuffle(arr)
    }
}

function newGame() {
    const instance = new Game()
    return instance
}
