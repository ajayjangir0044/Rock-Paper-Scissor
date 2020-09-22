let round = 0
let gender = 0
let a = 0
let count = 0
document.querySelector("#op1").addEventListener('click', function () {
    a = 5;
})
document.querySelector("#op2").addEventListener('click', function () {
    a = 7;
})
document.querySelector("#op3").addEventListener('click', function () {
    a = 9;
})


let imgClick = document.querySelector("#img1");
imgClick.addEventListener('click', function () {
    gender = 1
    document.querySelector("#firstImgDiv").style.transform = "scale(1.1)";
    document.querySelector("#img2").style.opacity = "0.6";


    document.querySelector("#secondImgDiv").style.transform = "scale(1)";
    document.querySelector("#img1").style.opacity = "1";
})
let imgClick2 = document.querySelector("#img2");
imgClick2.addEventListener('click', function () {
    gender = 2

    document.querySelector("#secondImgDiv").style.transform = "scale(1.1)";
    document.querySelector("#img1").style.opacity = "0.6";


    document.querySelector("#firstImgDiv").style.transform = "scale(1)";
    document.querySelector("#img2").style.opacity = "1";

})

let clickOp1 = document.querySelector("#op1")

let clickOp2 = document.querySelector("#op2")

let clickOp3 = document.querySelector("#op3")

clickOp1.addEventListener('click', function () {
    round = 6
    
    document.querySelector("#compImg").style.backgroundImage="url()"
    document.querySelector("#op2").style.opacity = "0.6"
    document.querySelector("#op3").style.opacity = "0.6"
    document.querySelector("#op1").style.opacity = "1"
})
clickOp2.addEventListener('click', function () {
    round = 7
    
    document.querySelector("#compImg").style.backgroundImage="url()"
    document.querySelector("#op1").style.opacity = "0.6"
    document.querySelector("#op3").style.opacity = "0.6"
    document.querySelector("#op2").style.opacity = "1"
})
clickOp3.addEventListener('click', function () {
    round = 9
    
    document.querySelector("#compImg").style.backgroundImage="url()"
    document.querySelector("#op1").style.opacity = "0.6"
    document.querySelector("#op2").style.opacity = "0.6"
    document.querySelector("#op3").style.opacity = "1"
})
let imgchange = document.querySelector("#player1")





let choices1 = document.querySelector("#choice1")
let choices2 = document.querySelector("#choice2")
let choices3 = document.querySelector("#choice3")
let optionsComp = 0
let changeImg = 0
let changedImg = document.querySelector("#compImg")
let imagesName = ["url('http://hannahch.com/images/scissors.svg')", "url('http://hannahch.com/images/rock.svg')", "url('http://hannahch.com/images/paper.svg')"]

let Player1Score = 0
let ComputerScore = 0

choices1.addEventListener("click", function () {
    count++

    if (count <= round) {

        console.log(count, round)
        optionsComp = Math.floor((Math.random() * 3) + 1);
        if (optionsComp == 1) {
            Player1Score++;
            document.querySelector("#p1").innerHTML = " " + Player1Score
        }
        if (optionsComp == 3) {
            ComputerScore++;
            document.querySelector("#p2").innerHTML = " " + ComputerScore
        }

        changeImg = imagesName[optionsComp - 1]
        choices2.style.opacity = "0.6"
        choices3.style.opacity = "0.6"
        choices1.style.opacity = "1"
        changedImg.style.backgroundImage = " " + changeImg
    } else {

        document.querySelector("#compImg").style.backgroundImage="url()"
        console.log(ComputerScore, Player1Score)
        document.querySelector("#bg3").style.display = "none"
        document.querySelector("#last").style.visibility = "visible"
        if (ComputerScore > Player1Score) {
            document.querySelector("#result").innerHTML = "Computer Won"
        }
        if (Player1Score > ComputerScore) {
            document.querySelector("#result").innerHTML = "You won"
        }
        if (ComputerScore == Player1Score) {
            document.querySelector("#result").innerHTML = "Match tied"
        }
    }



})

choices2.addEventListener("click", function () {
    count++
    if (count <= round) {

        console.log(count, round)
        optionsComp = Math.floor((Math.random() * 3) + 1);
        if (optionsComp == 2) {
            Player1Score++;
            document.querySelector("#p1").innerHTML = " " + Player1Score
        }
        if (optionsComp == 1) {
            ComputerScore++;
            document.querySelector("#p2").innerHTML = " " + ComputerScore
        }
        changeImg = imagesName[optionsComp - 1]
        choices1.style.opacity = "0.6"
        choices3.style.opacity = "0.6"
        choices2.style.opacity = "1"

        changedImg.style.backgroundImage = " " + changeImg
    } else {
        
    document.querySelector("#compImg").style.backgroundImage="url()"
        document.querySelector("#bg3").style.display = "none"

        document.querySelector("#last").style.visibility = "visible"
        console.log(ComputerScore, Player1Score)
        if (ComputerScore > Player1Score) {
            document.querySelector("#result").innerHTML = "Computer Won"
        }
        if (Player1Score > ComputerScore) {
            document.querySelector("#result").innerHTML = "You won"
        }
        if (ComputerScore == Player1Score) {
            document.querySelector("#result").innerHTML = "Match tied"
        }

    }
})


choices3.addEventListener("click", function () {
    count++
    if (count <= round) {
        console.log(count, round)
        optionsComp = Math.floor((Math.random() * 3) + 1);
        changeImg = imagesName[optionsComp - 1]

        if (optionsComp == 3) {
            Player1Score++;
            document.querySelector("#p1").innerHTML = " " + Player1Score
        }
        if (optionsComp == 2) {
            ComputerScore++;
            document.querySelector("#p2").innerHTML = " " + ComputerScore
        }

        choices2.style.opacity = "0.6"
        choices1.style.opacity = "0.6"
        choices3.style.opacity = "1"

        changedImg.style.backgroundImage = " " + changeImg
    } else {
        
    document.querySelector("#compImg").style.backgroundImage="url()"
        document.querySelector("#bg3").style.display = "none"

        document.querySelector("#last").style.visibility = "visible"
        console.log(ComputerScore, Player1Score)
        if (ComputerScore > Player1Score) {
            document.querySelector("#result").innerHTML = "Computer Won"
        }
        if (Player1Score > ComputerScore) {
            document.querySelector("#result").innerHTML = "You won"
        }
        if (ComputerScore == Player1Score) {
            document.querySelector("#result").innerHTML = "Match tied"
        }
    }

})

// else{
//     if(Player1Score>ComputerScore){
//     document.querySelector("#bg3").style.innerHTML="You Won"}
//     if(ComputerScore>Player1Score){
//         document.querySelector("#bg3").style.innerHTML="Computer won"}

//         if(ComputerScore==Player1Score){
//         document.querySelector("#bg3").style.innerHTML="Match Tied"}



// }
document.querySelector("#restart").addEventListener('click', function () {


    document.querySelector("#bg2").style.display = "block";
    document.querySelector("#game").style.visibility = "hidden"
    document.querySelector("#last").style.visibility="hidden"
    document.querySelector("#compImg").style.backgroundImage="url()"
    
})

let buttonClick = document.querySelector("#button").addEventListener('click', function () {
    document.querySelector("#bg2").style.display = "none";
    document.querySelector("#game").style.visibility = "visible"
    document.querySelector("#bg3").style.display = "block"
    count=0
    Player1Score=0
    ComputerScore=0
    document.querySelector("#p1").innerHTML = " " + Player1Score
    document.querySelector("#p2").innerHTML = " " + ComputerScore
    choices2.style.opacity = "1"
    choices1.style.opacity = "1"
    choices3.style.opacity = "1"
    document.querySelector("#compImg").style.backgroundImage="url()"
    if (gender == 2) {
        imgchange.style.backgroundImage = "url('men2.jpg')"
    }


})
