let user = prompt("Enter name");
let player1 = tikTakToe(user);

function tikTakToe(name){
    const user = createPlayer(name);
    let gameBoard = {
        top: "eee",
        middle: "eee",
        bottom: "eee"
        }
    
    let getBoardState = () => gameBoard;
    

    
    return Object.assign({},{getBoardState}, user)
};

function createPlayer(name){
    function getName(){
        return name;
    }
    return {getName};
}

