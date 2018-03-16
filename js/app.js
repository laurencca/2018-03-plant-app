var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var waterTable = document.getElementById("schedule");

var Plant = function (name, type, owned, waterCycle) {
    this.name = name;
    this.type = type;
    this.owned = buildGarden();
    this.waterCyle = waterCycle;
}

function buildGarden() {
    var ownership = document.forms[0];
    var txt = "";
    for (var index = 0; index < ownership.length; index++) {
        if (ownership[index].checked) {
            txt = txt + ownership[index].value + " ";
        }
    }

var plantsArray = [];
    if (localStorage.getItem("plantsArray") == null) {
        plantsArray.push(
            new Plant("Tomato", "veggie", false, 2),
            new Plant("Lettuce", "veggie", false, 4),
            new Plant("Peas", "veggie", false, 7),
            new Plant("Corn", "veggie", false, 6),
            new Plant("Squash", "veggie", false, 3),
            new Plant("Iris", "flower", false, 5),
            new Plant("Rose", "flower", false, 2),
            new Plant("Daylily", "flower", false, 7),
            new Plant("Violet", "flower", false, 4),
            new Plant("Peony", "flower", false, 14)
        )
    }


function dayHeader() {
    var rowDay = document.createElement("tr");
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
    waterTable.textContent = "";
    dayHeader();
    for (var plantIndex = 0; plantIndex < plantLocations.length; plantIndex++) {
        var store = plantLocations[plantIndex]
        var storeRow = document.createElement("tr");
        var cell = document.createElement("td");
        cell.textContent = store.name;
        storeRow.appendChild(cell);
        table.appendChild(storeRow);

        var plantTotal = 0;
        for (var index = 0; index < timeOfDay.length; index++) {
            var cell = document.createElement("td");
            var plantResults = store.getplantsPerHour();
            cell.textContent = plantResults;
            storeRow.appendChild(cell);
            plantTotal += plantResults;
        }
        var cellTotal = document.createElement("td");
        cellTotal.textContent = plantTotal;
        storeRow.appendChild(cellTotal);
    }
}
