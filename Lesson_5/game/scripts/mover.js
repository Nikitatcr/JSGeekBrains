let mover = {

    /**
     * Метод проверяет существование ячейки, куда может перейти пользователь.
     * @param {{x:number, y: number}} nextPoint координаты ячейки
     * @return {boolean} если ячейка существует, то true, иначе false/
     */

    canPlayerMakeStep(nextPoint) {
        return renderer.getSquare(nextPoint) !== null;
    },


    /**
     * Метод выполняет перемешение игрока по полю
     * @param {KeyboardEvent} event объект события нажатия клавиши.
     */
    makeStep(event) {
        let newPosition = this.getNewPosition(event);
        if (this.arePositionEqual(player,newPosition)){
            return;
        }
        if(!this.canPlayerMakeStep(newPosition)){
            return;
        }
        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(newPosition);
    },

    /**
     * В зависимости от того какую стрелку нажал пользователь, метод возвращает
     * координаты новой ячейки, либо если туда нельзясделать шан, то координаты
     * существующей ячейки.
     * @param {KeyboardEvent} event объект события нажатия клавиши
     * @return {{x: number, y: number}}
     */
    getNewPosition(event) {
        switch (event.key) {
            case "ArrowUp":
                return {x: player.x, y: player.y - 1};
            case "ArrowDown":
                return {x: player.x, y: player.y + 1};
            case "ArrowLeft":
                return {x: player.x - 1, y: player.y};
            case "ArrowRight":
                return {x: player.x + 1, y: player.y};
            default:
                return {x: player.x, y: player.y};
        }
    },

    /**
     * Метод проверяет совпадают ли координаты двух позиций.
     * @param {{x: number, y: number}} curPos текущая позиция
     * @param {{x: number, y: number}} newPos новая позиция
     * @return {boolean|boolean} если совпадает, то true, иначе false
     */
    arePositionEqual(curPos,newPos) {
        return curPos.x == newPos.x && curPos.y == newPos.y;
    }
};