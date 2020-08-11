class Snake {
    constructor() {
        this.possibleDirections = ['down','up','left','right'];
        this.body = [
            {
            x:1,
            y:1,
            },
        ];
        this.direction = 'down';
    }

    /**
     * @param {Settings} settings настройки игры
     */
    init(settings) {
        this.settings = settings;
    }

    /**
     * Меняем направление движения.
     * @param {string} newDirection направление может быть down, up, left, right
     * @throws {Error} при передаче некорректного направления выбрасывается ошибка.
     */
    changeDirection(newDirection){
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error('Передано неверное направление. Вы передали:' +newDirection);
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }

    /**
     * Идёт ли змейка в обратном направлении.
     * @param {string} newDirection новое направление может быть up,down,right,left
     * @returns {boolean} true если новое направление противоположно текущему, иначе false
     */
    isPassedOppositeDirection(newDirection) {
        if(this.direction == 'down' && newDirection == 'up') {
            return true;
        }
        if(this.direction == 'up' && newDirection == 'down') {
            return true;
        }
        if(this.direction == 'left' && newDirection == 'right') {
            return true;
        }
        if(this.direction == 'right' && newDirection == 'left') {
            return true;
        }
        return false;
    }

    /**
     * Метод осуществляет шаг змейки. Добавляет ячейку перед существующим положением головы и удаляет
     * одну ячейку в хвосте.
     */
    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        switch (this.direction) {
            case "down":
                newHeadCoords.y++;
                break;
            case "up":
                newHeadCoords.y--;
                break;
            case "left":
                newHeadCoords.x--;
                break;
            case "right":
                newHeadCoords.x++;
                break;
        }

        //Если голова уходит за правый край
        if(newHeadCoords.x > this.settings.colsCount) {
            newHeadCoords.x = 1;
        }

        //Если глова уходит за нижний край
        if(newHeadCoords.y > this.settings.rowsCount) {
            newHeadCoords.y = 1;
        }

        //Если голова уходит за левый край
        if(newHeadCoords.x == 0 ) {
            newHeadCoords.x = this.settings.colsCount;
        }

        //Если голова уходит за верхний край
        if(newHeadCoords.y == 0 ) {
            newHeadCoords.y = this.settings.rowsCount;
        }

        this.body.unshift(newHeadCoords);
        this.body.pop();
    }

    /**
     * Метод дублирует вмассиве объектов представляющих тело змейки последнюю ячейку
     * то есть в массивые в конце создатся два одинаковых объекта.
     * Когда метод performStep в самом конце удаляет последний элемент массива, он удаляет
     * сдублированный объект, таким образом тело змейки растёт.
     */
    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    }
}