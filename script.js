// let user1 = "tay";
// let user2 = "bob";

let game;
let gameRunning = false;


function tikTakToe(name1, name2){
    const user = createPlayer(name1, name2);
    let gameBoard = [];
    for(let i=1;i<10;++i){
        gameBoard.push(`${i}e`);
    }

    let winner = 0;
    
    let getBoardState = () => gameBoard;
    function playerMove(position){      
        let move = position;
        if (overlapCheck(position) == true){
            
            return alert("invalid move");
        }
        if (overlapCheck(position) == false){
            gameBoard[move-1] = checkWhoseTurn();
            winner = winConditionCheck(gameBoard);
            if (winner == 1){
                
                alert (`${user.getName1()} wins!`);
            }
            else if (winner == 2){
                
                alert(`${user.getName2()} wins!`);
            }
            else if (winner == 3){
                alert(`Draw!`);
            }
        }

    }
     
    function resetBoard(){
        gameBoard = [];
        for(let i=1;i<10;++i){
            gameBoard.push(`${i}e`);
        }
    }


    function overlapCheck(position){
        if (gameBoard[position-1] == ' x' || gameBoard[position-1] == ' O'){
            return true;
        }
        else {
            return false;
        }
    }


    function checkWhoseTurn(){
        let x = 0;
        let o = 0;
        for (let i=0; i<=gameBoard.length;++i){
            if (gameBoard[i] == ' x'){
                x++;
            }
            else if (gameBoard[i] == ' O'){
                o++;
            }
        }
        if (x > o){
            return user.player2Mark();
        }
        else if(o >= x){
            return user.player1Mark();
        }
    }

    function winConditionCheck(gameBoard){
        let count = 0;

        if (gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]){
            if (gameBoard[0] == " x"){
                return 1;
            }
            else if (gameBoard[0] == " O"){
                return 2;
            }
        }
        if (gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6]){
            if (gameBoard[0] == " x"){
                return 1;
            }
            else if (gameBoard[0] == " O"){
                return 2;
            }
        }
        if (gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]){
            if (gameBoard[3] == " x"){
                return 1;
            }
            else if (gameBoard[3] == " O"){
                return 2;
            }
        }
        if (gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]){
            if (gameBoard[6] == " x"){
                return 1;
            }
            else if (gameBoard[6] == " O"){
                return 2;
            }
        }
        if (gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7]){
            if (gameBoard[1] == " x"){
                return 1;
            }
            else if (gameBoard[1] == " O"){
                return 2;
            }
        }
        if (gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8]){
            if (gameBoard[2] == " x"){
                return 1;
            }
            else if (gameBoard[2] == " O"){
                return 2;
            }
        }
        if (gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6]){
            if (gameBoard[2] == " x"){
                return 1;
            }
            else if (gameBoard[2] == " O"){
                return 2;
            }
        }
        if (gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8]){
            if (gameBoard[0] == " x"){
                return 1;
            }
            else if (gameBoard[0] == " O"){
                return 2;
            }
        }


        for (let i=0; i<gameBoard.length;++i){
            
            if ((gameBoard[i]== ' x') || (gameBoard[i] == ' O')){
                count++;
            }
            if (count == 9){
                return 3;
            }
        }

        return 0;
        
    }

    function showBoardState(){
        console.log (`${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}\n${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}\n${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}`)
    }

    function addMove(move){
        let mark = checkWhoseTurn();
        
    }

    return Object.assign({},{getBoardState, playerMove, showBoardState, checkWhoseTurn, overlapCheck, winConditionCheck, resetBoard}, user)
};

function createPlayer(name1, name2){

    let getName1 = () => name1;
    let player1Mark = () => ' x';
    let getName2 = () => name2;
    let player2Mark = () => ' O';
    
    return {getName1, player1Mark, getName2, player2Mark};
}



const placeMarker = document.querySelectorAll(".gameBoard > div");
placeMarker.forEach((square) =>{
    square.addEventListener('click', function(e){
        let move = parseInt(e.target.getAttribute("boxNo"));
        let mark = game.checkWhoseTurn();
        if ( game.winConditionCheck(game.getBoardState()) != 0){
            return;   
        }
        // Doesn't allow moves if the game is already done
        if (!game.overlapCheck(move)){
            if (mark == ' x'){
                e.target.classList.add("cross");
                e.target.classList.remove("circle");
            }
            else if (mark == ' O'){
                e.target.classList.add("circle");
                e.target.classList.remove("cross");
            }
            game.playerMove(move);
        }
        else {
            alert("invalid move");
        }
        
    })
});

const resetBtn = document.querySelector('.resetGame');
resetBtn.addEventListener('click', function(){

    return resetFunction();
});

function resetFunction(){
    const selectBoard = document.querySelectorAll('.gameBoard > div');
    selectBoard.forEach((section) =>{
        section.classList.remove('circle');
        section.classList.remove('cross');

    })
    game.resetBoard();
}

const startBtn = document.querySelector('.startGame');
startBtn.addEventListener('click', function(){
    let confirmation = false;
    if (gameRunning == true){
        confirmation = confirm('Do you want to start again?');
        console.log(confirmation);
        if (confirmation == true){
            console.log('asdf');
            resetFunction();            
        }
    }
   
    gameRunning = true;
    let p1 = document.querySelector('.name1').value;
    if (p1 == ''){
        p1 = 'noname';
    }
    let p2 = document.querySelector('.name2').value;
    if (p2 == ''){
        p2 = 'noname';
    }
    if (typeof game != 'object'){
        game = tikTakToe(p1,p2);
    }
    
    
})


