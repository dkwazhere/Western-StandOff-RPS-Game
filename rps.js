// global variables
const options = ['r', 'p', 's'];
let wins = 0;
let losses = 0;
let ties = 0;

// click function
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess);
    var computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);

// user pics
  if(userguess == 'r'){
    // var src = document.getElementById('player-img');
    // var img = document.createElement("img");
    // var image = img.src="assets/rock.png";
    // src.appendChild(img);
    document.getElementById('player1-img').src="assets/rock.png"
  } else if (userguess == 's') {
    // var src = document.getElementById('player-img');
    // var img = document.createElement('img');
    // var image = img.src="assets/scissor.png";
    // src.appendChild(img);
    document.getElementById('player1-img').src="assets/scissor.png"
  } else if (userguess == 'p') {
    // var src = document.getElementById('player-img');
    // var img = document.createElement('img');
    // var image = img.src="assets/paper.png";
    // src.appendChild(img);
    document.getElementById('player1-img').src="assets/paper.png"
  }

  // computer pic
  if(computerGuess == 'r'){
    // var src = document.getElementById('computer-img');
    // var img = document.createElement("img");
    // var image = img.src="assets/rock.png";
    // src.appendChild(img);
    document.getElementById('player2-img').src="assets/rock.png"
  } else if (computerGuess == 's') {
    // var src = document.getElementById('computer-img');
    // var img = document.createElement('img');
    // var image = img.src="assets/scissor.png";
    // src.appendChild(img);
    document.getElementById('player2-img').src="assets/scissor.png"
  } else if (computerGuess == 'p') {
    // var src = document.getElementById('computer-img');
    // var img = document.createElement('img');
    // var image = img.src="assets/paper.png";
    // src.appendChild(img);
    document.getElementById('player2-img').src="assets/paper.png"
  }

// game function
    if (userguess == 'r' || userguess == 'p' || userguess == 's') {
      if (userguess == computerGuess) {
        ties ++;
      } else if ((userguess == 'r') && (computerGuess == 's')){
        wins ++;
      } else if ((userguess == 'r') && (computerGuess == 'p')) {
        losses++;
      } else if ((userguess == 'p') && (computerGuess == 'r')) {
        wins ++;
      } else if ((userguess == 'p') && (computerGuess == 's')) {
        losses++;
      } else if ((userguess == 's') && (computerGuess == 'p')) {
        wins ++;
      } else if ((userguess == 's') && (computerGuess == 'r')) {
        losses++;
      }
    } else {
      alert("Please choose a correct letter (R,P,S)");
    }
    var html = "<p>Press r, p, or s to start playing</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Ties: " + ties + "</p>";
    document.querySelector('#game').innerHTML = html;
  }
