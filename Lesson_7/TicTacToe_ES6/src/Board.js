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