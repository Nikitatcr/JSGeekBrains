class Board {
    constructor() {
        this.gameTabletElement = document.getElementById('game');
    }

    /**
     * @param {Game} game
     * @param {Status} status
     */
    init(game,status) {
        this.game = game;
        this.status = status;
    }

    /**
     * Отрисовка игрового поля
     */
    renderMap() {
        for (let row=0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTabletElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    initEventHandlers(){
        //ставим обработчик, приклике на таблицу вызовется функция this.cellClickHandler.
        this.gameTabletElement.addEventListener('click',event => this.game.cellClickHandler(event));
    }

    /**
     * Проверка что клип был по ячейке
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @return {boolean} Вернёт true, если клип был по ячейке, иначе false.
     */
    isClickByCell(event) {
        return event.target.tagName == 'TD';
    }

    /**
     * Проверка, что в ячейку не ставили значение (крестик или нолик)
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @return {boolean} Вернёт true, если ячейка пуста, иначе false.
     */
    isCellEmpty(event) {
        //Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.status.mapValues[row][col] === '';
    }

    /**
     * Заполняет ячейку в которую пользователь кликнул в событии event
     * @param {Event} event
     * @param {HTMLElement} event.target
     */
    fillCell(event) {
        //Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        //Заполняем ячейку и ставим значение в массиве, в свойствуе mapValues/
        this.status.mapValues[row][col]=this.status.phase;
        event.target.textContent = this.status.phase;
    }
}
class Game {

    /**
     * Инициаилизация board и status
     * @param {Status} status
     * @param {Board} board
     */

    init(status,board) {
        this.status = status;
        this.board = board;
    }
    /**
     * Обрабтчик события клика.
     * @param {MouseEvent} event
     */
    cellClickHandler(event) {
        //Если клик не нужно обрабатывать,уходим из функции.
        if(!this.isCorrectClick(event)) {
            return;
        }
        this.board.fillCell(event);
        if(this.hasWon()) {
            //Ставим статус "остановлено"
            this.status.setStatusStopped();
            //Сообщаем о победе пользователя.
            this.sayWonPhrase();
        }

        //Меняем фигуру (крестик или нолик).
        this.status.togglePhase();
    }

    /**
     * Проверка был и корректный клик, что описан в событии event
     * @param {Event} event
     * @return {boolean} Вернёт true в случае если статус игры "играем", клик что описан в объекте
     * event был по ячейке и ячейка куда был произведен клик был по пустой ячейке
     */
    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.board.isClickByCell(event) && this.board.isCellEmpty(event);
    }

    /**
     * Проверка, есть ли выигрышная ситуация на карте.
     * @return {boolean} Вернёт true, если игра выиграна, иначе false.
     */
    hasWon() {
        return this.isLineWon({x:0,y:0},{x:1,y:0},{x:2,y:0}) ||
            this.isLineWon({x:0,y:1},{x:1,y:1},{x:2,y:1}) ||
            this.isLineWon({x:0,y:2},{x:1,y:2},{x:2,y:2}) ||

            this.isLineWon({x:0,y:0},{x:0,y:1},{x:0,y:2}) ||
            this.isLineWon({x:1,y:0},{x:1,y:1},{x:1,y:2}) ||
            this.isLineWon({x:2,y:0},{x:2,y:1},{x:2,y:2}) ||

            this.isLineWon({x:0,y:0},{x:1,y:1},{x:2,y:2}) ||
            this.isLineWon({x:0,y:2},{x:1,y:1},{x:2,y:0});

    }

    /**
     * Проверка, есть ли выигрышная ситуация на линии.
     * @param {{x: int, y:int }} a 1-ая ячейка
     * @param {{x: int, y:int }} b 2-ая ячейка
     * @param {{x: int, y:int }} c 3-ья ячейка
     * @return {boolean} Вернёт true, если линия выиграна, иначе false.
     */
    isLineWon(a,b,c) {
        let value = this.status.mapValues[a.y][a.x] + this.status.mapValues[b.y][b.x] + this.status.mapValues[c.y][c.x];
        return value === 'XXX' || value === '000';
    }

    /**
     * Сообщает о победе
     */
    sayWonPhrase() {
        let figure = this.status.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    }
}
window.addEventListener('load',function (){
    const game = new Game();
    const board = new Board();
    const status = new Status();

    board.init(game,status); //инициалиазция игры и статуса
    game.init(status,board); //инициализация в игре статуса и доски
    board.renderMap(); //отрисовка игрового поля
    board.initEventHandlers(); //назначение слушателя события
});
class Status {
    constructor() {
        this.status = 'playing';
        this.mapValues = [
            ['','',''],
            ['','',''],
            ['','',''],
        ];
        this.phase = 'X';
    }

    /**
     * Проверка что мы "играем", что игра не закончен
     * @return {boolean} Вернёт true, статус игры "играем", иначе false
     */
    isStatusPlaying (){
        return this.status === 'playing';
    }

    /**
     * Ставит статус игры в "остановлена".
     */
    setStatusStopped() {
        this.status = 'stopped';
    }

    /**
     * Меняет фигуру (крестик или нолик)
     */
    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }
}
//# sourceMappingURL=maps/app.js.map
