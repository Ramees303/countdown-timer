const daysData = document.getElementById("days")
const hourData = document.getElementById("hour")
const minutesData = document.getElementById("minutes")
const secondsData = document.getElementById("seconds")


const newYearDate="1 Jan 2024"

function dateCountDown(){
    const newYear=new Date(newYearDate)
    const currentDate=new Date()

    const secondsLeft=Math.floor(((newYear-currentDate)/1000))
    const seconds=Math.floor(secondsLeft)%60
    const minutes=Math.floor(secondsLeft/60)%60
    const hour=Math.floor((secondsLeft/3600))%24
    const days=Math.floor(secondsLeft/3600/24)

    daysData.innerHTML=days
    hourData.innerHTML=formatTime(hour)
    minutesData.innerHTML=formatTime(minutes)
    secondsData.innerHTML=formatTime(seconds)

    function formatTime(time){
        return time<10? `0${time}`:time

    }

}

 dateCountDown()
 setInterval(dateCountDown, 1000);