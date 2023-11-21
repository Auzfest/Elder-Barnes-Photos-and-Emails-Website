let currentIndex = 0;
let data;

// Fetch CSV data
fetch('emails.csv')
    .then(response => response.text())
    .then(csvData => {
        data = Papa.parse(csvData, { header: true }).data;
        showItem(currentIndex);
    });

function showItem(index) {
    document.getElementById('title').textContent = data[index].title;
    document.getElementById('description').textContent = data[index].description;
}
/*
function prevItem() {
    currentIndex = (currentIndex + 1) % data.length;
    showItem(currentIndex);
}

function nextItem() {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    showItem(currentIndex);
}
*/

function prevItem() {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    showItem(currentIndex);
}

function nextItem() {
    currentIndex = (currentIndex + 1) % data.length;
    showItem(currentIndex);
}