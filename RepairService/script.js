const type_btns = document.getElementsByClassName("str-button");
const image = document.getElementById("interior");
const city = document.getElementById("city");
const time = document.getElementById("time");
const size = document.getElementById("size");
const cost = document.getElementById("cost");

let selected = 0;
var cities = ["Rostov-on-Don LCD admiral", "Sochi", "Rostov-on-Don LCD patriotic"];
var sizes = ["81 M2", "150 M2", "180 M2"];
var times = ["3.5 months", "5 months", "10 months"];
var costs = ["Upon request", "10000$", "25288$"];
var paths = ["images/projects/rostov-admiral.jpg", "images/projects/sochi.jpg", "images/projects/rostov-patriotic.jpg"];

const left_btn = document.getElementById("left");
const right_btn = document.getElementById("right");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

const active_dot = "images/controls/active.svg";
const inactive_dot = "images/controls/inactive.svg";
var dots = [dot1, dot2, dot3];



right_btn.onclick = () => {
    if (selected === 2) return;
    switcher(true);
}

left_btn.onclick = () => {
    if (selected === 0) return;
    switcher( false);
}

function switcher (right)  {
    dots[selected].src = inactive_dot;
    type_btns[selected].classList.remove("active");
    if (right)
        selected++;
    else
        selected--;
    dots[selected].src = active_dot;
    type_btns[selected].classList.add("active");

    image.src = paths[selected];
    city.innerHTML = cities[selected];
    size.innerHTML = sizes[selected];
    cost.innerHTML = costs[selected]; 
    time.innerHTML = times[selected];
}