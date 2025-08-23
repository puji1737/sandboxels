behaviors.UP = function(pixel) {
    if (tryMove(pixel, pixel.x, pixel.y - 1)) {
        var target = pixelMap[pixel.x]?.[pixel.y - 1];
        if (target && elements[target.element].movable) {
            movePixel(target, pixel.x, pixel.y - 2);
        }
    }
};

behaviors.DOWN = function(pixel) {
    if (tryMove(pixel, pixel.x, pixel.y + 1)) {
        var target = pixelMap[pixel.x]?.[pixel.y + 1];
        if (target && elements[target.element].movable) {
            movePixel(target, pixel.x, pixel.y + 2);
        }
    }
};

elements.pusher_up = {
    color: "#ffcc00",
    behavior: [
        ["XX","UP","XX"],
        ["XX","M1","XX"],
        ["XX","XX","XX"]
    ],
    category: "machines",
    state: "solid",
    movable: false
};

elements.pusher_down = {
    color: "#00ccff",
    behavior: [
        ["XX","XX","XX"],
        ["XX","M1","XX"],
        ["XX","DOWN","XX"]
    ],
    category: "machines",
    state: "solid",
    movable: false
};

elements.pusher_left = {
    color: "#ff6666",
    behavior: [
        ["XX","XX","XX"],
        ["LEFT","M1","XX"],
        ["XX","XX","XX"]
    ],
    category: "machines",
    state: "solid",
    movable: false
};

elements.pusher_right = {
    color: "#66ff66",
    behavior: [
        ["XX","XX","XX"],
        ["XX","M1","RIGHT"],
        ["XX","XX","XX"]
    ],
    category: "machines",
    state: "solid",
    movable: false
};
