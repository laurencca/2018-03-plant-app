'use strict';

function Plant (name, type, filepath, freqOfWatering) {
    this.name = name;
    this.type = type;
    this.filepath = filepath;
    this.freqOfWatering = freqOfWatering;
}

const schedule = {
    plants: [],
    selectedPlants: [],
    start: function () {
        schedule.plants.push(
            new Plant('tomato', 'veg', '', 2),
            new Plant('lettuce', 'veg', '', 2),
            new Plant('peas', 'veg', '', 4),
            new Plant('corn', 'veg', '', 7),
            new Plant('squash', 'veg', '', 1),
            new Plant('iris', 'flower', '', 3),
            new Plant('rose', 'flower', '', 1),
            new Plant('daylily', 'flower', '', 3),
            new Plant('violet', 'flower', '', 2),
            new Plant('peony', 'flower', '', 14),                 
        )
    }
}

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var table = document.getElementById("schedule").firstChild;

function buildGarden() {
    var ownership = document.getElementsByClassName("plants");
    var txt = "";
    for (var index = 0; index < ownership.length; index++) {
        if (ownership[index].checked) {
           
        }
    }


//     var html = "";
//     for (var index = 0; index < selectedPlants.length; index++){
//     html +="<tr>"+
//             "<td>"+ (index+1) + "</td>"+
//             "<td>"+ data[index].name + "</td>"+
//             "<td>"+ data[index].number + "</td>"+
//             "<td>"+ data[index].city + "</td>"+
//             "<td>"+ data[index].hobby + "</td>"+
//             "<td>"+ data[index].birthdate + "</td>"+"<td><button data-arrayIndex='"+ i +"' onclick='editData(this)'>Edit</button><button data-arrayIndex='"+ i +"' onclick='deleteData()'>Delete</button></td>"+"</tr>";
// }




function dayHeader() {
    var rowDay = document.createElement("th");
    table.appendChild(rowDay);
    var cellLocation = document.createElement("td");
    cellLocation.textContent = "";
    rowDay.appendChild(cellLocation);

    for (var dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
        var cell = document.createElement("td");
        cell.textContent = daysOfWeek[dayIndex];
        rowDay.appendChild(cell);
        }
}

function makeTable() { 
    table.textContent = "";
    dayHeader();
    for (var plantIndex = 0; plantIndex < selectedPlants.length; plantIndex++) {
        var plant = selectedPlants[plantIndex]
        var plantRow = document.createElement("tr");
        var cell = document.createElement("td");
        cell.textContent = plant.name;
        plantRow.appendChild(cell);
        table.appendChild(plantRow);

        // var plantTotal = 0;
        // for (var index = 0; index < daysOfWeek.length; index++) {
        //     var cell = document.createElement("td");
        //     var plantResults = store.getplantsPerHour();
        //     cell.textContent = plantResults;
        //     storeRow.appendChild(cell);
        //     plantTotal += plantResults;
        }
    }
}

// makeTable();

window.addEventListener('load', schedule.start)