var choices = ['rock', 'paper', 'scissor'];
var win = 0
var loss = 0 
var tie = 0

document.addEventListener('DOMContentLoaded', function () {
    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissor = document.getElementById('scissor');
    var result = document.getElementById('result')
    var buttonArr = document.querySelectorAll('button')
    
    document.querySelectorAll('button').forEach(e => { 
        // console.log(e.id) 
        e.addEventListener('click', function(e) {
            var ai = Math.floor(Math.random() * choices.length)
            if (e.target.id === choices[ai]) {
                win = + 1
                result.innerText = `Its a Tie! 😶\n You played: ${e.target.id} \n The A.I. played: ${choices[ai]} `
                console.log("ai:", choices[ai])
                console.log("player:", e.target.id)
                
            } else if (
                        (e.target.id === choices[0] && choices[ai] === choices[2]) ||
                        (e.target.id === choices[2] && choices[ai] === choices[1]) ||
                        (e.target.id === choices[1] && choices[ai] === choices[0])
                    ){
                loss = + 1
                result.innerText = `You Won! 😃\n You played: ${e.target.id} \n The A.I. played: ${choices[ai]} `
             
            } else if (
                        (e.target.id === choices[2] && choices[ai] === choices[0]) ||
                        (e.target.id === choices[1] && choices[ai] === choices[2]) ||
                        (e.target.id === choices[0] && choices[ai] === choices[1])
                    ){
                loss + 1
                result.innerText = `You Lost! ☹️ \n You played: ${e.target.id} \n The A.I. played: ${choices[ai]} `
            }
    
            
        })
        
    })


})

// result.innerText = `Win: ${win}
//             Loss: ${Loss}
//             Tie: ${Tie}`