let scores, roundScore, activePlayer, isGamePlaying;
init();
document.querySelector('.btn-roll').addEventListener('click', function () {
	if (isGamePlaying) {
		// 1. Random Number
		let dice = Math.floor(Math.random() * 6) + 1;

		// 2. Display The Result
		let diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src = 'dice-' + dice + '.png';

		// 3. Update the Round Score IF the rolled dice was NOT a 1

		if (dice !== 1) {
			//Add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent =
				roundScore;
		} else if (dice === 6 && dice === 6) {
			//Next Player
			nextPlayer();
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	if (isGamePlaying) {
		// 1. Add the current Score To The Global Score
		scores[activePlayer] += roundScore;

		// 2. Update The UI
		document.querySelector('#score-' + activePlayer).textContent =
			scores[activePlayer];

		// 3. Check if player on won the Game

		if (scores[activePlayer] > 100) {
			document.querySelector('#name-' + activePlayer).textContent = 'winner !!';
			document.querySelector('.dice').style.display = 'none';
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

	document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	isGamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
}

// document.querySelector('#current-' + activePlayer).textContent = dice;

// let x = document.querySelector('#score-1').textContent;
// console.log(x);

// document.querySelector('.player-0').classList.remove('player-active');
// document.querySelector('.player-1').classList.add('player-active');
