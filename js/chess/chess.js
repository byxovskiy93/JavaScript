


makeChess();

function makeChess() {



     //Определяем фигуры

     //Белые

     let rookWhite = {name: "Rook",img:"js/chess/img/rook.svg",
                 height:"45px",width:"45px",
                 makeImg: function () {
             let eImg = document.createElement("img");
             eImg.setAttribute('src', this.img);
             eImg.setAttribute('alt', this.name);
             eImg.setAttribute('height', this.height);
             eImg.setAttribute('width', this.width);
             return eImg;
         },
         makeText:function () {
             let eText = document.createTextNode(this.name);
             return eText;
         }};

    let knightWhite = {name: "Knight",img:"js/chess/img/knight.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let bishopWhite = {name: "Bishop",img:"js/chess/img/bishop.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let queenWhite = {name: "Queen",img:"js/chess/img/queen.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let kingWhite = {name: "King",img:"js/chess/img/king.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let pawnWhite = {name: "Pawn",img:"js/chess/img/pawn.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            eImg.classList.add('test');
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }
    };


    //Черные


    let rookBlack = {name: "Rook",img:"js/chess/img/rookBlack.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let knightBlack = {name: "Knight",img:"js/chess/img/knightBlack.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let bishopBlack = {name: "Bishop",img:"js/chess/img/bishopBlack.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let queenBlack = {name: "Queen",img:"js/chess/img/queenBlack.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let kingBlack = {name: "King",img:"js/chess/img/kingBlack.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }};

    let pawnBlack = {name: "Pawn",img:"js/chess/img/pawnBlack.svg",
        height:"45px",width:"45px",
        makeImg: function () {
            let eImg = document.createElement("img");
            eImg.setAttribute('src', this.img);
            eImg.setAttribute('alt', this.name);
            eImg.setAttribute('height', this.height);
            eImg.setAttribute('width', this.width);
            eImg.classList.add('test');
            return eImg;
        },
        makeText:function () {
            let eText = document.createTextNode(this.name);
            return eText;
        }
    };





    //Ждем загрузки всего документа;
    document.addEventListener('DOMContentLoaded', function(){


        let figuresArrayWhite = [rookWhite,knightWhite,bishopWhite,queenWhite,kingWhite,bishopWhite,knightWhite,rookWhite,pawnWhite];
        let figuresArrayBlack = [rookBlack,knightBlack,bishopBlack,queenBlack,kingBlack,bishopBlack,knightBlack,rookBlack,pawnBlack];

        let alphabet = ['a','b','c','d','e','f','g','h'];

        let chessDiv = document.getElementById("chess");

        let table = document.createElement('table');

        let tableBody = document.createElement('tbody');


        table.appendChild(tableBody);

        let rowInt = 8;

        let cellFlag = true;

        for (let row = 0; row < 10; row++) {



            var tr = document.createElement('tr');
            tableBody.appendChild(tr);

            for (let cell = 0; cell < 10; cell++) {

                let td = document.createElement('td');

                if(cell != 0 && cell != 9 && row == 0){
                    td.appendChild(document.createTextNode(alphabet[cell-1]));
                }

                if(cell != 0 && cell != 9 && row == 9){
                    td.appendChild(document.createTextNode(alphabet[cell-1]));
                }


                if(cell == 0 && row !== 0 && row !== 9){
                    td.appendChild(document.createTextNode(rowInt));
                }

                if(cell == 9 && row !== 0 && row !== 9){
                    td.appendChild(document.createTextNode(rowInt));
                    --rowInt;
                }


                if(row == 1 && cell !== 0 && cell !== 9){
                    td.appendChild(figuresArrayWhite[cell-1].makeImg());
                }

                if(row == 8 && cell !== 0 && cell !== 9){
                    td.appendChild(figuresArrayBlack[cell-1].makeImg());
                }

                if(row == 2  && cell !== 0 && cell !== 9){
                    td.appendChild(figuresArrayWhite[8].makeImg());
                }


                if(row == 7  && cell !== 0 && cell !== 9){
                    td.appendChild(figuresArrayBlack[8].makeImg());
                }



                //Красим ячейки
                if(row !== 0 && row !== 9 && cell !== 0 && cell !== 9){

                    if(cellFlag){
                        td.classList.add('cell-white');
                        cellFlag = (cell == 8) ?  true :  false;

                    }else{
                        td.classList.add('cell-black');
                        cellFlag = (cell == 8) ?  false :  true;
                    }
                }

                tr.appendChild(td);
            }

        }
        chessDiv.appendChild(table);

    });
}