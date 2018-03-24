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

var table = document.getElementById("schedule");

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



        // var goldIcons = JSON.parse(localStorage.getItem("setGold"));
        // if (goldIcons) {
        //     schedule.changeIcon();
        // }

        const scheduleTable = document.getElementById('schedule');
        if (scheduleTable) {
        scheduleTable.addEventListener('click', schedule.changeIcon);
        }
    },

    findPlantByName: function(plantName) {
      for (var i = 0; i < schedule.plants.length; i++ ) {
        if (plantName.toLowerCase() === schedule.plants[i].name.toLowerCase()) {
          return schedule.plants[i];
        }
      }
    },

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

    changeIcon: function(event) {
        var src = event.target.src;
        if (src.indexOf('G.png') === -1) {
        event.target.src = src.replace('.png', 'G.png');
        }
        //   } else {
        //     event.target.src = src.replace('G.png', '.png');
        //   }

        if (localStorage.getItem("setGold") == null) {
            wetPlants.push(event.target.id);
            localStorage.setItem("setGold", JSON.stringify(wetPlants));
        } else {
            var oldWetPlants = JSON.parse(localStorage.getItem("setGold")); // console not finding oldWetPlants
            var newWetPlant = event.target.id;
            oldWetPlants.push(newWetPlant);
            localStorage.setItem("setGold", JSON.stringify(oldWetPlants));      
        }
    }
}

var wetPlants = [];
console.log(wetPlants);

function dayHeader() {
    var weekRow = document.createElement("tr");
    // tr.setAttribute("id", "")
    table.appendChild(weekRow);
    var cellSpace = document.createElement("th");
    cellSpace.textContent = "";
    weekRow.appendChild(cellSpace);
    for (var weekIndex = 0; weekIndex < 7; weekIndex++) {
        var cellDay = document.createElement("td");
        // cellDay.textContent = weekday[day.getDay()];
        // weekRow.appendChild(cellDay);
        // day.setTime(day.getTime() + 86400000);
        cellDay.textContent = weekday[weekIndex];
        weekRow.appendChild(cellDay);
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

        for (var dayIndex = 0; dayIndex < weekday.length; dayIndex++) {
            var img = document.createElement('img');
            var id = schedule.selectedPlants[plantIndex].name + dayIndex;

            if (localStorage.getItem("setGold") == null) {
                img.src = schedule.selectedPlants[plantIndex].filePath;                
            }
            if (localStorage.setGold.includes(id)) {
                JSON.parse(localStorage.getItem("setGold"));
                img.src = schedule.selectedPlants[plantIndex].wateredFilePath;
                cell.appendChild(img);
            } else {
                img.src = schedule.selectedPlants[plantIndex].filePath;
            }

            // if (localStorage.setItem.includes(id)) ***cut from line 160 - made everything gold

            // if(localStorage.setGold.includes(id)) {
            //     JSON.parse(localStorage.getItem("setGold"));
            //     img.src = schedule.selectedPlants[plantIndex].wateredFilePath;
            //     cell.appendChild(img);
            // } else {
            //     img.src = schedule.selectedPlants[plantIndex].filePath;
            // }

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

var waterDays = [
  [true, false, false, false, false, false, false],
  [true, false, false, true, false, false, false],
  [true, false, true, false, false, true, false],
  [true, false, true, false, true, false, true],
]

window.addEventListener('load', schedule.start)
