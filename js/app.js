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
        makeTable();
    }
}

// var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



function buildGarden() {
    var ownership = document.getElementsByClassName("plants");
    var txt = "";
    for (var index = 0; index < ownership.length; index++) {
        if (ownership[index].checked) {
           
        }
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


// function dayHeader() {
//     var rowDay = document.createElement("th");
//     table.appendChild(rowDay);
//     var cellLocation = document.createElement("td");
//     cellLocation.textContent = "";
//     rowDay.appendChild(cellLocation);

//     for (var dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
//         var cell = document.createElement("td");
//         cell.textContent = daysOfWeek[dayIndex];
//         rowDay.appendChild(cell);
//         }
// }

function makeTable() { 
    debugger;
    // var table = document.getElementById("schedule");
    // table.innerHTML = "";
    var plantRow = document.getElementsByTagName("tr");
    console.log(schedule.plants);
    for (var plantIndex = 0; plantIndex < schedule.plants.length; plantIndex++) {
        var plant = schedule.plants[plantIndex];
        console.log(plant);
        var cell = document.createElement("td");
        cell.textContent = plant.name;
        plantRow[1].appendChild(cell);

    }
}

window.addEventListener('load', schedule.start)
// makeTable();
