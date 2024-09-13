//const { Chart } = require("chart.js");

const barCanvas = document.querySelector(".barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
        datasets: [{
            data: [100, 50, 250, 100, 200, 500, 300, 100, 400, 50, 600, 250]
        }]
    }
});


const courbeCanvas = document.querySelector(".courbeCanvas");

const courbeChart = new Chart(courbeCanvas, {
    type: "line",
    data: {
        labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juiellet", "Août", "Septembre", "Novenbre", "Decembre"],
        datasets: [{
            data: [100, 50, 20, 150, 10, 200, 150, 200, 100, 100]
        }]
    }
});