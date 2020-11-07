/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

  
//THE COMMENTED CODES ARE TRIAL AND ERROR CODES SAVED FOR FUTURE REFERNCES
    /* 
    //random number and check for a double-six roll                                            
        var thisRoll=dice;
        var lastRoll=0;
        var count=0;
        
        if(thisRoll===6){
            lastRoll=6;
            count+=1;
        }
        else{
            lastRoll=0;
            count=0;
        }
        if(thisRoll===6 && lastRoll===6 && count===2){
        //remove all his scores and give the next player his turn
            alert('you played a double-six');
        document.querySelector('#score-'+activePlayer).textContent='0';
        document.querySelector('#current-'+activePlayer).textContent='0';
       nextplayer();
        count=0;
        }
        
        //my perception MINE
        var thisRoll=dice;
        var count=0;
        
        for (i=0; roll<=2; i++){
        if(thisRoll===6){
            count+=1;
        }
            else{
                count=0;
        }   
            return count; 
        }
        //now that we have gotten the value of count, we remove his scores if his count reaches 2
        if(count===2){    
        //remove all his scores and give the next player his turn
        alert('you played a double-six');
        document.querySelector('#score-'+activePlayer).textContent='0';
        document.querySelector('#current-'+activePlayer).textContent='0';
        nextplayer();
        count=0;
        }
        This code is incorrect, as you progress in your studies, this is one of the codes you come back to correct or inspect
        // Below is a version of the code that seems to let the code execute. confirm as yo advance
         var thisRoll=dice;
        var count=0;
        
        if(thisRoll===6){
            count+=1;
        }
            else{
                count=0;
        }   
        
        //now that we have gotten the value of count, we remove his scores if his count reaches 2
        if(count===2){    
        //remove all his scores and give the next player his turn
        alert('you played a double-six');
        document.querySelector('#score-'+activePlayer).textContent='0';
        document.querySelector('#current-'+activePlayer).textContent='0';
        nextplayer();
        count=0;
        }
        */
    
        
  
var scores, roundScore, activePlayer, gamePlaying;

init();
var lastDice;



document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        //2. Display the result 
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        
        //3. Update the round score IF the rolled number was NOT a 1 and if he rolled two sixes in a row.
        
        if (dice1 !== 1 || dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2 ;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } 
        else {
            //Next player
            nextPlayer();
        }
    }    
});
        
        
        
        /*if(lastDice === 6 && dice === 6){
            // set active player scores to zero and give next player
            score[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent='0';
            nextPlayer();
        }
         else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } 
        else {
            //Next player
            nextPlayer();
        }
        lastDice= dice;
    }    
});
*/

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        var finalScore= document.querySelector('.final-score').value;
        
        if (scores[activePlayer] >= finalScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            removeDice();        
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
         else {
            //Next player
            nextPlayer();
        }
        
       /* if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            removeDice();        
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } 
        else {
            //Next player
            nextPlayer();
        }*/
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    removeDice();
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
   
    removeDice();
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function removeDice(){
     document.querySelector('#dice-1').style.display = 'none';
     document.querySelector('#dice-2').style.display = 'none';
}






















































