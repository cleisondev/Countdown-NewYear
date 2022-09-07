//Queries
const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minsEl = document.querySelector('#mins')
const secEl = document.querySelector('#sec')


//The date target
const newYears = '1 Jan 2023';

//Main function
function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalseconds / 3600 / 24 );
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds ) % 60
    
    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(minutes)
    secEl.innerHTML = formatTime(seconds)

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}



//Initial Call
countDown()

setInterval(countDown, 1000)