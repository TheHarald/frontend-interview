/**
 * Реализуйте класс таймера с паузой/возобновлением
 */

const timer = new CountdownTimer(60); // 60 секунд

timer.start();
timer.pause();
timer.resume();
timer.onTick = (seconds) => console.log(seconds);
timer.onComplete = () => console.log('Время вышло!');