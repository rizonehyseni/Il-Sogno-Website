$(document).ready(function () {
    const $eventCards = $(".event-card, .first-event-card");

    const cardsObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $(entry.target).addClass("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    $eventCards.each(function () {
        cardsObserver.observe(this);
    });

    const $intro = $("#intro h2, #intro p, .section-divider");

    const introObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $(entry.target).addClass("slide-x");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    $intro.each(function () {
        introObserver.observe(this);
    });
});

// per mi gjeneru cards
const upcomingEvents = [
    {
        title: "Jazz Night",
        artist: "Arta Dervishi",
        date: "2025 oct 10",
        time: "20:00",
        price: 18
    }
];

const futureEvents = [
    {
        title: "Sax and Vocals",
        artist: "Nora Jashari",
        date: "2025 oct 10",
        time: "20:00",
        price: 15
    },
    {
        title: "Opera and Dinner Night",
        artist: "Elira Krasniqi",
        date: "2025 oct 10",
        time: "20:00",
        price: 25
    },
    {
        title: "Jazz Meets Pop",
        artist: "Arben Meta Trio",
        date: "2025 oct 10",
        time: "20:00",
        price: 16
    }
];

function createEventCards(events, containerId, cardClass = "event-card") {
    const container = document.getElementById(containerId);

    events.forEach(event => {
        const title = event.title.replaceAll(" ", "%20");
        const artist = event.artist.replaceAll(" ", "%20");

        container.innerHTML += `
            <div class="${cardClass}">
                <h2>${event.title}</h2>
                <h1>${event.artist}</h1>

                <div class="inside_card">
                    <p>Date:<br>${event.date}</p>
                    <img src="/photos/IlSogno.png" width="150px">
                    <p>Time:<br>${event.time}</p>
                </div>

                <p class="price">
                    Price:<br>${event.price}&euro;
                </p>

                <a href="tickets.html?title=${title}&artist=${artist}&price=${event.price}">
                    <button class="tickets">Get Tickets</button>
                </a>
            </div>
        `;
    });
}

createEventCards(upcomingEvents, "upcomingEvents", "first-event-card");
createEventCards(futureEvents, "futureEvents");
