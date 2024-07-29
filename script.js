let playerScore = 0;
let computerScore = 0;

function play(userchoice) {    
    const choices = ['pierre','papier','ciseaux'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = "";
    if (userchoice === computerChoice){
        result = 'égalité parfaite !';
    } else if (
        (userchoice === 'pierre' && computerChoice === 'ciseaux') ||
        (userchoice === 'papier' && computerChoice === 'pierre') ||
        (userchoice === 'ciseaux' && computerChoice === 'papier')
    ){
        result = 'Vous gagnez!';
        playerScore++;
    } else {
        result = 'Vous perdez';
        computerScore++;
    }


document.getElementById('result').innerText = `
        Vous avez choisi ${userchoice}.
        l'ordinateur a choisi ${computerChoice}. 
        ${result}
        `;
        
document.getElementById('score').textContent = `Score: Joueur ${playerScore} - Ordinateur ${computerScore}`;
}
