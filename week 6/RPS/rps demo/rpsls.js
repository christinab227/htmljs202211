alert('select rock, paper, scissor, lizard, spock!')
var rpsls = ['rock','paper','scissors','lizard','spock']
console.log(rpsls[0]);
console.log(rpsls[1]);
console.log(rpsls[2]);
console.log(rpsls[3]);
console.log(rpsls[4]);

document.getElementById('rock').addEventListener('click',function(e){alert('you picked ' + rpsls [0]); playgame(rpsls[0]);});
document.getElementById('paper').addEventListener('click',function(e){alert('you picked ' + rpsls [1]); playgame(rpsls[1]);});
document.getElementById('scissors').addEventListener('click',function(e){alert('you picked ' + rpsls [2]); playgame(rpsls[2]);});
document.getElementById('lizard').addEventListener('click',function(e){alert('you picked ' + rpsls [3]); playgame(rpsls[3]);});
document.getElementById('spock').addEventListener('click',function(e){alert('you picked ' + rpsls [4]); playgame(rpsls[4]);});

function playgame(playerChoice){
    var cpuchoice =Math.floor(Math.random() * 2.99);
    console.log(cpuchoice, playerChoice)

    switch(playerChoice){
        case'rock': 
        if(cpuchoice === 0)
        alert('CPU chose rock its a tie')

        else if(cpuchoice == 1){
            alert('CPU choose paper. you lose!')
        }

        else if(cpuchoice == 4){
            alert('CPU choose spock. you lose!')
        }


        case'paper': 
        if(cpuchoice === 0)
        alert('CPU chose rock its you won')

        else if(cpuchoice == 1){
            alert('CPU choose paper. its a tie!')
        }

        else if(cpuchoice == 5){
            alert('CPU choose lizard. you lose!')
        }


        case'scissors': 
        if(cpuchoice === 0)
        alert('CPU chose rock its you lost')

        else if(cpuchoice == 1){
            alert('CPU choose paper. you won!')
        }

        else if(cpuchoice == 4){
            alert('CPU choose spock. you lose!')
        }



        case'lizard': 
        if(cpuchoice === 0)
        alert('CPU chose rock you lose')

        else if(cpuchoice == 1){
            alert('CPU choose paper. you won!')
        }

        else if(cpuchoice == 4){
            alert('CPU choose spock. you won!')
        }



        case'spock': 
        if(cpuchoice === 0)
        alert('CPU chose rock you win')

        else if(cpuchoice == 1){
            alert('CPU choose paper. you lose!')
        }

        else if(cpuchoice == 3){
            alert('CPU choose lizar. you lose!')
        }





        
        break;
    }


}





