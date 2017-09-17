class TicTacToe {
    constructor() {
        this.playField =[];
        this.playField = []; 
        for (var i = 0; i < 3; i++){ 
        this.playField[i] = []; 
        for (var j = 0; j < 3; j++){ 
        this.playField [i][j] = null; 
        }
        }

        this.currPlayer='x';
        this.winner=null;
    }

    getCurrentPlayerSymbol() {
       
      return this.currPlayer;

    }

    changePlayer(){
        if(this.currPlayer =='x') this.currPlayer = 'o';
        else this.currPlayer = 'x';
        return this.currPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
    if (this.playField[rowIndex][columnIndex] == null){
        this.playField[rowIndex][columnIndex] = this.currPlayer;
        this.isFinished();
            
         this.changePlayer();
    }
    else return;     

    }

    isFinished() {
        var i = 0;
        var j = 0;
        for( i=0; i<3; i++){
            
                if(this.playField[i][j] === this.playField[i][j+1] && 
                    this.playField[i][j] === this.playField[i][j+2] && this.playField[i][j]!= null){
                    this.winner = this.playField[i][j];
                    return true;
                } 
                j=0;    
            }

            for( i=0, j=0; j<3; j++){
            
                if(this.playField[i][j] === this.playField[i+1][j] &&
                    this.playField[i][j] === this.playField[i+2][j] && this.playField[i][j] != null){
                    this.winner = this.playField[i][j];
                    return true;
                } 
                i=0;    
            }


            i=0; j=0;
            if((this.playField[i][j] === this.playField[i+1][j+1] &&
                this.playField[i][j] === this.playField[i+2][j+2]) && this.playField[i][j] != null) {
                this.winner = this.playField[i][j];
                return true;
            }

            i=2; j=0;
                if ((this.playField[i][j] === this.playField[i-1][j+1] && 
                this.playField[i][j] === this.playField[i-2][j+2]) && this.playField[i][j] != null){
                    this.winner = this.playField[i][j];
                    return true; 
                } 

        if(this.noMoreTurns() == true) return true;
        

        return false;
    }

    getWinner() {
        
             return this.winner;
         

    }

    noMoreTurns() {

         for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                if(this.playField[i][j] == null) return false;
            }
        }
        return true;

    }

    isDraw() {
        if (this.noMoreTurns() == false || this.winner != null && this.noMoreTurns() == true)
            return false;
        else if(this.winner == null && this.noMoreTurns() == true) return true;

    }

    getFieldValue(rowIndex, colIndex) {
           return this.playField[rowIndex][colIndex];
        }
}

module.exports = TicTacToe;
