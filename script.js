let user1 = prompt(`Enter name1`);
let user2 = prompt(`Enter name2`);


// let firstMove = promt(`choose a square`);
let game = tikTakToe(user1, user2);

function tikTakToe(name1, name2){
    const user = createPlayer(name1, name2);
    let gameBoard = [];
    for(let i=1;i<10;++i){
        gameBoard.push(`${i}e`);
    }
    let winner = 0;
    
    let getBoardState = () => gameBoard;
    function playerMove(position){      
        let move = overlapCheck(position);
        gameBoard[move-1] = checkWhoseTurn();
        winner = winConditionCheck(gameBoard);

    }
    function playGame(){
        while ((winner != 1) && (winner != 2) && (winner != 3)){
            let position = prompt(`${showBoardState()} choose move`);
            playerMove(position);
        }
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

    function overlapCheck(position){
        if (gameBoard[position-1] == ' x' || gameBoard[position-1] == ' O'){
            let newMove = prompt('invalid move, choose another move');
            return newMove;
        }
        else {
            return position;
        }
    }
    function wholeGame(){
        alert(user.getName1());
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
        else {
            return user.player1Mark();
        }
    }

    

    function showBoardState(){
        console.log (`${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}\n${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}\n${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}`)
    }

    return Object.assign({},{getBoardState, playerMove, showBoardState, wholeGame, playGame}, user)
};

function createPlayer(name1, name2){

    let getName1 = () => name1;
    let player1Mark = () => ' x';
    let getName2 = () => name2;
    let player2Mark = () => ' O';
    
    return {getName1, player1Mark, getName2, player2Mark};
}

function winConditionCheck(gameBoard){
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
    let count = 0;
    for (let i=0; i<gameBoard.length;++i){
        
        if ((gameBoard[i]== ' x') || (gameBoard[i] == ' O')){
            count++;
        }
        if (count == 9){
            return 3;
        }
    }
    
}




