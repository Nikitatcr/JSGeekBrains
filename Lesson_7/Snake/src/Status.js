/**
 * Здесь хранится статус игры, например играем, завершили или остановили
 */

class Status {
    constructor() {
        this.setPaused();
    }

    /**
     * Это значит, что мы играем
     */
    setPlaying() {
        this.condition = 'playing';
    }

    /**
     * Это значит, что игра на паузе
     */
    setPaused() {
        this.condition = 'paused';
    }

    /**
     *
     * @returns {boolean} если сейчас играем, тогда true, иначе false.
     */
    isPlaying() {
        return this.condition === 'playing';
    }

    /**
     *
     * @returns {boolean} если сейчас игра н паузе, тогда true, иначе false.
     */
    isPaused() {
        return this.condition === 'paused';
    }

}