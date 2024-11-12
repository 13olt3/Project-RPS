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
    
    let getBoardState = () => gameBoard;
    function playerMove(position){
        let move = overlapCheck(position);
        gameBoard[move-1] = user.player1Mark();
    }
    function overlapCheck(position){
        if (gameBoard[position-1] == ' x' || gameBoard[position-1] == ' O'){
            let newMove = prompt('invalid move, choose another move');
            return newMove;
        }
        else return position;
    }

    function showBoardState(){
        console.log (`${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}\n${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}\n${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}`)
    }

    return Object.assign({},{getBoardState, playerMove, showBoardState}, user)
};

function createPlayer(name1, name2){

    let getName1 = () => name1;
    let player1Mark = () => ' x';
    let getName2 = () => name2;
    let player2Mark = () => ' O';
    
    return {getName1, player1Mark, getName2, player2Mark};
}


