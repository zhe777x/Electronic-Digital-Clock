setInterval(CurrentClock, 1000)
setInterval(CurrentDate, 1000)
setInterval(title, 1000)
const hours = document.querySelector('[hours]')
const minutes = document.querySelector('[minutes]')
const seconds = document.querySelector('[seconds]')
const years = document.querySelector('[years]')
const month = document.querySelector('[month]')
const date = document.querySelector('[date]')
const title_time = document.querySelector('[title]')

CurrentClock()
function CurrentClock() {
    const currentDate = new Date()
    const currentHours = currentDate.getHours()
    const currentMinutes = currentDate.getMinutes()
    const currentSeconds = currentDate.getSeconds()
    output(hours, String(currentHours).padStart(2, '0'))
    output(minutes, String(currentMinutes).padStart(2, '0'))
    output(seconds, String(currentSeconds).padStart(2, '0'))
}

function CurrentDate() {
    const currentDate = new Date()
    const currentYears = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDa = currentDate.getDate()
    output(years, currentYears)
    output(month, String(currentMonth + 1).padStart(2, '0'))
    output(date, String(currentDa).padStart(2, '0'))
}

function title() {
    const currentDate = new Date()
    const currentHours = currentDate.getHours()
    const currentMinutes = currentDate.getMinutes()
    const currentSeconds = currentDate.getSeconds()
    output(title_time, `
        ${String(currentHours + 1).padStart(2, '0')}
        ：${String(currentMinutes + 1).padStart(2, '0')}
        ：${String(currentSeconds + 1).padStart(2, '0')}
    `)
}

function output(num, time) {
    num.innerHTML = time
}
