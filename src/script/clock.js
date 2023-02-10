var hour = document.getElementById("hours");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");
var date = document.getElementById("date");
var fullDayVar = document.getElementById("fullDay");
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


var clock = setInterval(

    function time() {

        var dateNow = new Date();

        let hours = dateNow.getHours();
        let minutes = dateNow.getMinutes();
        let seconds = dateNow.getSeconds();
        let fullDay = dateNow.getUTCDate();
        let day = weekday[dateNow.getDay()];

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
        date.textContent = day;
        fullDayVar.textContent = fullDay;

    }, 1000

);