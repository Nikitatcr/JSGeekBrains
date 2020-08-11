let game = {
    score: 0,
    nextQuestionIndex: 0,
    run() {
        if(!this.isQuestionExists()) {
            alert(`Игра окончена, ваш счёт ${this.score}`);
            this.nextQuestionIndex = 0;
            this.score = 0;
            if (confirm("Хотите сыграть ещё раз?")) {
                this.run();
            }
            return;
        }
        let result = leader.askQuestion(questions[this.nextQuestionIndex]);
        if(result) {
            this.score++;
        }
        this.nextQuestionIndex++;
        this.run();
    },
    isQuestionExists() {
        return questions[this.nextQuestionIndex] !== undefined;
    }
}

let start = prompt("Наберите START, чтобы начать игру.");
if (start === 'START') {
    game.run();
}