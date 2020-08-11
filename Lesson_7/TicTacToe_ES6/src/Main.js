window.addEventListener('load',function (){
    const game = new Game();
    const board = new Board();
    const status = new Status();

    board.init(game,status); //инициалиазция игры и статуса
    game.init(status,board); //инициализация в игре статуса и доски
    board.renderMap(); //отрисовка игрового поля
    board.initEventHandlers(); //назначение слушателя события
});