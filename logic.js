const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
};
const CLASSES_BY_LIGHT = {
    [LIGHTS.red]: 'traffic-light_red',
    [LIGHTS.yellow]: 'traffic-light_yellow',
    [LIGHTS.green]: 'traffic-light_green'
}


const CHANGE_LIGHT_BY_LIGHT = {
    [LIGHTS.red]: LIGHTS.green,
    [LIGHTS.green]: LIGHTS.yellow,
    [LIGHTS.yellow]: LIGHTS.red,
}

let currentLight = LIGHTS.red;

function switchLight() {
    currentLight = CHANGE_LIGHT_BY_LIGHT[currentLight];
    console.log(currentLight);
}

function initLight(node) {
    node.classList.add(CHANGE_LIGHT_BY_LIGHT[currentLight])
}
