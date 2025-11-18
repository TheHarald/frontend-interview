class EventEmitter {
    // Подписка на событие
    subscribe(eventName, callback) { }
    // Вызов всех обработчиков события
    dispatch(eventName) { }
}

const emitter = new EventEmitter();

const handleEvent = () => console.log("some event");

const unsubscribe = emitter.subscribe('event1', handleEvent)


emitter.dispatch('event1'); // some event
unsubscribe()
emitter.dispatch('event1'); //