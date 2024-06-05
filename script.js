let digitalElement = document.querySelector('.digital');

let sELement = document.querySelector('.p_s');
let mELement = document.querySelector('.p_m');
let hELement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let millisecond = now.getMilliseconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // Ponteiro dos segundos
    if (second === 0) {
        sELement.style.transition = 'none'; // Desativa a transição
    } else {
        sELement.style.transition = 'transform 0.2s linear'; // Ativa a transição
    }
    let sDeg = (360 / 60) * second + (360 / 60000) * millisecond;
    sELement.style.transform = `rotate(${sDeg - 90}deg)`;

    // Ponteiro dos minutos
    if (minute === 0) {
        mELement.style.transition = 'none'; // Desativa a transição
    } else {
        mELement.style.transition = 'transform 0.2s linear'; // Ativa a transição
    }
    let mDeg = (360 / 60) * minute + (360 / 3600) * second;
    mELement.style.transform = `rotate(${mDeg - 90}deg)`;

    // Ponteiro das horas
    if (hour === 0) {
        hELement.style.transition = 'none'; // Desativa a transição
    } else {
        hELement.style.transition = 'transform 0.2s linear'; // Ativa a transição
    }
    let hDeg = (360 / 12) * hour + (360 / 720) * minute;
    hELement.style.transform = `rotate(${hDeg - 90}deg)`;
}

function fixZero(time) {
    return time < 10 ? '0' + time : time;
}

setInterval(updateClock, 10);
updateClock();
