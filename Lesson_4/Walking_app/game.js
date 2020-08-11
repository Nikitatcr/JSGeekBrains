let game = {
    /**
     * Запускает игру
     */
    run() {
        while (true) {
            //получаем направление от игрока.
             const direction = mover.getDirection();
             if(direction === null) {
                  console.log('Игра окончена');
                  return;
             }
             const nextPoint = mover.getNextPosition(direction);
             if(mover.canPlayerMakeStep(nextPoint)){
                 renderer.clear();
                 player.move(nextPoint);
                 renderer.render();
             }
        }
    },

    //Этот метод выполняется при открытии страницы
    init() {
        console.log('Ваше положение на поле в виде "о".');
        renderer.render(); //отрисовка поля
        console.log('Чтобы нажать игру, наберите game.run() и нажмите Enter.')
    }
};

game.init();