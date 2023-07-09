const computer = document.querySelector("#computer img");
const player = document.querySelector("#player img");
const computerPoints = document.querySelector("#compoint");
const playerPoints = document.querySelector("#playpoint");
var options = document.querySelectorAll("#btnoption button");
options = Array.from(options);

options.forEach(option => {
    option.addEventListener("click",function (){
        computer.classList.add("shakecomputer");
        player.classList.add("shakeplayer");

        setTimeout(function(){
            computer.classList.remove("shakecomputer");
            player.classList.remove("shakeplayer");
            player.src = "./" + option.innerHTML +"Player.png";

            const choice = ["STONE", "PAPER" ,"SCISSORS"];
            let arrayNo =  Math.floor(Math.random()*3);
            let computerChoice = choice[arrayNo];
            computer.src = "./" + computerChoice +"Computer.png";
        
            let cPoints = parseInt(computerPoints.innerHTML);
            let pPoints = parseInt(playerPoints.innerHTML);

            
            if (option.innerHTML === "STONE") {
                if (computerChoice === "PAPER")
                  computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "SCISSORS")
                  playerPoints.innerHTML = pPoints + 1;
              } else if (option.innerHTML === "PAPER") {
                if (computerChoice === "SCISSORS")
                  computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "STONE")
                  playerPoints.innerHTML = pPoints + 1;
              } else {
                if (computerChoice === "STONE")
                  computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "PAPER")
                  playerPoints.innerHTML = pPoints + 1;
              }
        },500);
    });
});


