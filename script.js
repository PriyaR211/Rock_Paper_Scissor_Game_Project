
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const seriesRes = document.querySelector("#seriesRes");

let userScore = 0;
let compScore = 0;

choices.forEach((ele) => {
    ele.addEventListener("click", () => {
        let userChoice = ele.getAttribute("id");
        console.log("user choice: ", userChoice);
        if(showRes == false){
            seriesRes.innerText = "";
            seriesRes.classList.remove("seriesRes");
        }
        playGame(userChoice);

    })
})

const compRes = () => {
    const arr = ["rock", "paper", "scissor"];
    let indx = Math.floor(Math.random() * 3);
    console.log("Comp Choice: ", arr[indx]);
    return arr[indx];
}

const playGame = (userChoice) => {
    let compChoice = compRes();
    if (userChoice == compChoice) {
        console.log("Match Draw");
        msg.style.backgroundColor = "#343153";
        msg.innerText = `Your ${userChoice} equals comp ${compChoice}. Match Draw!! Play Again`;
    }
    else if (userChoice == "rock") {
        if (compChoice == "scissor") {
            console.log("user wins");
            userScore++;
            showUserRes(userChoice, compChoice);
        }
        else {
            console.log("Comp wins");
            compScore++;
            showCompRes(userChoice, compChoice);
        }
    }
    else if (userChoice == "paper") {
        if (compChoice == "rock") {
            console.log("User Wins");
            userScore++;
            showUserRes(userChoice, compChoice);
        }
        else {
            console.log("Comp wins");
            compScore++;
            showCompRes(userChoice, compChoice);
        }
    }
    else {
        if (compChoice == "paper") {
            console.log("User wins");
            userScore++;
            showUserRes(userChoice, compChoice);
        }
        else {
            console.log("Comp wins");
            compScore++;
            showCompRes(userChoice, compChoice);
        }
    }

}

showUserRes = (userChoic, compChoic) => {
    msg.innerText = `Your ${userChoic} beats comp ${compChoic}. Congrats!! You Won`;
    msg.style.backgroundColor = "green";
    console.log("user score ", userScore);
    userScorePara.innerText = userScore;
    showSeries();
}

showCompRes = (userChoic, compChoic) => {
    msg.innerText = `Comp ${compChoic} beats your ${userChoic}. You Lost`;
    msg.style.backgroundColor = "#c72929";
    console.log("comp score ", compScore);
    compScorePara.innerText = compScore;
    showSeries();
}


let showRes = true; 

setScore0 = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    showRes = false;
}

const showSeries = () => {
    if (userScore == 5) {
        console.log(`Congrats!!! You won the series`);
        seriesRes.innerText = `Congrats!! You Won Series by ${userScore}-${compScore}`;
        seriesRes.classList.add("seriesRes");
        setScore0();
        
    }
    else if (compScore == 5) {
        seriesRes.innerText = `Comp won by ${compScore}-${userScore}. You Lost Series!`;
        console.log(`You lost the series`);
        seriesRes.classList.add("seriesRes");
        seriesRes.style.backgroundColor = "#7C77B9";
        setScore0();
    }
}



