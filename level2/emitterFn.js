function eventEmitter() {

    function subscribe(eventName, callback) {
        // Подписка на событие
    }

    function dispatch(eventName) {
        // Вызов всех обработчиков события
    }

    return {
        subscribe,
        dispatch
    }
}

const emitter = eventEmitter();

const handleEvent = () => console.log("some event");

const unsubscribe = emitter.subscribe('event1', handleEvent)


emitter.dispatch('event1'); // some event
unsubscribe()
emitter.dispatch('event1'); //