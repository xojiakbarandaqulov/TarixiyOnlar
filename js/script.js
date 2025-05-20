const historicalEvents = [
    { year: "1941", event: "Ikkinchi Jahon Urushi: Germaniya SSSRga hujum qildi" },
    { year: "1969", event: "Apollo 11 Oyga qo'ngan birinchi kosmik kemaga aylandi" },
    { year: "1991", event: "O'zbekiston mustaqilligini e'lon qildi" },
    { year: "2001", event: "Wikipedia ishga tushirildi" },
    { year: "2010", event: "iPad birinchi marta sotuvga chiqarildi" }
];

function displayCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('uz-UZ', options);
}

function displayHistoricalEvents() {
    const container = document.getElementById('events-container');

    historicalEvents.forEach(item => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-card';
        eventElement.innerHTML = `
            <div class="event-year">${item.year}</div>
            <div class="event-description">${item.event}</div>
        `;
        container.appendChild(eventElement);
    });
}
async function getHistoricalEvents() {
    try {
        const response = await fetch('https://history.muffinlabs.com/date');
        const data = await response.json();
        return processApiData(data);
    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
        return historicalEvents;
    }
}

function processApiData(apiData) {
    const events = [];

    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    if (apiData.data && apiData.data.Events) {
        apiData.data.Events.forEach(item => {
            events.push({
                year: item.year,
                event: item.text
            });
        });
    }

    return events;
}

async function displayHistoricalEvents() {
    const container = document.getElementById('events-container');
    container.innerHTML = ''; // Avvalgi kontentni tozalash

    const events = await getHistoricalEvents();

    events.forEach(item => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-card';
        eventElement.innerHTML = `
            <div class="event-year">${item.year}</div>
            <div class="event-description">${item.event}</div>
        `;
        container.appendChild(eventElement);
    });
}

window.onload = function() {
    displayCurrentDate();
    displayHistoricalEvents();
};
