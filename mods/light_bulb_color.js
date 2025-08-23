elements.custom_light = {
    color: "#ff0000",
    behavior: behaviors.SOLID,
    category: "Machines",
    state: "solid",
    density: 1000,
    conduct: 1,
    hardness: 0.5,
    tempHigh: 2000,
    light: 18,
    lightColor: "#ff0000",
    properties: {
        mode: 0,
        colors: ["#ff0000","#ff8000","#ffff00","#00ff00","#0000ff","#8000ff"],
        lastColorChange: 0
    },
    tick: function(pixel) {
        if (pixel.mode === 1) {
            if (pixelTicks - pixel.lastColorChange > 10) {
                pixel.lightColor = pixel.colors[Math.floor(Math.random() * pixel.colors.length)];
                pixel.lastColorChange = pixelTicks;
            }
        }
    },
    onClick: function(pixel) {
        pixel.mode = (pixel.mode + 1) % 2;
        if (pixel.mode === 0) {
            pixel.lightColor = "#ff0000";
        }
    }
};

