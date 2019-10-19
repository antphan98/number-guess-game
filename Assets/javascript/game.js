// let randomNumber = Math.floor(Math.random() * 20) + 1;
const numGuessGame = {

    randomNumber: Math.floor(Math.random() * 20) + 1,
    turns: 5,

    
    numCheck: function() {
        document.getElementById("demo") = alert("hello");
    
      },

    userGuessCheck: function(userGuess) {
        while (userGuess = parseInt(userGuess)) {
            this.turns--;

            if (userGuess === this.randomNumber) {
                alert("correct! it took " + this.turns + " amount of times");
                return true;
            }
else if (guess > this.randomNumber) {
    alert("guess too high");
    this.turns--;
    return false;

}
else {

    alert("too low");
    this.turns--;

}


        }



    }

      

}


function userNum() {
	const userGuess = document.getElementById("button").value;
    numGuessGame.userGuessCheck(userGuess);
    
}



// document.getElementById("btn-primary").onclick = function() {
//     alert("hello");

// }


//   if (turns === 0) {

//     alert("You ran out of turns!");

//   }

//   function resetGame() {



//   }