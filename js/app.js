'use strict';

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
            new Plant('Corn', 'veg', '', 7),
            new Plant('Squash', 'veg', '', 1),
            new Plant('Iris', 'flower', '', 3),
            new Plant('Rose', 'flower', '', 1),
            new Plant('Daylily', 'flower', '', 3),
            new Plant('Violet', 'flower', '', 2),
            new Plant('Peony', 'flower', '', 14),                 
        )
        makeTable();
    }
}

var table = document.getElementById("schedule");

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function dayHeader() {
    var weekRow = document.createElement("tr");
    console.log(table);
    table.appendChild(weekRow);
    var cellSpace = document.createElement("td");
    cellSpace.textContent = "";
    weekRow.appendChild(cellSpace);
    for (var weekIndex = 0; weekIndex < daysOfWeek.length; weekIndex++) {
        var cellDay = document.createElement("td");
        cellDay.textContent = daysOfWeek[weekIndex];
        weekRow.appendChild(cellDay);
    }
}

function makeTable() {  
    table.textContent = "";
    dayHeader();
    for (var plantIndex = 0; plantIndex < schedule.plants.length; plantIndex++) {
        console.log("in loop");
        var plants = schedule.plants[plantIndex];
        var plantsRow = document.createElement("tr");
        var cell = document.createElement("td");
        cell.textContent = plants.name;
        plantsRow.appendChild(cell);
        table.appendChild(plantsRow);
        }
    }
//     var table = document.createElement("table");
//     var plants = "";   
//     var rows = 10;
//     var columns = 7;
//     for (var plantRow = 0; plantRow < rows; plantRow++) {
//         plants += "<tr>";
//         for (var dayColumn = 1; dayColumn < columns; dayColumn++) {
//             plants += "<td>" + dayColumn + "</td>";
//         }
//         plants += "</tr>"
//     }        
//     console.log(plants);

window.addEventListener('load', schedule.start)