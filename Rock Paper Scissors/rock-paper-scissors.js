/**
 * The above JavaScript code is a Rock-Paper-Scissors game that keeps track of the player's score using
 * local storage.
 * @param playerMove - The player's move in the game (rock, paper, or scissors).
 */

let score = JSON.parse(localStorage.getItem('score')) 
            
        if (score===null) {
          score={
            wins:0,
            losses:0,
            ties:0
          };
          
        }
      /* The `playGame` function takes in the player's move as a parameter and plays a round of
      Rock-Paper-Scissors against the computer. It generates a random move for the computer using
      the `pickComputerMove` function and determines the result of the game based on the player's
      move and the computer's move. It updates the score based on the result and stores the updated
      score in local storage. Finally, it updates the score display on the webpage and displays the
      result of the game. */  
       
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result==='You win.') {
            score.wins += 1;
        }
         else if (result==='You lose.') {
            score.losses += 1;
        }
        else if (result==='Tie.') {
            score.ties += 1;
        }

        localStorage.setItem('score',JSON.stringify(score))

        updateScore();
        document.querySelector('.js-result').innerHTML = result
        document.querySelector('.js-moves').innerHTML = ` You
         <img src="https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png" alt="" class="move-button" >
      
         <img src="https://supersimple.dev/projects/rock-paper-scissors/images/${computerMove}-emoji.png" alt="" class="move-button">

       `
        // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
        //  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
      }
/* The `updateScore()` function is responsible for updating the score display on the webpage. It
      selects the element with the class name "js-score" and sets its innerHTML to a string that
      includes the current values of the score variables (wins, losses, and ties). This function is
      called after each game to ensure that the score is always up to date. */
      function updateScore() {
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

      }   
       
      /**
       * The function "pickComputerMove" generates a random number and assigns a corresponding move
       * (rock, paper, or scissors) to the computer.
       * @returns the computer's move, which can be either 'rock', 'paper', or 'scissors'.
       */
      
      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }
