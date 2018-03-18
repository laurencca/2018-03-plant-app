'use strict';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
            new Plant('corn', 'veg', '', 1),
            new Plant('squash', 'veg', '', 1),
            new Plant('iris', 'flower', '', 1),
            new Plant('rose', 'flower', '', 1),
            new Plant('daylily', 'flower', '', 3),
            new Plant('violet', 'flower', '', 2),
            new Plant('peony', 'flower', '', 1),                
        )

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

window.addEventListener('load', schedule.start)
