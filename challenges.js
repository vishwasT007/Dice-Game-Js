let scores, roundScore, activePlayer, isGamePlaying;
init();

let lastDice;
document.querySelector('.btn-roll').addEventListener('click', function () {
	if (isGamePlaying) {
		// 1. Random Number
		let dice1 = Math.floor(Math.random() * 6) + 1;
		let dice2 = Math.floor(Math.random() * 6) + 1;

		// 2. Display The Result
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';

		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

		if (dice1 !== 1 && dice2 !== 1) {
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent =
				roundScore;
		} else {
			nextPlayer();
		}

		// 3. Update the Round Score IF the rolled dice was NOT a 1
		/* if (dice === 6 && lastDice === 6) {
			// player losses his score
			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = '0';
			nextPlayer();
		} else if (dice !== 1) {
			//Add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent =
				roundScore;
		} else {
			nextPlayer();
		}
		lastDice = dice; */
	}
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	if (isGamePlaying) {
		// 1. Add the current Score To The Global Score
		scores[activePlayer] += roundScore;

		// 2. Update The UI
		document.querySelector('#score-' + activePlayer).textContent =
			scores[activePlayer];

		let input = document.querySelector('.final-score').value;
		let setScore;
		if (input) {
			setScore = input;
		} else {
			setScore = 100;
		}

		// 3. Check if player on won the Game

		if (scores[activePlayer] > setScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'winner !!';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			isGamePlaying = false;
		} else {
			// Next player
			nextPlayer();
		}
	}
});

function nextPlayer() {
	//Next Player
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	roundScore = 0;

	document.getElementById('current-0').innerText = '0';
	document.getElementById('current-1').innerText = '0';

	document.querySelector('.player-0').classList.toggle('player-active');
	document.querySelector('.player-1').classList.toggle('player-active');

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	isGamePlaying = true;

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
}
