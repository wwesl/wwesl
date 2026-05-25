let alerted = false;
let ripples = [];
let maxRipples = 15;

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

document.body.addEventListener("mousemove", function(event) {
    let posx = event.clientX;
    let posy = event.clientY;

    if (!alerted) {
        alerted = true;
        // window.alert(toString(posx) + " " + toString(posy));
    }

    let ripple = (ripples.length >= maxRipples) ? getOldestRipple() : makeRipple(posx, posy);;
    ripple.style.top = posy + "px";
    ripple.style.left = posx + "px";
})

console.log("first js script");
