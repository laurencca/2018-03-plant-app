'use strict';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var day = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// var currentDay = weekday[day.getDay()];

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
            new Plant('Tomato', 'veg', 'images/tomato.png', 2),
            new Plant('Lettuce', 'veg', 'images/tomato.png', 2),
            new Plant('Peas', 'veg', 'images/tomato.png', 4),
            new Plant('Corn', 'veg', 'images/tomato.png', 1),
            new Plant('Squash', 'veg', 'images/tomato.png', 1),
            new Plant('Iris', 'flower', 'images/tomato.png', 1),
            new Plant('Rose', 'flower', 'images/tomato.png', 1),
            new Plant('Daylily', 'flower', 'images/tomato.png', 3),
            new Plant('Violet', 'flower', 'images/tomato.png', 2),
            new Plant('Peony', 'flower', 'images/tomato.png', 1),
        )
        
        const selectedPlants = JSON.parse(localStorage.getItem('selectedPlants'));
        if (selectedPlants) {
            schedule.selectedPlants = selectedPlants;
        }
        
        const form = document.getElementById('form');
        if (form) {
            form.addEventListener('submit', schedule.storeData);
        }
        
        if (table) {
            makeTable();
        }

        const scheduleTable = document.getElementById('schedule');
        if (scheduleTable) {
        scheduleTable.addEventListener('click', schedule.changeIcon);
        }
    },
    
    storeData: function(event) {
        
        const formSelections = [];
        
        // pushes checked vegetables into formSelections array
        for (let i = 0; i < event.target.veg.length; i++) {
            const checkbox = event.target.veg[i];
            if (checkbox.checked) {
                const correspondingPlant = schedule.plants[i];
                formSelections.push(correspondingPlant);
            }
        }
        
        // pushes checked flowers into formSelections array
        for (let i = 0; i < event.target.flower.length; i++) {
            const checkbox = event.target.flower[i];
            if (checkbox.checked) {
                const correspondingPlant = schedule.plants[i + 5];
                formSelections.push(correspondingPlant);
            }
        }
        
        localStorage.setItem('selectedPlants', JSON.stringify(formSelections));
        console.log(formSelections);
    },


    changeIcon: function() {
        const image = document.getElementsByTagName('td');
        console.log('listening');
    },
    
    getNextDayOfWeek: function(date, dayOfWeek) {
        var resultDate = new Date(date.getTime());
        resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 +1);
        return resultDate;
    }
}

function dayHeader() {
    var weekRow = document.createElement("tr");
    table.appendChild(weekRow);
    var cellSpace = document.createElement("th");
    cellSpace.textContent = "";
    weekRow.appendChild(cellSpace);
    for (var weekIndex = 0; weekIndex < 7; weekIndex++) {
        var cellDay = document.createElement("td");
        cellDay.textContent = weekday[day.getDay()];
        weekRow.appendChild(cellDay);
        day.setTime(day.getTime() + 86400000);
    }
}

function makeTable() {
    table.textContent = "";
    dayHeader();
    for (var plantIndex = 0; plantIndex < schedule.selectedPlants.length; plantIndex++) {
        var plants = schedule.selectedPlants[plantIndex];
        var plantsRow = document.createElement("tr");
        var cell = document.createElement("th");
        cell.textContent = plants.name;
        plantsRow.appendChild(cell);
        var img = document.createElement('img');
        img.src = schedule.plants[plantIndex].filePath;
        for (var dayIndex = 0; dayIndex < weekday.length; dayIndex++) {
            var cell = document.createElement("td");
            if (waterDays[schedule.plants[plantIndex].freqOfWatering-1][dayIndex] === true) {
                cell.appendChild(img);
            }
            plantsRow.appendChild(cell);
        }
        table.appendChild(plantsRow);
    }
}

var waterDays = [
  [true, false, false, false, false, false, false],
  [true, false, false, true, false, false, false],
  [true, false, true, false, false, true, false],
  [true, false, true, false, true, false, true],
]

window.addEventListener('load', schedule.start)
