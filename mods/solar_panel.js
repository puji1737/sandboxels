elements.solar_panel = {
    behavior: behaviors.WALL,
    desc: "Menghasilkan listrik ketika terkena cahaya.",
    color: "#0a2a66",
    tick: function(pixel) {
        for (var i = 0; i < adjacentCoords.length; i++) {
            var coords = adjacentCoords[i];
            var x = pixel.x + coords[0];
            var y = pixel.y + coords[1];
            if (!isEmpty(x,y,true)) {
                var sensed = pixelMap[x][y];
                if (sensed.element == 'light') {
                    deletePixel(x,y);
                    pixel.charge = 5;
                    break;
                }
            }
        }
        if (pixel.charge > 0) {
            pixel.charge--;
        }
        doDefaults(pixel);
    },
    conduct: 1,
    movable: false,
    category: "machines",
    darkText: true,
    hardness: 1,
};
