'use strict';

function Plant (name, type, filepath, freqOfWatering) {
    this.name = name;
    this.type = type;
    this.filepath = filepath;
    this.freqOfWatering = freqOfWatering;
    this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
}

const schedule = {
    plants: [],
    selectedPlants: [],
    start: function () {
        schedule.plants.push(
            new Plant('tomato', 'veg', '', 2),
            new Plant('lettuce', 'veg', '', 2),
            new Plant('peas', 'veg', '', 4),
            new Plant('corn', 'veg', '', 1),
            new Plant('squash', 'veg', '', 1),
            new Plant('iris', 'flower', '', 1),
            new Plant('rose', 'flower', '', 1),
            new Plant('daylily', 'flower', '', 3),
            new Plant('violet', 'flower', '', 2),
            new Plant('peony', 'flower', '', 1),                 
        )
    },

    determineWaterDays: function () {

    }
}

window.addEventListener('load', schedule.start)
