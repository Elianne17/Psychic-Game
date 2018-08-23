
var won = 0;
var lost = 0;
var tr = 10; 
var usedA = [];
var runLetter = runLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"


runLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(runLetter);


function jsGuess() {
      runLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(runLetter);

}


document.onkeyup = function (event) {
      var pg = event.key;

      
      if (pg === runLetter) {
            won++;
            tr = 10; 
            usedA = [];

      }

     
      jsGuess();
      if (pg !== runLetter) {
            tr--; 

      }

    
      if (tr == 0) { 
            lost++;
            usedA = []
            tr = 10; 
      }

     
      if (usedA.indexOf(pg) >= 0) {

      } else {
            
            usedA.push(pg);
            document.getElementById('pg').innerHTML = usedA;
            console.log(usedA);

      }
      
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('tr').innerHTML = tr; 

}
