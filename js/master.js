let hour = document.getElementsByClassName('hr')[0]
let minute = document.getElementsByClassName('mn')[0]
let second = document.getElementsByClassName('sc')[0]

setInterval(setClock, 1000)

function setClock() {
    let day = new Date();
    let mm = day.getMinutes() * 6;
    let hh = day.getHours() * 30 + Math.round(mm / 12);
    let ss = day.getSeconds() * 6

    hour.style.transform = 'rotateZ(' + hh + 'deg)'
    minute.style.transform = 'rotateZ(' + mm + 'deg)'
    second.style.transform = 'rotateZ(' + ss + 'deg)'
}