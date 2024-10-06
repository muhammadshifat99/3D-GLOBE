const canvas = document.querySelector('#scene');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext('2d');

if(window.devicePixelRatio > 1){
    canvas.width *= window.devicePixelRatio * 2;
    canvas.height *= window.devicePixelRatio * 2;
    ctx.scale(2, 2);
}

let width = canvas.clientWidth;
let height = canvas.clientHeight;
let rotation = 0;
let dots = [];

const DOT_RADIUS = 4;
let GLOBE_RADIUS = width * 0.7;
let GLOBE_CENTER_Z = -GLOBE_RADIUS;
let PROJECTION_CENTER_X = width / 2;
let PROJECTION_CENTER_Y = height / 2;
FIELD_OF_VIEW = width * 0.8;

