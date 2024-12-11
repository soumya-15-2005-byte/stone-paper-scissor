
let userScore = 0;
let compScore = 0;
let cscore = document.getElementById("comp-score");
let uscore = document.getElementById("userscore");

const choices = document.querySelectorAll(".box");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}
let x = function(e) {
    let userchoice = e.target.getAttribute("id");
    // console.log("userchoice:",e.target.getAttribute("id"));
    playgame(userchoice);
}
// // let userchoice=x;
choices.forEach((choice) => {
    choice.addEventListener("click", x);
});

const playgame = (userchoice) => {
    console.log("userchoice:", userchoice);
    let computerchoice = gencompchoice();
    console.log("computerchoice:", computerchoice);

    if (userchoice == computerchoice) {
        console.log("It's a draw!");
        msg.style.backgroundColor = "black";
        msg.innerText = "It's a draw!";
    }
    else if (userchoice == 'rock' && computerchoice == 'scissor') {
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        uscore.innerText = ++userScore;

    }
    else if (userchoice == 'rock' && computerchoice == 'paper') {
        console.log("Computer win");
        msg.style.backgroundColor = "red"
        msg.innerText = "Computer win!";
        cscore.innerText = ++compScore;

    }
    else if (userchoice == 'paper' && computerchoice == 'rock') {
        console.log("You win");
        msg.style.backgroundColor = "green";
        msg.innerText = "You win!";
        uscore.innerText = ++userScore;;


    }
    else if (userchoice == 'scissor' && computerchoice == 'rock') {
        console.log("Computer win");
        msg.style.backgroundColor = "red";
        msg.innerText = "Computer win!";
        cscore.innerText = ++compScore;

    }
    else if (userchoice == 'scissor' && computerchoice == 'paper') {
        console.log("You win");
        msg.style.backgroundColor = "green";
        msg.innerText = "You win";
        uscore.innerText = ++userScore;;

    }

};
playgame();





//box.addEventListener('click', x);


//   {
//   boxes[i].addEventListener('click', x);
// }






// let msg=document.getElementById("msg");

// let x=function(e){

// }

// while{
// //         let random = words[Math.floor(Math.random() * words.length)];
//         if (userchoice == random) {
//             console.log("draw");
//           msg.innerText=("draw");
//             document.write("draw <br>");
//         }
//         else if (userchoice == 's' && random == 'w') {

//           msg.innerText=("you win");

//               userScore++;

//             chances++;
//         }
//         else if (userchoice == 'w' && random == 's') {
//             console.log("you loss there is a snake ");
//            msg.innerText=("you loss there is a snake ");

//         }
//         else if (userchoice == 's' && random == 'g') {
//             console.log("you loss there is a gun");
//           msg.innerText=("you loss there is a gun");
//              document.write("you loss there is a gun <br> ");
//             chances++;
//         }
//         else if (userchoice == 'g' && random == 's') {
//             console.log("you win");
//           msg.innerText=("you win");
//              document.write("you win <br>");
//               userScore++;
//             chances++;
//         }
//         else if (userchoice== 'g' && random == 'w') {
//             console.log("you loss there is a water");
//           msg.innerText=("you loss there is a water");
//              document.write("you loss there is a water <br>");

//         }
//         else if (userchoice== 'w' && random == 'g') {
//             console.log("you loss there is a gun");
//           msg.innerText=("you loss there is a gun");
//              document.write("you loss there is a gun <br>");
//             chances++;
//         }
//         else {
//             console.log("Invalid input. Please enter s, g, or w");
//           msg.innerText=("Invalid input. Please enter s, g, or w"));
//              document.write("Invalid input. Please enter s, g, or w <br>");
//         }
//         }
// console.log(`Points: ${points}, Chances: ${chances}`);

// document.write(`Points: ${points}, Chances: ${chances}<br>`);

// console.log("Randomly generated value:", random);
// document.write("Randomly generated value: <br>", random );




// // }





