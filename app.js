
var scores,roundScore,activePlayer,gameplaying,prevvalue;

init();

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gameplaying){
		scores[activePlayer]+=roundScore;
		document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
		prevvalue=0;
		var input = document.querySelector('.final-score').value;
		var winnerscore;
		if(input){
			winnerscore=input
		}
		else{
			winnerscore=100;
		}
		if(scores[activePlayer]>=winnerscore)
		{
			document.querySelector('#name-'+activePlayer).textContent='Winner';
			document.querySelector('.dice').style.display='none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gameplaying=false;
		}
		else{
			nextPlayer()
		}
	}	
});

document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gameplaying){
		var dice=Math.floor(Math.random()*6)+1;

		var temp=document.querySelector('.dice');
		temp.style.display='block';
		temp.src='dice-'+dice+'.png';
		if(dice==1){
			nextPlayer();	
		}
		else if(dice==6 && prevvalue==6){
			scores[activePlayer]=0;
			document.querySelector('#score-'+activePlayer).textContent='0';
			nextPlayer();
		}
		else{
			prevvalue=dice;
			roundScore+=dice;
			document.querySelector('#current-'+activePlayer).textContent=roundScore;
		}
	}
});

function nextPlayer() {
	document.querySelector('#current-'+activePlayer).textContent='0';
	activePlayer===0 ? activePlayer=1 :activePlayer=0;
	roundScore=0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click', init);
function init(){
	scores=[0,0];
	roundScore=0;
	activePlayer=0;
	prevvalue=0;
	gameplaying=true;
	document.querySelector('.dice').style.display='none';
	document.querySelector('#current-0').textContent='0';
	document.querySelector('#current-1').textContent='0';
	document.querySelector('#score-0').textContent='0';
	document.querySelector('#score-1').textContent='0';
	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('#name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

