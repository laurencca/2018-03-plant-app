'use strict';

// var lastWatered;
// var timeLastWatered;
var wetPlants = [];
var waterDays = [
    [true, false, false, false, false, false, false],
    [true, false, false, true, false, false, false],
    [true, false, true, false, false, true, false],
    [true, false, true, false, true, false, true],
]
var table = document.getElementById("schedule");

var day = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function Plant (name, type, filePath, wateredFilePath, freqOfWatering) {
    this.name = name;
    this.type = type;
    this.filePath = filePath;
    this.wateredFilePath = wateredFilePath;
    this.freqOfWatering = freqOfWatering;
}

const schedule = {
    plants: [],
    selectedPlants: [],
    start: function () {
        schedule.plants.push(
            new Plant('Tomato', 'veg', 'images/tomato.png', 'images/tomatoG.png', 2),
            new Plant('Lettuce', 'veg', 'images/lettuce.png', 'images/lettuceG.png', 2),
            new Plant('Peas', 'veg', 'images/pea.png', 'images/peaG.png', 4),
            new Plant('Corn', 'veg', 'images/corn.png', 'images/cornG.png', 1),
            new Plant('Squash', 'veg', 'images/squash.png', 'images/squashG.png', 1),
            new Plant('Iris', 'flower', 'images/iris.png', 'images/irisG.png', 1),
            new Plant('Rose', 'flower', 'images/rose.png', 'images/roseG.png', 1),
            new Plant('Daylily', 'flower', 'images/daylily.png', 'images/daylilyG.png', 3),
            new Plant('Violet', 'flower', 'images/violet.png', 'images/violetG.png', 4),
            new Plant('Peony', 'flower', 'images/peony.png', 'images/peonyG.png', 3),
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

    // assures correct plant image appears
    findPlantByName: function(plantName) {
      for (var i = 0; i < schedule.plants.length; i++ ) {
        if (plantName.toLowerCase() === schedule.plants[i].name.toLowerCase()) {
          return schedule.plants[i];
        }
      }
    },

    // stores data that will appear in watering schedule table
    storeData: function(event) {

        const formSelections = [];

        // pushes checked vegetables into formSelections array
        for (let i = 0; i < event.target.veg.length; i++) {
            const checkbox = event.target.veg[i];
            if (checkbox.checked) {
              var vegName = event.target.veg[i].value;
              formSelections.push(schedule.findPlantByName(vegName));
            }
          }

        // pushes checked flowers into formSelections array
        for (let i = 0; i < event.target.flower.length; i++) {
            const checkbox = event.target.flower[i];
            if (checkbox.checked) {
              var flowerName = event.target.flower[i].value;
              formSelections.push(schedule.findPlantByName(flowerName));
            }
          }

        localStorage.setItem('selectedPlants', JSON.stringify(formSelections));
        console.log(formSelections);
    },

    // changes icon to gold on click
    changeIcon: function(event) {
        var src = event.target.src;
        if (src.indexOf('G.png') === -1) {
        event.target.src = src.replace('.png', 'G.png');
        // day and time clicked saved in local storage
        var lastWatered = day.getDay();
        localStorage.setItem("lastWatered", JSON.stringify(lastWatered));
        var timeLastWatered = day.getTime();
        localStorage.setItem("timeLastWatered", JSON.stringify(timeLastWatered));
        }

        // changes icon back to normal colors, but reverts to gold on refresh
        /*else {
            event.target.src = src.replace('G.png', '.png');
        }*/

        // stores gold image id in local storage
        if (localStorage.getItem("setGold") == null) {
            wetPlants.push(event.target.id);
            localStorage.setItem("setGold", JSON.stringify(wetPlants));

        // adds newly clicked gold images to gold images already in local storage
        } else {
            var oldWetPlants = JSON.parse(localStorage.getItem("setGold"));
            var newWetPlant = event.target.id;
            oldWetPlants.push(newWetPlant);
            localStorage.setItem("setGold", JSON.stringify(oldWetPlants));      
        }
    },

    getSunday: function() {
        var tempDate = new Date();
        var currentDay = tempDate.getDay();
        var newDay = tempDate.getDate() - currentDay;
        tempDate.setDate(newDay);
        tempDate.setHours(0);
        tempDate.setMinutes(0);
        tempDate.setSeconds(0);
        return tempDate;
    },
    
    // removes gold images after user uses the site after the beginning of the next week
    clearGold: function() {
        var lastWatered = JSON.parse(localStorage.getItem("lastWatered"));
        var timeLastWatered = JSON.parse(localStorage.getItem("timeLastWatered"));
        
        if (timeLastWatered < schedule.getSunday()) {
            localStorage.removeItem("setGold");
        }
    }
}

// adds days of the week as table header
function dayHeader() {
    var weekRow = document.createElement("tr");
    table.appendChild(weekRow);
    var cellSpace = document.createElement("th");
    cellSpace.textContent = "";
    weekRow.appendChild(cellSpace);
    for (var weekIndex = 0; weekIndex < 7; weekIndex++) {
        var cellDay = document.createElement("td");
        cellDay.textContent = weekday[weekIndex];
        weekRow.appendChild(cellDay);
    }
}

// adds plant images to table cells
function makeTable() {
    table.textContent = "";
    dayHeader();
    schedule.clearGold();
    for (var plantIndex = 0; plantIndex < schedule.selectedPlants.length; plantIndex++) {
        var plants = schedule.selectedPlants[plantIndex];
        var plantsRow = document.createElement("tr");
        var cell = document.createElement("th");
        cell.textContent = plants.name;
        plantsRow.appendChild(cell);

        for (var dayIndex = 0; dayIndex < weekday.length; dayIndex++) {
            var img = document.createElement('img');
            var id = schedule.selectedPlants[plantIndex].name + dayIndex;

            if (localStorage.getItem("setGold") == null) {
                img.src = schedule.selectedPlants[plantIndex].filePath;                
            } else if (localStorage.setGold.includes(id)) {
                JSON.parse(localStorage.getItem("setGold"));
                img.src = schedule.selectedPlants[plantIndex].wateredFilePath;
                cell.appendChild(img);
            } else {
                img.src = schedule.selectedPlants[plantIndex].filePath;
            }

            var cell = document.createElement("td");
            if (waterDays[schedule.selectedPlants[plantIndex].freqOfWatering-1][dayIndex]) {
                img.setAttribute("id", id);
                cell.appendChild(img);
            }
            plantsRow.appendChild(cell);
        }
        table.appendChild(plantsRow);
    }
}

function makeLastWeek() {
    var timeLastWatered = JSON.parse(localStorage.getItem("timeLastWatered"));
    var lastWatered = new Date(timeLastWatered);
    lastWatered.setDate(20);
    localStorage.setItem("timeLastWatered", JSON.stringify(lastWatered.getTime()));
}

window.addEventListener('load', schedule.start)
