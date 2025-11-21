class Timer { }

// Пример использования:
const timer = new Timer({
    duration: 60,
    onTick: (seconds) => console.log(`Осталось: ${seconds} сек`),
    onComplete: () => console.log('Время вышло!')
});

timer.start();

// Через 10 секунд поставим на паузу
setTimeout(() => {
    timer.pause();
    console.log('Таймер на паузе');

    // Через 5 секунд возобновим
    setTimeout(() => {
        timer.resume();
        console.log('Таймер возобновлен');
    }, 5000);
}, 10000);