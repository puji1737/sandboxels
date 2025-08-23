if (!behaviors.PUSHER) {
    behaviors.PUSHER = function(direction) {
        return [
            "XX|XX|XX",
            "XX|CH:1|XX",
            "XX|XX|XX",
            function(pixel) {
                if (!pixel.charge) { return }
                let x = pixel.x;
                let y = pixel.y;
                let targetX = x;
                let targetY = y;
                if (direction === "up") targetY -= 1;
                if (direction === "down") targetY += 1;
                if (direction === "left") targetX -= 1;
                if (direction === "right") targetX += 1;
                if (outOfBounds(targetX, targetY)) { return }
                let target = pixelMap[targetX][targetY];
                if (target && elements[target.element].state !== "solid") {
                    if (direction === "up") movePixel(target, targetX, targetY - 1);
                    if (direction === "down") movePixel(target, targetX, targetY + 1);
                    if (direction === "left") movePixel(target, targetX - 1, targetY);
                    if (direction === "right") movePixel(target, targetX + 1, targetY);
                }
            }
        ];
    };
}

elements.pusher_up = {
    color: "#888888",
    behavior: behaviors.PUSHER("up"),
    category: "machines",
    conduct: 1,
    charge: 0
};

elements.pusher_down = {
    color: "#888888",
    behavior: behaviors.PUSHER("down"),
    category: "machines",
    conduct: 1,
    charge: 0
};

elements.pusher_left = {
    color: "#888888",
    behavior: behaviors.PUSHER("left"),
    category: "machines",
    conduct: 1,
    charge: 0
};

elements.pusher_right = {
    color: "#888888",
    behavior: behaviors.PUSHER("right"),
    category: "machines",
    conduct: 1,
    charge: 0
};
