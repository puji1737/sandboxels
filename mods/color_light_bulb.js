elements.custom_light = {
    color: "#ffff00",
    behavior: behaviors.SOLID,
    category: "Machines",
    state: "solid",
    density: 1000,
    conduct: 1,
    hardness: 0.5,
    tempHigh: 2000,
    light: 25,
    lightColor: "#ff0000",
    tick: function(pixel) {
        if (!pixel.colors) {
            pixel.colors = ["#ff0000","#ff8000","#ffff00","#00ff00","#0000ff","#8000ff"];
        }
        if (!pixel.lastColorChange) {
            pixel.lastColorChange = 0;
        }
        if (pixelTicks - pixel.lastColorChange > 10) {
            pixel.lightColor = pixel.colors[Math.floor(Math.random() * pixel.colors.length)];
            pixel.lastColorChange = pixelTicks;
        }
    }
};

