function getComputerChoice(){
    let rng = Math.random();
    if (rng <= .33333333){
        return "rock";
    } else if (rng >= .33333334 && rng <= .66666666){
        return "paper";
    } else if (rng >= .66666667){
        return "scissors";
    }
    
};

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());