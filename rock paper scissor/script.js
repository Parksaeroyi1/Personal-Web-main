const signs = ['rock', 'paper', 'scissor'];

const getPlayerChoice = () => {
    return signs[Math.floor(Math.random() * signs.length)];
}

const getCpuChoice = () => {
    return signs[Math.floor(Math.random() * signs.length)];
}

const getResult = (playerChoice, cpuChoice) => {
    if (playerChoice === cpuChoice) {
        return "It's a DRAW";
    } else if ((playerChoice === 'rock' && cpuChoice === 'scissor') || 
               (playerChoice === 'scissor' && cpuChoice === 'paper') || 
               (playerChoice === 'paper' && cpuChoice === 'rock')) {
        return "PLAYER WINS!";
    } else {
        return "CPU WINS!";
    }
};

document.getElementById('playerButton').addEventListener('click', () => {
    const playerChoice = getPlayerChoice();
    const cpuChoice = getCpuChoice();

    document.getElementById('playerResult').textContent = `PLAYER HAS ${playerChoice}`;
    document.getElementById('cpuResult').textContent = `CPU HAS ${cpuChoice}`;
    
    const result = getResult(playerChoice, cpuChoice);
    document.getElementById('gameResults').textContent = result;
});
