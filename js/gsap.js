//JS for top-right icons (resume, linkedIn, art-site) fading in
var t1 = new TimelineMax();

t1.from(".mr-3", 3, {
    delay: 0.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from(".third-icon", 3, {
    delay: 0.7,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");

//JS for icon text (resume, linkedIn, art-site) fading-in
var t2 = new TimelineMax();

t2.from(".mb-1", 3, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from(".mb-1", 3, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");


var t3 = new TimelineMax();

t3.from(".my-title", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}).from(".my-title", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}, "-=5");

var t4 = new TimelineMax();

t4.from(".my-name", 3, {
    delay: 0.4,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}).from(".my-name", 3, {
    delay: 0.4,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}, "-=5");


