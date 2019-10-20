// let randomNumber = Math.floor(Math.random() * 20) + 1;
const numGuessGame = {

    randomNumber: 0,
    turns: 5,


    numCheck: function () {
        this.randomNumber = parseInt(Math.random() * 20) + 1;

    },

    resetGame: function () {
        this.turns = 5;
        this.numCheck();
    },

    userGuessCheck: function (userGuess) {
        // while (userGuess = parseInt(userGuess)) {
        //     this.turns--;
        // userGuess = parseInt(userGuess);

    
        if (userGuess === this.randomNumber) {
            alert("correct! it took " + this.turns + " amount of times");
            // return true;
        } else if (userGuess > this.randomNumber) {
            alert("guess too high");
            this.turns--;
            // return false;

        } else if (userGuess < this.randomNumber) {

            alert("too low");
            this.turns--;

        }
        if (this.turns === 0) {
            alert("You ran out of turns");

        }


        // }

    },

};




function userNum() {
    const userGuess = document.getElementById("button").value;
    numGuessGame.userGuessCheck(userGuess);

}

function reset() {
    numGuessGame.resetGame();

}

reset();


// document.getElementById("btn-primary").onclick = function() {
//     alert("hello");

// }


//   if (turns === 0) {

//     alert("You ran out of turns!");

//   }

//   function resetGame() {



//   }