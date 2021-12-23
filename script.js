const images = [
    "bear.jpg",
    "classic.png",
    "escape.jpg",
    "outside.jpg",
    "city.jpg",
    "ghilie.jpg",
    "tank.jpg",
    "wild-tank.jpg",
    "hunt.jpg"
];

// set background
const body = document.querySelector("body");
body.style.backgroundImage = "url('images/" + selectRandom(images) + "')";

function selectRandom(list) {
    return list[Math.round((list.length - 1) * Math.random())];
}