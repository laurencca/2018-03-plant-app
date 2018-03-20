'use strict';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var day = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var currentDay = weekday[day.getDay()];
// document.getElementById("schedule").innerHTML = currentDay;

var table = document.getElementById("schedule");

function Plant (name, type, filePath, freqOfWatering) {
    this.name = name;
    this.type = type;
    this.filePath = filePath;
    this.freqOfWatering = freqOfWatering;
}

const schedule = {
    plants: [],
    selectedPlants: [],
    start: function () {
        schedule.plants.push(
            new Plant('Tomato', 'veg', '', 2),
            new Plant('Lettuce', 'veg', '', 2),
            new Plant('Peas', 'veg', '', 4),
            new Plant('Corn', 'veg', '', 1),
            new Plant('Squash', 'veg', '', 1),
            new Plant('Iris', 'flower', '', 1),
            new Plant('Rose', 'flower', '', 1),
            new Plant('Daylily', 'flower', '', 3),
            new Plant('Violet', 'flower', '', 2),
            new Plant('Peony', 'flower', '', 1),
        )
        makeTable();
        schedule.determineWaterDays();
    },

    determineWaterDays: function () {
        for (let i = 0; i < schedule.plants.length; i++) {
            if (schedule.plants[i].freqOfWatering === 1) {
                console.log('water', schedule.plants[i].name, 'on', daysOfWeek[0]);
            }
            if (schedule.plants[i].freqOfWatering === 2) {
                console.log('water', schedule.plants[i].name, 'on', daysOfWeek[0], 'and', daysOfWeek[3]);
            }
            if (schedule.plants[i].freqOfWatering === 3) {
                console.log('water', schedule.plants[i].name, 'on', daysOfWeek[0], daysOfWeek[2], 'and', daysOfWeek[5]);
            }
            if (schedule.plants[i].freqOfWatering === 4) {
                console.log('water', schedule.plants[i].name, 'on', daysOfWeek[0], daysOfWeek[2], daysOfWeek[4], 'and', daysOfWeek[6]);
            }
        }
    }
}


function dayHeader() {
    var weekRow = document.createElement("tr");
    table.appendChild(weekRow);
    var cellSpace = document.createElement("td");
    cellSpace.textContent = "";
    weekRow.appendChild(cellSpace);
    for (var weekIndex = 0; weekIndex < 7; weekIndex++) {
        var cellDay = document.createElement("td");
        cellDay.textContent = weekday[day.getDay()];
        weekRow.appendChild(cellDay);
        day.setTime(day.getTime() + 86400000);
    }
}

8640000

function makeTable() {
    table.textContent = "";
    dayHeader();
    for (var plantIndex = 0; plantIndex < schedule.plants.length; plantIndex++) {
        var plants = schedule.plants[plantIndex];
        var plantsRow = document.createElement("tr");
        var cell = document.createElement("td");
        cell.textContent = plants.name;
        plantsRow.appendChild(cell);
        table.appendChild(plantsRow);
        }
    }

window.addEventListener('load', schedule.start)
