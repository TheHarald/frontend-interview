function eventEmitter() {
    return {
        subscribe(eventName, callback) {
            // Подписка на событие
        },
        dispatch(eventName) {
            // Вызов всех обработчиков события
        }
    }
}

const emitter = eventEmitter();

const handleEvent = () => console.log("some event");

const unsubscribe = emitter.subscribe('event1', handleEvent)


emitter.dispatch('event1'); // some event
unsubscribe()
emitter.dispatch('event1'); //