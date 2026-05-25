let alerted = false;
let ripples = [];
let maxRipples = 15;
let posx;
let posy;

function makeRipple() {
    let newRipple = document.createElement("div");
    newRipple.className = "ripple";
    document.body.insertBefore(newRipple, document.getElementById("ref"));
    ripples[ripples.length] = newRipple;
    return newRipple;
}

function getOldestRipple() {
    let oldest;
    ripples.forEach(function(v, i) {
        if (i == 0) {
            oldest = v;
        } else {
            ripples[i-1] = v;
        }
    })
    ripples[maxRipples-1] = oldest;
    return oldest;
}

function animate() {
    let ripple = (ripples.length >= maxRipples) ? getOldestRipple() : makeRipple();
    ripple.style.top = posy + "px";
    ripple.style.left = posx + "px";
    requestAnimationFrame(animate);
}

document.body.addEventListener("mousemove", function(event) {
    posx = event.clientX;
    posy = event.clientY;

    if (!alerted) {
        alerted = true;
        // window.alert(toString(posx) + " " + toString(posy));
    }
})

requestAnimationFrame(animate);

console.log("first js script");
