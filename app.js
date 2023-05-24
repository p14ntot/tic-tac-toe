const gameboardModule = (() => {
    let board = new Array(9).fill('-');
    return { board };
})();
  

const displayControllerModule = ((board) => {
    
    
    renderContent(board);
  
    function renderContent(board) {
        
        //delete the old grid
        const oldBoard = document.getElementById('grid');    
        while (oldBoard.firstChild) {
            oldBoard.removeChild(oldBoard.firstChild);
        }
        
        //create a new grid with the new content of the board
        for (let i = 0; i < board.length; i++) {
            const boardGrid = document.getElementById('grid');
            const btn = document.createElement('button');
            btn.classList.add('box');
            btn.id = 'btn' + i;
            btn.style.cursor = 'pointer';
            boardGrid.appendChild(btn);
            btn.innerHTML = board[i];
            btn.addEventListener('click', () => addMarks(btn.id,board));
        }
    }
    
  
    function addMarks(id,board) {
      //replaces the id from btn1 -----> 1
      const index = parseInt(id.replace('btn', ''));
      let total = 0;
      for (let i = 0; i < board.length; i++) {
        
        if(board[i]==='-'){
            total += 1;
        }
      }

      //if the total mod 2 = 1 the index of the board must be X  
      if(total % 2 === 1 && board[index]==='-'){
            board[index] = 'X'; 
            let player='PLAYER 1';
            renderContent(board);
            checkWinner(board,player,total);
        }  

       
       // if the total mod 2 = 1 the index of the board must be O  
       else if (total % 2 === 0 && board[index]==='-'){
        board[index] = 'O'; 
        player='PLAYER 2';
        renderContent(board);
        checkWinner(board,player,total);
       }
    }

    // Check the winning compination
    function checkWinner(board,player,total){
        const message = document.getElementById('who-wins');
        if (board[0] === board[1] && board[0] === board[2] && board[0] !== '-'){
            //show the winning message
            message.innerHTML = 'THE WINNER IS: ' +player;
            message.style.display = 'block';
            //

            //hide the gameBoard
            const board=document.getElementById('grid');
            board.style.display='none';
        }
        else if(board[0] === board[3] && board[0] === board[6] && board[0] !== '-'){
            message.innerHTML = 'THE WINNER IS: ' +player;
            message.style.display = 'block';
            //

            //hide the gameBoard
            const board=document.getElementById('grid');
            board.style.display='none';
        }
        else if(board[0] === board[4] && board[0] === board[8] && board[0] !== '-'){
            message.innerHTML = 'THE WINNER IS: ' +player;
            message.style.display = 'block';
            //

            //hide the gameBoard
            const board=document.getElementById('grid');
            board.style.display='none';
        }
        else if(board[1] === board[4] && board[1] === board[7] && board[1] !== '-'){
            message.innerHTML = 'THE WINNER IS: ' +player;
            message.style.display = 'block';
            //

            //hide the gameBoard
            const board=document.getElementById('grid');
            board.style.display='none';
        }
        else if(board[2] === board[5] && board[2] === board[8] && board[2] !== '-'){
            message.innerHTML = 'THE WINNER IS: ' +player;
            message.style.display = 'block';
            //

            //hide the gameBoard
            const board=document.getElementById('grid');
            board.style.display='none';
        }
        else if(board[2] === board[4] && board[2] === board[6] && board[2] !== '-'){
            message.innerHTML = 'THE WINNER IS: ' +player;
            message.style.display = 'block';
            //

            //hide the gameBoard
            const board=document.getElementById('grid');
            board.style.display='none';
        }
        else if(board[6] === board[7] && board[6] === board[8] && board[6] !== '-'){
            message.innerHTML = 'THE WINNER IS: ' +player;
            message.style.display = 'block';
            //message.style.marginLeft = '30%';

            //hide the gameBoard
            const board=document.getElementById('grid');
            board.style.display='none';
        }
        else if(total===1){
            message.innerHTML = 'IT IS A DRAW !!!'; 
            message.style.display = 'block';
            //

            //hide the gameBoard
            const board=document.getElementById('grid');
            board.style.display='none';

        }
        console.log(total)
    }

    // Make the new button work
    const newGame = document.getElementById('new');
    newGame.addEventListener('click', resetGame);

    function resetGame() {
        board.fill('-');
        total = 0;
        renderContent(board);
        
        //hide the winner message
        const message = document.getElementById('who-wins');;
        message.style.display='none';

        //display the board again
        const boardDiv=document.getElementById('grid');
        boardDiv.style.display='grid';

        //hide the rules
        const rules=document.getElementById('rules');
        rules.style.display='none';
    }



})(gameboardModule.board);




const playerFactory = (name,symbol) => {
    let getPlayerName = ()=>{
        console.log('the name is '+name +' and the symbol is ' +symbol);
    }
    return{
        getPlayerName,name,symbol
    }
}




const playerOne=playerFactory('george','X');
playerOne.getPlayerName();
const playeTwo=playerFactory('mike','O');
playeTwo.getPlayerName();




