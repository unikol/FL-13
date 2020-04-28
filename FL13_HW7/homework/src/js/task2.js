let game = confirm('Do you want to play a game?');
let second = 2;
let third = 3;
let five = 5;
if (!game) {
    alert('You did not become a millionaire, but can.');
} else {
    let again = true;
      while (again) {
      let isContinue = true;
      let first = 1;
      let min = 0;
      let max = 5;
      let prize = 0;
      let prizes = [];
      prizes[0] = 100;
      prizes[first] = 50;
      prizes[second] = 25;
        while (isContinue) {
        let randomNumber = Math.floor(Math.random() * (max - min)) + min;
        console.log(randomNumber);
        let attempts = 3;
        for (let i = 0; i < third; i++) {
        let userNumber = parseInt(prompt(`Enter a number from 0 to ${max} 
        Attempts left: ${attempts} 
        Total prize: ${prize}$
        Possible prize on current attempt: ${prizes[i]}$`));
          attempts--;
          if (i === 0 && userNumber === randomNumber) {
              isContinue = confirm('Congratulation! Your prize is: ' + prizes[0] + '$. Do you want to continue?');
              prize += prizes[0];
              if (isContinue === false) {
                  attempts = 0;
                  alert(`Thank you for a game. Your prize is: ${prize}$`);
                  again = confirm('You want play again?');
              }
              break;
          } else if (i === first && userNumber === randomNumber) {
              isContinue = confirm('Congratulation! Your prize is: '
              +prizes[first] + '$. Do you want to continue?');
              prize += prizes[first];
              if (isContinue === false) {
                  attempts = 0;
                  alert(`Thank you for a game. Your prize is: ${prize}$`);
                  again = confirm('You want play again?');
              }
              break;
          } else if (i === second && userNumber === randomNumber) {
              isContinue = confirm(`Congratulation! Your prize is: ${prizes[second]}$. Do you want to continue?`);
              prize += prizes[second];
              if (isContinue === false) {
                attempts = 0;
                alert(`Thank you for a game. Your prize is: ${prize}$`);
                again = confirm('You want play again?');
              }
              break;
          } else if (i === second) {
              alert(`Thank you for a game. Your prize is: ${prize}$`);
              isContinue = false;
              again = confirm(`You want play again?`);
          }
      }
      max = max + five;
      prizes[0] = prizes[0] * second;
      prizes[first] = prizes[first] * second;
      prizes[second] = prizes[second] * second;
    }
  }
}