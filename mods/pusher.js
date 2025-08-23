elements.pusher_up = {
    color: "#888888",
    behavior: behaviors.SOLID,
    category: "machines",
    state: "solid",
    conduct: 1,
    tick: function(pixel) {
        if (!pixel.charge) { return }
        let x = pixel.x;
        let y = pixel.y - 1;
        if (outOfBounds(x, y)) { return }
        let target = pixelMap[x][y];
        if (target && elements[target.element].state !== "solid") {
            movePixel(target, x, y - 1);
        }
    },
    charge: 0,
};
