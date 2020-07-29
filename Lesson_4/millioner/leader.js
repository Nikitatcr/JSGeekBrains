let leader = {
    askQuestion(question) {
        let variations = "";
        for (let key in question.variants) {
            variations += `${key}:${question.variants[key]}\n`
        }
        let answer = prompt(`${question.text},варианты ответа:\n${variations}`);
        return answer === question.correctAnswerIndex;
    }
}